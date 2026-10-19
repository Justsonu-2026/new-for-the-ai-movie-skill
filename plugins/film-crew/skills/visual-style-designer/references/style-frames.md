# Style Frames (Look Test)

Style frames are a few finished-looking stills that prove the look before the production spends
generations on hundreds of images.

## Process
1. Pick 2-4 moments: the opening image, the most intense moment, the climax, and the most different
   palette in the color script.
2. Write a brief per frame: scene, moment, characters (by lock, if designs are approved; else silhouettes),
   setting, light, palette anchors, the style lock verbatim, aspect ratio.
3. Generate 2-4 variations per frame with the user's tool (image-prompt-engineer adapts the briefs).
4. Review against the checklist; approve one per frame; record the paths in the style record's
   `reference_images`.
5. Feed approved frames to every later image prompt as style references where the tool supports it.

## Brief format
```yaml
style_frame: SF-01
scene: SC02
moment: "Maya sprints along the wet rooftop under the neon sign"
content: "<character and costume locks if approved>, <location lock>"
light: "magenta neon key from frame right, sodium haze sky, rain streaks backlit"
palette: ["wet black #121417", "magenta #D63A8A", "sodium orange #C98A3B"]
style: "<STYLE style_lock>"
aspect_ratio: "2.39:1"
```

## Approval checklist
- [ ] Medium and rendering read as specified (not drifting toward a generic "AI look")
- [ ] Palette anchors present; no stray dominant colors
- [ ] Contrast/key as specified (shadows to near black, or keeping detail)
- [ ] Texture (grain, halation, line) present at the intended strength
- [ ] Lens character (DOF, flares or none) matches
- [ ] Frames from different scenes still look like the same film
- [ ] Nothing unwanted: text, watermarks, logos, extra people
If two frames from different scenes look like different films, tighten the style lock and re-test before
approval.
