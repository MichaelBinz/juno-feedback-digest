---
marp: true
theme: dynatrace
size: 16:9
paginate: true
---

<!-- _class: cover -->
# AI-First Hands-On Workshop
## Working with GitHub Copilot the right way

Juno DevRel · Dynatrace R&D

---

<!-- _class: agenda -->
# How Today Works

| | Block | Format |
|---|-------|--------|
| 1 | Introduction | Instructor-led |
| 2 | **Phase 1 — Get Started** | Self-paced |
| 3 | Checkpoint A — MCP Demo | Instructor-led |
| 4 | **Phase 2 — Level Up** | Self-paced |
| 5 | Checkpoint B — Git & PR Demo | Instructor-led |
| 6 | **Phase 3 — Ship It** | Self-paced |
| 7 | Wrap-up | Instructor-led |

Your guide: **`workshop-materials/checklist.md`**

---

<!-- _class: quote -->
> "Copilot is only as good as the context it's given."

Most people use Copilot like a smarter autocomplete. That's leaving 80% of the value on the table.

The gap between "Copilot is annoying" and "Copilot is invaluable" is almost always **how the project is structured**.

---

<!-- _class: content -->
# The Juno Feedback Digest

**Our learning vehicle for today** — a fictional Juno capability:

- Collects developer feedback from Slack, tickets, and surveys
- Analyses trends and sentiment
- Delivers a weekly digest to product teams

**Why this project?**

- Everyone understands the problem
- Non-technical tasks (PRD, feedback analysis) **and** technical ones (architecture, API design)
- It mirrors real Juno DevRel work

---

<!-- _class: content -->
# What Makes Copilot Useful Here

This repo has a **`knowledge-base/`** folder and a **`.github/copilot-instructions.md`** file.

```
juno-feedback-digest/
├── .github/copilot-instructions.md   ← Copilot reads this automatically
├── docs/                             ← Documents for you to complete
├── knowledge-base/                   ← Context: personas, feedback, project bg
└── workshop-materials/               ← Checklist, cheatsheet, glossary
```

Without these, Copilot gives generic answers.
With them, Copilot is grounded in **this project**.

You'll see this in action in Phase 1.

---

<!-- _class: section -->
# ▶ Open `checklist.md` — Start Phase 1

*Clone the repo, open Copilot Chat, pick a task, and start working.*

Facilitators are here if you get stuck.

---

<!-- _class: section -->
# 🔔 Checkpoint A — MCP

---

<!-- _class: content -->
# Model Context Protocol (MCP)

- Lets Copilot query **external systems** — beyond your local files
- At Dynatrace: **Juno MCP** connects Copilot to the Software Catalog
- Provided by the **R&D AI Knowledge Base** extension — install once, no per-project config

&nbsp;

| What You Can Ask | What Happens |
|-----------------|-------------|
| *"Who owns the auth service?"* | Copilot queries the Juno Software Catalog |
| *"What services does Team X own?"* | Live data, not local files |

---

<!-- _class: content -->
# Live Demo: Juno MCP

```
Who owns the auth service?
```

Watch Copilot:
1. Recognise this needs external data
2. Call the Juno MCP server
3. Return a real answer from the Software Catalog

&nbsp;

**Now continue with Phase 2 on your checklist** — install the Knowledge Base extension and try it yourself.

---

<!-- _class: section -->
# 🔔 Checkpoint B — Git & PRs

---

<!-- _class: content -->
# The Git Workflow

```bash
git checkout -b workshop/your-name
# ... do your task ...
git add .
git commit -m "Add [task] — workshop contribution"
git push -u origin workshop/your-name
# click the link → open PR on GitHub
```

`workshop/*` branches are unprotected — push freely.
`main` is protected — changes go through PRs only.

---

<!-- _class: content -->
# What "Done" Looks Like

A pull request on GitHub with your workshop contribution:

- Clear title: *"Add feedback analysis — workshop contribution"*
- Short description of what you did
- Your changed/new files visible in the diff

**Cheat mode:** The `dt-github` skill can create the PR from Copilot Chat.

&nbsp;

**Now continue with Phase 3 on your checklist** — create your branch, commit, push, and open a PR.

---

<!-- _class: section -->
# Wrap-Up

---

<!-- _class: content -->
# The AI-First Mindset

This is bigger than one workshop.

**AI-First means:**

- Structuring your work so AI can participate meaningfully
- Writing `copilot-instructions.md` **before** you start coding
- Building a knowledge base, not just a codebase
- Treating Copilot as a collaborator, not a search engine

&nbsp;

You can do this on your next project. **Today.**

---

<!-- _class: content -->
# Where to Go Next

| What | Where |
|------|-------|
| Juno Portal | `juno.internal.dynatrace.com` |
| R&D AI Knowledge Base | `github.com/Dynatrace-Internal/rnd-ai-knowledgebase` |
| Copilot Community | `#github-copilot-community-of-practice` on Slack |
| Help with Juno | `#help-juno` on Slack |
| This repo | `github.com/MichaelBinz/juno-feedback-digest` |

---

<!-- _class: closing -->
# Thank You

Questions?

---

<!-- _class: content -->
# Workshop Survey

We'd love your feedback!

![QR](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://forms.office.com/Pages/ResponsePage.aspx?id=o-PrcDBbXUOdZ3cW10yhkI7MPH5ym5RIqCG-nh3SNVJUMlFKUUg1QU1FTU9TOTZIWkJHRjIwNExFQS4u)

[**Take the survey →**](https://forms.office.com/Pages/ResponsePage.aspx?id=o-PrcDBbXUOdZ3cW10yhkI7MPH5ym5RIqCG-nh3SNVJUMlFKUUg1QU1FTU9TOTZIWkJHRjIwNExFQS4u)
