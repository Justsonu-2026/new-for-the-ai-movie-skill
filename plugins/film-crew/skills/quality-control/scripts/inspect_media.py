#!/usr/bin/env python3
"""Inspect a video or audio file for QC: metadata, loudness, frames and a contact sheet.

Usage:
    python inspect_media.py <file> [--every 0.5] [--out DIR] [--no-frames] [--no-loudness] [--cols 4]

Prints duration, resolution, frame rate, codecs and (if audio) integrated loudness (LUFS) and true peak.
For video, writes one frame every --every seconds to DIR/frame_<time>.png and DIR/contact_sheet.png, so
the frames can be opened and inspected as images.

Requires ffmpeg and ffprobe on PATH (https://ffmpeg.org). Uses only the Python standard library.
"""
import argparse
import json
import math
import os
import re
import shutil
import subprocess
import sys

CONTACT_THUMB_WIDTH = 320  # px per thumbnail; readable for composition checks, small enough to view at once


def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True)


def probe(path):
    res = run(["ffprobe", "-v", "error", "-print_format", "json", "-show_format", "-show_streams", path])
    if res.returncode:
        sys.exit(f"ERROR: ffprobe could not read {path}: {res.stderr.strip()}")
    return json.loads(res.stdout)


def loudness(path):
    res = run(["ffmpeg", "-hide_banner", "-nostats", "-i", path, "-af", "ebur128=peak=true", "-f", "null", "-"])
    text = res.stderr
    integ = re.findall(r"I:\s+(-?[\d.]+) LUFS", text)
    peak = re.findall(r"Peak:\s+(-?[\d.]+) dBFS", text)
    lra = re.findall(r"LRA:\s+([\d.]+) LU", text)
    return {"integrated_lufs": float(integ[-1]) if integ else None,
            "true_peak_dbfs": float(peak[-1]) if peak else None,
            "loudness_range_lu": float(lra[-1]) if lra else None}


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("file")
    ap.add_argument("--every", type=float, default=0.5, help="seconds between extracted frames")
    ap.add_argument("--out", default=None)
    ap.add_argument("--no-frames", action="store_true")
    ap.add_argument("--no-loudness", action="store_true")
    ap.add_argument("--cols", type=int, default=4)
    args = ap.parse_args()
    for tool in ("ffmpeg", "ffprobe"):
        if not shutil.which(tool):
            sys.exit(f"ERROR: {tool} not found on PATH. Install ffmpeg (https://ffmpeg.org) or supply frames manually.")
    if not os.path.exists(args.file):
        sys.exit(f"ERROR: {args.file} does not exist")

    info = probe(args.file)
    fmt = info.get("format", {})
    duration = float(fmt.get("duration", 0) or 0)
    report = {"file": args.file, "duration_s": round(duration, 3), "streams": []}
    has_video = has_audio = False
    for s in info.get("streams", []):
        if s.get("codec_type") == "video":
            has_video = True
            num, den = (s.get("avg_frame_rate") or "0/1").split("/")
            fps = round(float(num) / float(den), 3) if float(den) else None
            w, h = s.get("width"), s.get("height")
            g = math.gcd(w, h) if w and h else 1
            report["streams"].append({"type": "video", "codec": s.get("codec_name"), "width": w, "height": h,
                                      "aspect": f"{w // g}:{h // g}" if w and h else None, "fps": fps})
        elif s.get("codec_type") == "audio":
            has_audio = True
            report["streams"].append({"type": "audio", "codec": s.get("codec_name"),
                                      "sample_rate": s.get("sample_rate"), "channels": s.get("channels")})
    if has_audio and not args.no_loudness:
        report["loudness"] = loudness(args.file)

    if has_video and not args.no_frames:
        out = args.out or os.path.splitext(args.file)[0] + "_qc"
        os.makedirs(out, exist_ok=True)
        times = [round(i * args.every, 3) for i in range(int(duration / args.every) + 1)] or [0.0]
        frames = []
        for t in times:
            t = min(t, max(duration - 0.05, 0))
            fp = os.path.join(out, f"frame_{t:07.3f}s.png")
            res = run(["ffmpeg", "-y", "-v", "error", "-ss", f"{t:.3f}", "-i", args.file, "-frames:v", "1", fp])
            if res.returncode == 0 and os.path.exists(fp):
                frames.append(fp)
        rows = math.ceil(len(times) / args.cols)
        sheet = os.path.join(out, "contact_sheet.png")
        vf = (f"fps=1/{args.every},scale={CONTACT_THUMB_WIDTH}:-1,"
              f"drawtext=text='%{{pts\\:hms}}':x=6:y=6:fontsize=16:fontcolor=white:box=1:boxcolor=black@0.6,"
              f"tile={args.cols}x{rows}")
        res = run(["ffmpeg", "-y", "-v", "error", "-i", args.file, "-vf", vf, "-frames:v", "1", sheet])
        if res.returncode:  # drawtext needs a font library; fall back to a sheet without timestamps
            vf = f"fps=1/{args.every},scale={CONTACT_THUMB_WIDTH}:-1,tile={args.cols}x{rows}"
            res = run(["ffmpeg", "-y", "-v", "error", "-i", args.file, "-vf", vf, "-frames:v", "1", sheet])
        report["frames"] = frames
        report["contact_sheet"] = sheet if res.returncode == 0 else None
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
