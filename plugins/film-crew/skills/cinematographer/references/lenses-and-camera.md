# Lenses and Camera

## Contents
1. Focal length (full-frame equivalent)
2. Aperture and depth of field
3. Camera height and distance
4. Support
5. Movement execution
6. Frame rate and shutter
7. Words generators understand

## 1. Focal length (full-frame equivalent)
Use full-frame equivalent millimeters so values mean the same across tools.
| Range | Look | Typical use |
|---|---|---|
| 14-24 mm | very wide, perspective exaggerated, space expands | establishing, cramped interiors, unease close up |
| 28-35 mm | wide-normal, environmental, natural with context | walking-and-talking, mediums with background story |
| 40-50 mm | normal, close to human perception | honest coverage, conversation |
| 65-85 mm | short tele, flattering faces, background softens | close-ups, emotional singles |
| 100-135 mm | long, strong compression, isolation | voyeur views, faces against abstract backgrounds |
| 200 mm + | extreme compression | heat haze, crowds stacked, distant observation |
Close with a wide lens = intimate and distorted; far with a long lens = observed and compressed. Same shot
size, different feeling — choose by intent.

## 2. Aperture and depth of field
- Wider aperture (f/1.4-f/2.8) → shallow DOF: subject isolated, background blurred.
- Middle (f/4-f/5.6) → face sharp, background readable but soft.
- Narrow (f/8-f/16) → deep focus: staging in layers, everything readable.
- DOF also shrinks with longer lenses and closer distances.
- State what is sharp and what is soft ("sharp on her eyes, the door behind soft but readable").
- Focus pull (rack): from subject A to B at a given second, motivated by a look or a reveal.

## 3. Camera height and distance
- Eye-level = the subject's eye height (from the lineup heights, e.g. 1.5 m for a 160 cm character).
- Low angle: camera below the eyes, looking up (power); high angle: above, looking down (vulnerability).
- Shot size depends on distance and focal length; give both (e.g. "MCU at 1.2 m on 50 mm").

## 4. Support
| Support | Feel |
|---|---|
| Tripod / locked-off | stable, observational, formal |
| Dolly / slider | smooth precise push/pull/truck |
| Crane / jib | vertical reveals, rising/falling |
| Steadicam / gimbal | floating, following through space |
| Handheld | urgent, subjective, documentary |
| Drone | aerial scale, transitions between worlds |
| Car mount | vehicle interiors/exteriors at speed |

## 5. Movement execution
Write: move type (from the schema vocabulary), path on the plan, distance or angle, speed, start framing →
end framing, trigger, duration. Example: "dolly-in 0.8 m over 4 s, MS → MCU, starts as she reads the label,
ends on her eyes." Slow moves are more reliable in generation than fast ones.

## 6. Frame rate and shutter
- 24 fps standard narrative look. Higher frame rates are used for slow motion when played back at 24.
- 180° shutter equivalent (1/48 s at 24 fps) gives natural motion blur; a narrower shutter gives staccato,
  crisp motion (often used for action intensity); wider gives smeared, dreamy motion.
- For AI generation, these become descriptive words ("natural motion blur", "crisp staccato motion",
  "slow motion").

## 7. Words generators understand
Pair each number with its visible effect, since generators interpret camera numbers loosely:
- "85 mm portrait lens, background compressed and creamy" · "24 mm wide lens, room stretches, close and
  slightly distorted" · "deep focus, foreground railing and background sign both sharp" · "slow push-in" ·
  "locked-off static camera" · "handheld, subtle shake". Official guides use this kind of language (Veo 3.1
  lists "shallow depth of field, wide-angle lens, soft focus, macro lens, deep focus"; Sora 2 uses lens and
  DOF lines such as "35 mm virtual lens; shallow depth of field").
