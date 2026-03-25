# Presentation Outline — AI-First Hands-On Workshop

> ⚠️ **This is a content outline and speaker notes reference.**  
> The slide deck is maintained separately. Use this document to follow along during the presentation or review key points afterwards.

---

## Slide 1 — Title

**AI-First Hands-On Workshop**  
*Working with GitHub Copilot the right way*

Juno DevRel · Dynatrace R&D

---

## Slide 2 — What We're Doing Today

**60 minutes. One goal: make a real PR.**

- You will clone a repo
- You will use Copilot to do something useful
- You will commit and push your work
- You will open a pull request

By the end, you'll know exactly how to repeat this on your own projects.

---

## Slide 3 — The Problem We're Solving

Most people use Copilot like a smarter autocomplete.  
That's leaving 80% of the value on the table.

> Copilot is only as good as the context it's given.

The gap between "Copilot is annoying" and "Copilot is invaluable" is almost always **how the project is structured**.

---

## Slide 4 — The Juno Feedback Digest

**Our learning vehicle for today.**

A fictional Juno capability:
- Collects developer feedback from Slack, tickets, and surveys
- Analyses trends and sentiment
- Delivers a weekly digest to product teams

Why this project?
- Everyone understands the problem
- It has non-technical tasks (PRD, feedback analysis) AND technical ones (architecture, API design)
- It mirrors real Juno DevRel work

---

## Slide 5 — Three Tools That Change How You Work

### 1. `copilot-instructions.md`

- Lives at `.github/copilot-instructions.md`
- Automatically loaded by Copilot on every conversation
- Tell Copilot: what the project is, who the audience is, what files matter, what tone to use

> **Demo:** Same question — with and without `copilot-instructions.md`

---

### 2. Copilot Skills

- Portable instruction packages that define a persona, behaviour rules, and output format
- Provided by the **R&D AI Knowledge Base** — install once, available across all your projects
- No skill files in your project repo — they're managed centrally in the knowledge base

Two skills to know for this workshop:

| Skill | What It Does |
|-------|--------------|
| **`dt-github`** | Manage PRs, issues, releases, and GitHub Actions via the `gh` CLI — straight from Copilot Chat |
| **`dt-skill-creator`** | Design and publish new skills to the Dynatrace knowledge base, with built-in safety guardrails |

> **Demo:** Use `dt-github` to open a PR from Copilot Chat after completing your workshop task

---

### 3. Model Context Protocol (MCP)

- Lets Copilot query external systems — beyond your local files
- At Dynatrace: **Juno MCP** connects Copilot to the Software Catalog
- Provided by the **R&D AI Knowledge Base** — no per-project `.vscode/mcp.json` needed

> **Live demo:** Ask Copilot "who owns the auth service?" — watch it query the Juno catalog

---

## Slide 6 — The Repo Tour

```
juno-feedback-digest/
├── .github/copilot-instructions.md   ← Copilot reads this automatically
├── docs/                             ← Documents for participants to complete
├── knowledge-base/                   ← Context for Copilot (personas, feedback, project bg)
└── workshop-materials/               ← Everything you're reading right now
```

Key insight: **the `knowledge-base/` folder is what makes Copilot useful here.**  
Without it, Copilot would give generic answers. With it, answers are grounded in this project.

---

## Slide 7 — Pick Your Task

| Task | Who It's For |
|------|-------------|
| Complete the PRD | Anyone comfortable with product thinking |
| Analyse the feedback | Anyone — great first task |
| Write user stories | Anyone — practice with personas |
| Sketch the architecture | Engineers and technical PMs |
| Draft a launch announcement | Anyone who writes comms |

**One rule:** Use Copilot for the actual work. Don't write it yourself.

---

## Slide 8 — The Git Workflow

Every participant opens a PR. Here's the flow:

```bash
git checkout -b workshop/your-name
# ... do your task ...
git add .
git commit -m "Add [task] — workshop contribution"
git push -u origin workshop/your-name
# click the link → open PR on GitHub
```

`workshop/*` branches are unprotected — you can push freely.  
`main` is protected — changes go through PRs only.

---

## Slide 9 — What Good Context Looks Like

The difference between a useful and useless Copilot interaction:

| ❌ Without context | ✅ With context |
|------------------|----------------|
| Generic answer about "feedback systems" | Answer grounded in Juno, Dynatrace, your personas |
| Has to ask clarifying questions | Already knows the project, audience, and constraints |
| Output needs heavy editing | Output is 80% usable immediately |

**The lesson:** Before you ask Copilot anything, ask yourself: *does it have what it needs?*

---

## Slide 10 — The AI-First Mindset

This is bigger than one workshop.

**AI-First means:**
- Structuring your work so AI can participate meaningfully
- Writing `copilot-instructions.md` before you start coding
- Building a knowledge base, not just a codebase
- Treating Copilot as a collaborator, not a search engine

You can do this on your next project. Today.

---

## Slide 11 — Where to Go Next

| What | Where |
|------|-------|
| Juno Portal | `juno.internal.dynatrace.com` |
| R&D AI Knowledge Base | `github.com/Dynatrace-Internal/rnd-ai-knowledgebase` |
| Copilot Community | `#github-copilot-community-of-practice` on Slack |
| Help with Juno | `#help-juno` on Slack |
| This repo | `github.com/MichaelBinz/juno-feedback-digest` |

---

## Slide 12 — Now: Do the Work

**You have 20 minutes.**

1. Pick your task from the README
2. Use Copilot to complete it
3. Save your file(s) in the repo
4. Come back for the Git workflow walkthrough

*Facilitators are here if you get stuck.*
