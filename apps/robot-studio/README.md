# Robo Film Studio

A claude.ai Artifact app that runs the 20 film-crew skills as a studio of cartoon robots in 3D. You pitch
an idea to the coordinator robot, Captain Clipboard (production-manager). Each robot has its own room
along a hallway and writes its department's document live with Claude. Captain Clipboard walks from room
to room to hand out work and collect it, and you watch it all from several cameras.

Published artifact (private to the owner until shared): https://claude.ai/artifact/Xd2KwqV7HTda6wTpS3ovNG

## Pages

| Page | What it is |
|---|---|
| 🏠 Lobby | A one-card new-film form: pitch, length, look, how it runs, and "Claude makes pictures and video". Everything else is under *More options*: genre, aspect ratio, language, target tools, crew presets and robot toggles, custom review stops, stop point, detail, brain power, animation speed. Also your saved films and the crew. |
| 🪑 Cabin | First person: you sit across the desk from Captain Clipboard. The chat and review cards are here. While he is out, the big TV behind his desk shows the live director feed. |
| 🏢 Studio | The 3D building. **Director cam** cuts between rooms automatically: tracking shots in the hallway, two-shots at hand-offs, and close-ups and over-the-screen shots while a robot works. **Top view** lets you drag and zoom, with name tags. **Visit a room** gives a camera inside any of the 21 rooms. A live box shows the words the current robot is writing. Click any robot or room to get its card. |
| 🍿 Screening | Documents (streaming live), department boards, pictures, the previz video player, and the assembled master document. |
| 🧭 Board | The production line: continue, pause, stop, run mode, stop point, and per-stage view, redo and skip. |
| 🔑 Keys | API keys for your own image and video tools, plus the Anthropic key used when the studio runs outside claude.ai. |

The command bar at the top is always there. You only talk to Captain Clipboard. Your messages become one
of the following:
- notes for upcoming work
- change requests on finished work (the owner revises, and everything built on it is refreshed)
- pause, resume, skip, redo, a mode change or a stop point

## The 3D studio

- Built with three.js 0.160 (loaded from jsdelivr).
- The look: a warm evening studio under a night sky, with environment lighting, soft shadows, bloom glow on
  lamps, screens and neon, and glossy toy-plastic robots. ✨ HD in the Studio bar turns shadows and glow off
  for slow devices.
- Rooms have wood floors, patterned wallpaper in the robot's colours, wainscot and trims, a night-sky window,
  a pendant lamp, the robot's poster, a rug, a desk with drawers, a live monitor and a desk lamp, and an
  office chair.
- The coordinator's cabin has herringbone parquet, a night-city window wall, a mission board, a live-feed
  TV, an oil bar, a sofa, trophies and posters. A neon ROBO FILM STUDIO sign is over the hallway.
- Each of the other 19 robots has its own room along a hallway. Every room has a door sign, a desk with a
  monitor that shows the robot's live text, and furniture themed to its job. For example: a piano and
  speakers for music, a camera on a tripod and light stands for the cinematographer, a vocal booth for
  voices, a green screen for VFX, and a punching bag for action.
- The robots live on their own. They wander their rooms, peek into the hallway, look around, stretch, wave
  and hop. They walk to their desk to work, with typing, drawing, thinking and talking animations and
  emoji particles. They celebrate when done. Robots not in the crew doze at their desks.
- Dusty the roomba patrols the hallway.
- If WebGL or three.js can't load, the earlier 2D isometric map is used instead.

## Pictures and video made by Claude with code

- **Concept sketches:** the character designer, production designer and storyboard artist draw SVG
  sketches.
- **3D previz:** after the shot records, Greenscreen Gary (vfx-supervisor) writes a JSON scene spec for
  every shot: sky, ground, light, weather, objects, characters with action and expression, camera move,
  and subtitle. The studio renders it with three.js:
  - keyframe pictures in Screening → Pictures
  - a real-time previz player with a title card, subtitles and a generated music bed
  - a `.webm` video export, recorded in real time
  - rebuilding any single shot with a note
- **Code image:** each image prompt card can be turned into a 3D still.

## Your Magnific API key

The 🔑 Keys page has one generation service: **Magnific**. Add your Magnific API key (Business or Enterprise
plan; create it in Magnific → Settings → API Keys) and every image prompt and video prompt card gets a 🖼️
Magnific button. The calls follow Magnific's API docs:
- base URL `https://api.magnific.com/v1/ai/`
- the key goes in the `x-magnific-api-key` header
- each generation is a task, polled at `GET <model path>/<task id>` until `COMPLETED`, and the result is
  read from `generated`

The model paths are editable. The image defaults are `mystic`, `text-to-image/seedream-v4` and
`text-to-image/flux-dev`. The video defaults are `text-to-video/wan-v2-6-720p`,
`text-to-video/veo-3-1-lite` and `video/kling-v3-pro`.

Keys are stored only in this browser (per film, or for all films). They are never saved to your account,
never shown to the robots, and never put in exports.

**Important:** claude.ai does not let artifact pages call outside services, so inside claude.ai the Magnific
buttons cannot reach Magnific. There, the robots think with your Claude account, and pictures and the previz
video are made with code. Press **📥 Take the studio home** to save `robo-film-studio.html` (also in this
folder as `robot-studio-standalone.html`). Open it in Chrome or Edge on your computer and add your Magnific
key there.

That file also needs one more key, the Claude brain (an Anthropic API key), because outside claude.ai the
robots have no other way to think. That card only appears in the downloaded file.

## How the skills are used

`build.py` embeds every skill's `SKILL.md`, the references and templates each stage needs, and the shared
contracts. Each stage prompt contains:
- the robot's full skill text
- the project settings
- the upstream department documents with their versions
- the client notes
- a JSON shape for the boards

Shot records are compiled one scene per call. QC runs on its own with only the documents. The previz runs
in batches of five shots.

## Build and test

```bash
python apps/robot-studio/build.py   # writes robot-studio.html (artifact) and robot-studio-standalone.html
RFS_DEPS=/path/with/three-and-sdk node apps/robot-studio/test/e2e.js
```

The end-to-end test runs Chromium with software WebGL, a fake Claude (`test/mock.js`) and a fake Anthropic
API. It checks:
- a full production through the review gates, a mid-run note and revisions
- the director, top and room cameras (screenshots)
- the boards, 3D keyframes, a code image, previz playback and `.webm` export
- the Keys page
- phone width
- the standalone copy calling the Anthropic API with a browser key: model, effort and headers are verified
  on the fake endpoint

## Limits

- Every stage spends Claude usage: about 25-40 calls per full run, plus sketches and previz.
- The Magnific calls follow Magnific's public API docs but were not run against the real service (no key was
  available). If Magnific rejects browser calls (CORS) or a field, the card shows Magnific's error message.
- The previz is a blocking and timing tool made of simple shapes, not final-quality video.
- `.webm` export records in real time, so a 60-second film takes about 60 seconds to export.
- The deterministic validator (`validate_production.py`) does not run in the browser. QC here is a model
  review.
