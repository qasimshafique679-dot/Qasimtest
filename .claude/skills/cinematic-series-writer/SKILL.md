---
name: cinematic-series-writer
description: Creates a complete, original, photorealistic AI video series production pack for Google Flow / Veo (also Kling, Hailuo) — asks the production-setting questions first, then delivers in stages the story, character / creature / location bibles, reference-image prompts for every character, a scene breakup with start/end frames so every clip continues the previous one, self-contained 8-second video prompts with natural human skin, dialogue, voices, sound design, editing plan and a continuity check. Learns from a viral transcript or video without copying it. Use whenever the user wants to make an AI movie, long cinematic video, AI series or episode, 30-scene / multi-clip story, Google Flow prompts, or remake a viral AI video as an original story — even if they only say "new story", "naya video banana hai", "Flow prompts do" or paste a transcript.
---

# Cinematic Series Writer

Turn a story idea or a viral video into an original, continuity-locked production pack for AI video. The full rules for every stage are in `references/workflow.md` — **read it completely before writing Stage 1**, and follow it exactly.

Reply in the user's language (English, Urdu or Roman Urdu). Keep image and video prompts in English, since the tools understand English best; dialogue goes in the language the user chose.

## Step 1 — Ask the production questions

Ask before writing anything. Use the `AskUserQuestion` tool when it is available (it shows clickable options; the user can always type their own answer via "Other"). If it is not available, ask the same questions in one short numbered chat message.

Skip any question the user has already answered in their message.

**Round 1** (one AskUserQuestion call, 4 questions):

1. **Platform** — "Where will you post the video?"
   - Reels / Shorts / TikTok (9:16, vertical)
   - YouTube (16:9, wide)
   - Both (make 16:9, crop to 9:16 later)
2. **Length** — "How long should the full video be?"
   - 1 minute (8 clips)
   - 3 minutes (23 clips)
   - 5 minutes (38 clips)
   - 10 minutes (75 clips)
3. **Language** — "What language should the characters speak?"
   - English
   - Urdu (Roman Urdu script)
   - No dialogue (only sounds and music)
   - Hindi / Punjabi / other → user types it
4. **Genre** — "What type of story?"
   - Fantasy / creature (dragon, guardian animal)
   - Family / emotional drama
   - Survival / adventure
   - Thriller / mystery

**Round 2** (one AskUserQuestion call, up to 4 questions):

5. **Story source** — "What should the story be based on?"
   - My own idea (I'll type it)
   - A viral video transcript (I'll paste it)
   - A video file (I'll upload it)
   - You invent an original story
6. **Setting** — "Where does the story take place?"
   - Snowy mountains / forest
   - Pakistani or South Asian village / city
   - Western town or city
   - Medieval / fantasy kingdom
7. **Time period** — "When does it happen?"
   - Modern day
   - Medieval / ancient
   - 1950s–1990s (past decades)
8. **Image tool** — "Which tool will you use for the character pictures?"
   - Gemini (Nano Banana) — recommended, free
   - ChatGPT
   - Seedream / Dreamina
   - Midjourney

Defaults (do not ask, just state them): video tool = Google Flow (Veo), clip length = 8 seconds, rating = PG-13 (no gore).

**Round 3 — collect the story input** (plain chat message, not AskUserQuestion):
- *Own idea* → "Please write your story idea in 2–10 lines."
- *Transcript* → "Please paste the transcript." Treat it as auto-generated: ignore caption errors such as "Heat. Heat." or "[music]", and merge differently spelled versions of the same name.
- *Video file* → follow **Analysing a video file** below to get the transcript and scenes yourself.
- *You invent* → propose 3 one-line original story ideas that fit the answers and let the user pick (AskUserQuestion if available).

## Step 2 — Confirm the settings

Show a short **Production Settings** summary before Stage 1:

```
Platform: … (aspect ratio) · Length: … min = N clips × 8 s
Genre: … · Setting: … · Period: … · Language: …
Video tool: Google Flow (Veo) · Image tool: … · Rating: PG-13
Story source: …
```

Number of clips = total seconds ÷ 8, rounded up. Then continue straight to Stage 1 (don't wait for approval unless something is unclear).

## Step 3 — Produce the stages

Follow `references/workflow.md`:
- **Stage 1** — analysis (if transcript), original concept, character bible with locked lines, voice profiles, environment bible, props, costume tracker, colour grade, **reference image prompts** for every character, creature growth stage, location and key prop.
- **Stage 2** — scene breakup table with START FRAME → ACTION → END FRAME for all N clips.
- **Stage 3** — Flow video prompts in batches of about 12 clips.
- **Stage 4** — voice sheet, sound plan, editing plan, final quality check.

After each stage (and each Stage 3 batch), stop and say: *"Type **next** to continue."*

Never break these rules from the workflow: the story must be 100% original (no copied names, lines, scenes or creature design); each clip's START FRAME equals the previous END FRAME; locked character and location lines are repeated word for word; each prompt is 100–180 words with the natural-skin realism line and at most 5 negatives; dialogue is at most about 18 words per clip.

## Step 4 — Save the pack

When a working directory is available, save the pack as `video-series/<title-slug>/` with one file per stage (`1-bible-and-images.md`, `2-scene-breakup.md`, `3-flow-prompts.md`, `4-sound-edit-check.md`), appending Stage 3 batches to the same file. Tell the user where the files are. Otherwise just output everything in chat.

## Step 5 — Production tips (end of Stage 4)

Finish with these steps for the user:
1. Make the reference images first and keep the best ones.
2. In Flow, create one project and add the images as **Ingredients**.
3. Generate each clip with its listed Ingredients; make 2–3 takes and keep the best.
4. Join connected clips with **Frames to Video** (last frame → first frame) or **Extend**.
5. Edit in Flow Scenebuilder or CapCut using the sound and editing plan.
6. Switch on the **AI-generated content label** when posting on YouTube, Facebook or TikTok.

## Analysing a video file

When the user uploads a video:
1. `ffprobe` for duration, resolution and fps.
2. Scene cuts: `ffmpeg -i IN -vf "select='gt(scene,0.3)',showinfo" -vsync vfr -f null - 2>&1 | grep -o 'pts_time:[0-9.]*'`
3. Contact sheet: `ffmpeg -i IN -vf "fps=12/DURATION,scale=480:-1,tile=4x3" -frames:v 1 grid.jpg`, then view the image.
4. Burned-in subtitles: crop the caption area at 2 fps into a timestamped grid (`crop`, `drawtext=text='%{pts\:hms}'`, `tile=4x10`) and read it. If there are no subtitles, transcribe with Whisper when the network allows.
5. Use the findings only as structure for Rule 1 (original story), never as content to copy.
