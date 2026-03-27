---
marp: true
theme: dynatrace
size: 16:9
paginate: true
---

<!-- _class: cover -->
# Juno Lean Coffee: Agentic Engineering in Practice
## Special Edition: Getting started with AI - from Zero to Pull Request

Juno DevRel · Dynatrace R&D

---

<!-- _class: content -->
# How Today Works

This is a **self-paced workshop**. You work through a checklist at your own speed — we regroup at two short checkpoints.

| | Block | Format |
|---|-------|--------|
| | Prerequisites | Pre-check |
| 1 | **Phase 1 — Get Started** | Self-paced |
| | 🔔 Checkpoint A — MCP Demo | Instructor-led |
| 2 | **Phase 2 — Level Up with MCP & Skills** | Self-paced |
| | 🔔 Checkpoint B — Git & PR Demo | Instructor-led |
| 3 | **Phase 3 — Ship It** | Self-paced |
| | Bonus — Go Deeper | Self-paced |

Your guide: **`workshop-materials/checklist.md`** — open it now.

---

<!-- _class: content -->
# Who Are We?

**Your workshop facilitators**

**Michael Binz**
Used to be an engineer, but not for the past 10+ years. New to Agentic Development — I just went through the struggle.

**Maximilian Zauner**
Actual engineer. Here to help with the tough questions.

---

<!-- _class: content -->
# Prerequisites

*Confirm these before we start. If anything is missing, ask a facilitator.*

- [ ] GitHub account with `@dynatrace.com` email as primary
- [ ] 2FA enabled on GitHub
- [ ] Member of the **`Dynatrace-CoPilot`** GitHub organisation
- [ ] **GitHub Copilot Business** licence active — [verify here](https://github.com/settings/copilot/features)
- [ ] **VS Code** installed with the **GitHub Copilot** extension

&nbsp;

All good? Let's go.

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
# Phase 1 — Get Started

*Goal: get hands-on with Copilot as fast as possible.*

---

<!-- _class: content -->
# Phase 1 — Steps

### 1. Clone and open the repo

```bash
git clone https://github.com/MichaelBinz/juno-feedback-digest.git
```

Open in VS Code: **File → Open Folder → select `juno-feedback-digest`**

### 2. Meet Copilot Chat

Open Copilot Chat (`Cmd+Shift+I`) and try this warm-up prompt:

```
Read knowledge-base/project-context.md and summarise it in 5 bullets.
```

### 3. Understand `copilot-instructions.md`

Open `.github/copilot-instructions.md` — this is **why Copilot gives project-specific answers**.

---

<!-- _class: content -->
# Phase 1 — Pick a Task

Choose **one task** and work on it using Copilot Chat. Save your output to a file in the repo.

| Task | Example Prompt |
|------|----------------|
| **Complete the PRD** | *"Read docs/prd-draft.md and write the missing Success Metrics section"* |
| **Analyse the feedback** | *"Read knowledge-base/sample-feedback.md and summarise the top 3 themes with quotes and suggested actions"* |
| **Write user stories** | *"Read knowledge-base/personas.md and write 3 user stories for the Platform Lead"* |
| **Sketch the architecture** | *"Read the PRD and project context, then fill in docs/architecture-sketch.md"* |
| **Draft a launch announcement** | *"Draft a Slack announcement for #drs-all introducing the Juno Feedback Digest"* |

📖 More prompts: `workshop-materials/copilot-prompt-cheatsheet.md`

---

<!-- _class: section -->
# 🔔 Checkpoint A — MCP Demo

**Pause here.** Eyes up — quick demo before you continue.

---

<!-- _class: content -->
# Model Context Protocol (MCP)

- Lets Copilot query **external systems** — beyond your local files
- At Dynatrace: **Juno MCP** connects Copilot to the Software Catalog
- Provided by the **R&D AI Knowledge Base** extension — install once, no per-project config

&nbsp;

| What You Can Ask | What Happens |
|-----------------|-------------|
| *"Who owns the token-service?"* | Copilot queries the Juno Software Catalog |
| *"What services does Team X own?"* | Live data, not local files |

---

<!-- _class: content -->
# Live Demo: Juno MCP

```
Who owns the token-service?
```

Watch Copilot:
1. Recognise this needs external data
2. Call the Juno MCP server
3. Return a real answer from the Software Catalog

---

<!-- _class: section -->
# Phase 2 — Level Up with MCP & Skills

*Goal: connect Copilot to external data sources and explore advanced capabilities.*

---

<!-- _class: content -->
# Phase 2 — Steps

### 1. Install the R&D AI Knowledge Base

- Open VS Code Settings (`Cmd+,`)
- Search for `chat.plugins.marketplaces`
- Click **Add Item** and add: `Dynatrace-Internal/rnd-ai-knowledgebase`

### 2. Install the Juno MCP server

- Open Extensions (`Cmd+Shift+X`) → search **Juno MCP** → Install

### 3. Try an MCP query

```
Who owns the token-service?
```

### 4. Explore Copilot Skills

- **`dt-github`** — ask Copilot to list open issues in this repo
- **`dt-skill-creator`** — ask Copilot to evaluate a skill or draft a new one

### 5. Continue your task from Phase 1

---

<!-- _class: section -->
# 🔔 Checkpoint B — Git & PR Demo

**Pause here.** Quick regroup — let me show you the finish line.

---

<!-- _class: content -->
# The GitHub Workflow

![w:900 center](github-workflow.svg)

---

<!-- _class: section -->
# Phase 3 — Ship It

*Goal: commit your work and open a pull request.*

---

<!-- _class: content -->
# Phase 3 — Steps

### 1. Create a branch and push

```bash
git checkout -b workshop/your-name
git add .
git commit -m "Add [your task] — workshop contribution"
git push -u origin workshop/your-name
```

### 2. Open a Pull Request

Go to the repo on GitHub → click **"Compare & pull request"** → add a title and description → **"Create pull request"**

&nbsp;

**Or use Copilot:**

```
Create a pull request with all my changes.
```

📖 Full Git guide: `CONTRIBUTING.md`

---

<!-- _class: content -->
# Bonus — Go Deeper

*Finished early? Pick the track that interests you most:*

**Group 1 — AI Setup**
Write a `copilot-instructions.md` for your own project · Use `dt-skill-creator` to design a new Copilot Skill

**Group 2 — Juno**
Browse the Juno Portal at `juno.internal.dynatrace.com` · Explore the Software Catalog — find your team's services

**Group 3 — DT App Development**
Check-out existing guides to get started.

[App Dev with AI (official)](https://developer.dynatrace.com/quickstart/app-development-with-ai/#setup-instructions) · [Product Builder / MCP](https://dynatrace.sharepoint.com/sites/RnD/SitePages/Product-Builder.aspx) · [Vibe Coding Guide](https://dynatrace.sharepoint.com/sites/ProdOps/SitePages/Vibecoding.aspx) · [Christoph's Practical Guide](https://dynatrace.sharepoint.com/sites/Observability/SitePages/AI-Engineering-Christophs-Practical-Guide.aspx)

---

<!-- _class: section -->
# Wrap-Up

---

<!-- _class: content -->
# What I Learned Today

*Self-check — do you understand these?*

- [ ] Copilot's quality depends on the **context** it's given
- [ ] `copilot-instructions.md` gives Copilot project-level context automatically
- [ ] **MCP** lets Copilot query external systems (Software Catalog, etc.)
- [ ] **Copilot Skills** are reusable instruction packages from the Knowledge Base
- [ ] I can use Copilot for non-code tasks: PRDs, analysis, announcements, architecture
- [ ] I know how to create a branch, commit, push, and open a PR
- [ ] I know where to get help: `#github-copilot-community-of-practice` and `#help-juno`

---

<!-- _class: content -->
# The AI-First Mindset

This is bigger than one workshop.

**AI-First means:**

- Structuring your work so AI can participate meaningfully
- Building a knowledge base, not just a codebase
- Treating AI as a collaborator, not a search engine

GitHub Copilot, Claude Code, Cursor — these are just tools. The specific features will change, but the core principles stay the same: **context, structure, and intent**.

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
