---
name: story-short-write
description: Writes AI short-drama (mini-series reel) videos end to end — story hook, script with dialogue, character sheets, consistent per-shot AI video prompts, voice notes and a CapCut editing plan. Also breaks down an existing reel/video (scenes, transcript, characters) to remake it as an original story. Use whenever the user wants to write, plan or remake a short drama, reel, AI video story, "hidden billionaire / revenge / CEO" style episode, or asks for prompts for Veo, Kling, Hailuo, Wan, Pika, Runway or similar tools — even if they just say "story banao", "naya episode", or share a reel to copy the style.
---

# Story Short Write — AI short-drama creator

Produce a complete, ready-to-generate production pack for a vertical (9:16) AI short drama. Reply in the user's language (English, Urdu or Roman Urdu); keep prompts themselves in English, since video tools understand English best.

## Step 0 — Gather inputs (ask only what is missing)
- Story idea or genre (hidden billionaire, revenge, CEO in disguise, evil mother-in-law, poor-to-rich, betrayal, family drama)
- Length: default **20–30 s teaser** (8–12 shots) or **60–90 s episode** (20–35 shots)
- Setting / country / culture (e.g. Western mansion, Pakistani wedding, Dubai office)
- Video tool the user will use (default: give generic prompts that work in Veo, Kling, Hailuo)
- Series title and episode number (invent if not given)

If the user shares a video to copy, first run **Breakdown mode** (below), then write a NEW original story in the same style. Never copy the source's title, character names or exact dialogue — change them, because copying gets pages flagged for copyright.

## Step 1 — Story hook (story-structure rules)
- **0–2 s hook:** open on a reveal, insult, slap, shock or big money number.
- **Middle:** one clear twist (hidden identity, secret promotion, betrayal revealed).
- **Ending:** cliffhanger on a face reaction — never resolve it. Ends with the "Full episodes in bio" call to action.
- Max 3–4 speaking characters. Lines are short (3–10 words), emotional, easy to subtitle.

## Step 2 — Character sheets
For every character write a **locked description** (one line) used word-for-word in every prompt:

`[Name] — [gender], [age], [hair], [face detail], [outfit with colours], [one accessory]`

Example: `Lucas — man, late 30s, short dark-brown hair, clean-shaven, charcoal suit, white shirt, silver tie, small lapel pin`

Also give a **reference-image prompt** per character (front-facing portrait, neutral background, same outfit) so the user can create one master picture in Gemini / ChatGPT / Leonardo and use it for image-to-video. Remind them: same outfit + same hair in every shot = stable face.

## Step 3 — Location sheet
One locked location line + lighting line reused in every prompt, plus a reference-image prompt for the location.

## Step 4 — Script + shot list
Output a table:

| # | Time | Shot type | Character(s) | Action / emotion | Dialogue (subtitle) | SFX |

Rules: each shot 1.5–4 s; alternate wide → two-shot → close-up reactions; put the biggest reaction close-up right before the cliffhanger.

## Step 5 — Per-shot AI video prompts
One code block per shot using this formula:

`[Shot type + camera move], [locked character line], [visible action/emotion as physical movement], [locked location line], [locked lighting line], cinematic vertical 9:16, photorealistic, natural skin texture, shallow depth of field`

- Describe emotions physically ("eyes widen, jaw drops, then a slow greedy grin"), not abstractly ("he is surprised").
- If the tool supports dialogue audio (Veo, Kling), append: `He says: "<line>" in a <voice description> voice.`
- Add a short **negative prompt** line: `no text, no subtitles, no extra fingers, no face distortion, no morphing`.
- Tell the user to generate 2–4 takes per shot and keep the best.

## Step 6 — Voices
Give each character one fixed voice description (age, tone, accent, pace) for ElevenLabs / CapCut TTS, and mention lip-sync tools (Kling Lip-Sync, Hedra, Sync.so) when audio is added after.

## Step 7 — CapCut edit plan
1. Clips in order, trimmed to the shot-list timing
2. Voices + background music (tense / romantic / dramatic) + SFX (whoosh, gasp, slap, cash register)
3. Auto-captions: white bold, centre lower-third, key words highlighted yellow
4. Series title bar on top (bold, coloured outline) + a sticker
5. Name tag lower-third on main character's first appearance (`Name — Title`)
6. Bottom CTA "Full Episodes in bio" + animated arrow
7. Export 1080×1920, 30 fps

## Step 8 — Posting pack
Caption (2 lines + question to drive comments), 5–8 hashtags, and a thumbnail idea (biggest reaction face + 3-word text).

## Free tools reference (limits change — tell the user to check)
- Video + dialogue audio: Google Veo (Gemini app / Flow), Kling AI, Hailuo (MiniMax), Meta AI, Grok Imagine
- Open-source / unlimited on own GPU: Wan 2.x
- Character images: Gemini, ChatGPT, Leonardo, Ideogram
- Character consistency features: Kling Elements, Veo Ingredients, Hailuo Subject Reference, Runway References
- Voice: ElevenLabs free, CapCut TTS · Editing: CapCut

## Breakdown mode (analysing an existing video)
When given a video file:
1. `ffprobe` → duration, resolution, fps.
2. Scene cuts: `ffmpeg -i IN -vf "select='gt(scene,0.3)',showinfo" -vsync vfr -f null - 2>&1 | grep -o 'pts_time:[0-9.]*'`
3. Contact sheet to view: `ffmpeg -i IN -vf "fps=12/DURATION,scale=480:-1,tile=4x3" -frames:v 1 grid.jpg`, then Read the image.
4. Subtitles/transcript: crop the caption area at 2 fps into a timestamped tile grid (`crop`, `drawtext=text='%{pts\:hms}'`, `tile=4x10`) and read it. If speech has no burned-in subtitles, transcribe with Whisper when the network allows model downloads.
5. Report: characters, setting, transcript table, shot list, overlays/branding, likely AI tool and AI-detection signs, then continue with Steps 1–8 for an original remake.

## Output format
Save the full pack as `video-breakdowns/<series-slug>-ep<N>.md` in the working directory (when one exists) and show a short summary in chat.
