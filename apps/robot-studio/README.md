# Robo Film Studio

A claude.ai Artifact app that runs the 20 film-crew skills as a studio of cartoon robots. You pitch an idea
to the coordinator robot, Captain Clipboard (production-manager). It walks to each department room,
hands over the work, and the robot there writes the department's document live using Claude. You watch
it all on an isometric studio map.

Published artifact (private to the owner until shared): https://claude.ai/artifact/Xd2KwqV7HTda6wTpS3ovNG

## What it does

- **Command bar on top:** type to the coordinator, or upload images, video (a frame is taken), scripts and
  notes. You only ever talk to the coordinator.
- **Setup wizard:**
  - idea and format: runtime, aspect ratio, medium, genre, language, target image and video models
  - crew: presets, or tap robots on and off
  - run mode: Key gates, Every step, Fully auto, or Custom (you tick which stages stop for review)
  - a stop point, brain power (model tier), detail level and animation speed
  - pictures: prompts only, Claude-drawn SVG sketches, or real images from a Higgsfield connector (beta)
- **Live studio:** 9 rooms, 20 robots plus Dusty the corridor roomba.
  - The coordinator walks the corridors, so you see walking instead of loading spinners.
  - Robots think in thought bubbles, show the latest words they are writing, fill the paper on their desk,
    draw, and celebrate when done.
  - The camera follows the action; you can pan, zoom or switch to the overview.
- **Stage tracker and Pipeline tab:** progress for every stage, plus retry, redo, skip and add.
- **Comments while it runs:** the coordinator (a quick-tier Claude call) turns each message into one of:
  - a note for upcoming work
  - a change request (CR-NNN) on finished work: the owner revises and everything built on it becomes STALE
    and is refreshed
  - a pause, resume, skip, redo, mode change or stop point
  If notes arrive while a robot is writing, that robot revises its document right after it finishes.
- **Review gates:** approve, request changes (the robot revises its previous version), redo from scratch,
  or approve all from here.
- **Preview:** each document streams live in the Doc view, which stays usable while the crew works. The
  Board view shows cards for each department:
  - characters with their locks
  - the palette and colour script
  - shot records
  - storyboard panels
  - the edit timeline
  - voice lines, read aloud by a robot voice
  - music cues
  - prompt cards with copy, sketch and generate buttons
  - the QC report, with **Send fixes to the crew**

  There is also a timed **Animatic** player and the assembled **Master** document.
- **Export:**
  - master production document (.md)
  - storyboard sheet (.html)
  - prompt pack (.csv)
  - screenplay (.fountain.txt)
  - project file (.json, which you can import again)
- **Saving:** projects are kept per user in the artifact's private database, or in the browser when that
  isn't available.

## How the skills are used

`build.py` embeds every skill's `SKILL.md` body, its references and templates, and the shared contracts
into the page. Each stage prompt contains:

- the stage robot's full skill text
- the files that stage needs (fewer at Short detail)
- the project settings
- the upstream department documents with their versions
- the client notes
- a JSON shape for the structured preview

A short preamble says what is different in a browser: no files, scripts or subagents; markers and the
handoff block still apply. Shot records are compiled one scene per call, following
`compiling-shot-records.md`. QC runs in its own call, with only the documents as input.

## Build and test

```bash
python apps/robot-studio/build.py        # writes apps/robot-studio/robot-studio.html
node apps/robot-studio/test/e2e.js       # Playwright run against a fake Claude (test/mock.js)
```

The end-to-end test runs a whole production with the fake Claude and checks:
- the gates, a revision with the previous version included, a mid-run note, a change request after wrap
  (19 stages marked stale)
- SVG sanitising, export, no console errors and no horizontal scroll at phone width

## Limits

- Every stage spends the viewer's own Claude usage. A full crew run is about 25-35 calls (more with
  sketches and per-scene shot records). The first call asks for permission.
- The real-image path calls the viewer's **Higgsfield** connector through the page's `mcp` capability. It
  reads each tool's input schema at run time (`describeTool`) and lets Claude fill the arguments. This was
  not tested against the live connector. If the connector's display name in claude.ai is not "Higgsfield",
  or the page can't display the returned image URL, the card says so and shows the URL.
- Model output is not validated by `validate_production.py` (scripts can't run in the browser). QC is a
  model review, not the deterministic validator.
