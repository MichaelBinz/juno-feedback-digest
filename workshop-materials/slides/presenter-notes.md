# Presenter Notes — AI-First Hands-On Workshop

> Timing cues, demo scripts, and links for the facilitator. Keep this open during the session.

---

## Workshop Flow

| Block | Slides | Duration | Format |
|-------|--------|----------|--------|
| Introduction | 1–6 | ~10 min | Instructor-led |
| Phase 1 — Get Started | — | ~15 min | Self-paced |
| Checkpoint A — MCP Demo | 7–9 | ~5 min | Instructor-led |
| Phase 2 — Level Up | — | ~10 min | Self-paced |
| Checkpoint B — Git & PR Demo | 10–12 | ~5 min | Instructor-led |
| Phase 3 — Ship It | — | ~10 min | Self-paced |
| Wrap-up | 13–16 | ~5 min | Instructor-led |

---

## Introduction (slides 1–6)

**What to say:**
- "60 minutes, one goal: open a real PR using Copilot."
- Explain the 3-phase self-paced flow — point to the table on slide 2.
- Walk through the "Copilot is only as good as the context" quote — this is the key takeaway.
- Briefly introduce the Juno Feedback Digest as the learning vehicle.
- Show the repo structure on slide 5 — highlight `knowledge-base/` and `.github/copilot-instructions.md`.
- End with: **"Open `workshop-materials/checklist.md` and start Phase 1. I'm here for questions."**

**Common issues during Phase 1:**
- Clone failures → check GitHub org membership and auth (VS Code credential manager or PAT)
- Copilot Chat not available → check licence at `github.com/settings/copilot/features`
- "I don't know which task to pick" → recommend "Analyse the feedback" as the easiest entry point

---

## Checkpoint A — MCP Demo (slides 7–9)

**When to trigger:** ~15 minutes in, or when most participants have finished their first Copilot interaction.

**Get their attention:** "Alright, eyes up here for 5 minutes — I want to show you something."

**Demo script:**
1. Open Copilot Chat in your VS Code
2. Type: `Who owns the auth service?`
3. Show Copilot calling the Juno MCP server in real-time
4. Highlight: "This isn't reading a local file — it's querying the live Software Catalog"
5. Show a second query if time allows: `What services does Team X own?`

**What to say after:**
- "To try this yourself, you need the R&D AI Knowledge Base extension."
- "Phase 2 on your checklist walks you through the install. Continue working."

**Troubleshooting:**
- MCP server not responding → reload VS Code, check extension is installed
- "I don't see MCP tools" → make sure R&D AI Knowledge Base extension is enabled

---

## Checkpoint B — Git & PR Demo (slides 10–12)

**When to trigger:** ~30 minutes in, or when most participants have saved work.

**Get their attention:** "Quick regroup — let me show you the finish line."

**Demo script:**
1. Show your terminal: create a branch, stage, commit, push
2. Switch to GitHub in the browser — click "Compare & pull request"
3. Fill in a title and description, click "Create pull request"
4. Show the PR — "This is what 'done' looks like."
5. Bonus: show the `dt-github` skill doing it from Chat

**What to say after:**
- "Phase 3 on your checklist has all the commands. Go open your PR."
- "If you've never used Git, ask Copilot — it can walk you through every step."
- "Remember: `workshop/*` branches are unprotected, so you can push freely."

**Troubleshooting:**
- Auth errors on push → use VS Code's credential manager or generate a PAT at `github.com/settings/tokens`
- "Permission denied" → confirm Dynatrace-CoPilot org membership
- Merge conflicts → shouldn't happen on `workshop/*` branches, but `git pull --rebase origin main` if needed

---

## Wrap-up (slides 13–16)

**What to say:**
- Quick recap of the AI-First mindset — it's about context, not cleverness
- Point to the resources table — especially the Slack channels for ongoing help
- "You can do this on your next project. Write a `copilot-instructions.md` first."
- Show the survey QR code — "Please fill this out, it takes 2 minutes."

---

## Links to Share

| What | Link |
|------|------|
| Workshop Feedback Survey | [Fill out the survey](https://forms.office.com/Pages/ResponsePage.aspx?id=o-PrcDBbXUOdZ3cW10yhkI7MPH5ym5RIqCG-nh3SNVJUMlFKUUg1QU1FTU9TOTZIWkJHRjIwNExFQS4u) |
| Juno Portal | `juno.internal.dynatrace.com` |
| R&D AI Knowledge Base | `github.com/Dynatrace-Internal/rnd-ai-knowledgebase` |
| Copilot Community | `#github-copilot-community-of-practice` on Slack |
| Help with Juno | `#help-juno` on Slack |
| This repo | `github.com/MichaelBinz/juno-feedback-digest` |
