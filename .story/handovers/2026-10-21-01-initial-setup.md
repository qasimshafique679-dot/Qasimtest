# Initial claudestory setup

## Setup decisions
- Project type: content workspace for AI short-drama reels (not a software app). Language: markdown.
- Surface / stack / deployment / auth / data model: not applicable (no code).
- Sensitive domain: no.
- Quality checks: Minimal (no tests or build, because there is no code).
- Proposal approved as-is by the user.

## Structure
- foundation (complete): T-001 reel breakdown, T-002 story-short-write skill, T-003 find-skills.
- episode-1: T-004 hook/title → T-005 script, T-006 characters → T-007 shot prompts; T-008 voice notes.
- production: T-009 clips (Veo/Kling), T-010 voice + music, T-011 CapCut edit.
- publish: T-012 post, T-013 track performance.
- series: T-014 plan episodes 2–5, T-015 break down 2 more reels.

## Notes
- The claudestory MCP server from the plugin failed to connect in this cloud session, so setup used the CLI (`npm install -g @anthropologies/claudestory`). The cloud container is ephemeral, so the CLI has to be reinstalled in each new session (or added to the environment setup script).
- Next up: T-004, pick an original story hook. Use the story-short-write skill.
