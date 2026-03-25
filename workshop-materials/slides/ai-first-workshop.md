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
# Today's Agenda

1. What we're doing today
2. Why most Copilot usage leaves value on the table
3. Our learning vehicle: Juno Feedback Digest
4. Three tools that change how you work
5. Repo tour and picking your task
6. The Git workflow
7. What good context looks like
8. The AI-First mindset

---

<!-- _class: content -->
# What We're Doing Today

**60 minutes. One goal: make a real PR.**

- You will clone a repo
- You will use Copilot to do something useful
- You will commit and push your work
- You will open a pull request

By the end, you'll know exactly how to repeat this on your own projects.

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
- It has non-technical tasks (PRD, feedback analysis) **and** technical ones (architecture, API design)
- It mirrors real Juno DevRel work

---

<!-- _class: section -->
# Three Tools That Change How You Work

---

<!-- _class: content -->
# Tool 1: `copilot-instructions.md`

- Lives at `.github/copilot-instructions.md`
- **Automatically loaded** by Copilot on every conversation in this repo
- Tell Copilot: what the project is, who the audience is, which files matter, what tone to use

&nbsp;

> **Demo:** Ask the same question — once without `copilot-instructions.md`, once with it.

---

<!-- _class: content -->
# Tool 2: Copilot Skills

Portable instruction packages that define a persona, behaviour rules, and output format.

Provided by the **R&D AI Knowledge Base** — install once, available across all your projects.

| Skill | What It Does |
|-------|-------------|
| **`dt-github`** | Manage PRs, issues, releases, and GitHub Actions via the `gh` CLI |
| **`dt-skill-creator`** | Design and publish new skills with built-in safety guardrails |

> **Demo:** Use `dt-github` to open a PR from Copilot Chat after completing your task.

---

<!-- _class: content -->
# Tool 3: Model Context Protocol (MCP)

- Lets Copilot query **external systems** — beyond your local files
- At Dynatrace: **Juno MCP** connects Copilot to the Software Catalog
- Provided by the **R&D AI Knowledge Base** — no per-project configuration needed

&nbsp;

> **Live demo:** Ask Copilot "who owns the auth service?" — watch it query the Juno catalog.

---

<!-- _class: section -->
# Workshop Setup

---

<!-- _class: code -->
# The Repo Tour

```
juno-feedback-digest/
├── .github/copilot-instructions.md   ← Copilot reads this automatically
├── docs/                             ← Documents for participants to complete
├── knowledge-base/                   ← Context for Copilot (personas, feedback, project bg)
└── workshop-materials/               ← Everything you're reading right now
```

**Key insight:** The `knowledge-base/` folder is what makes Copilot useful here.

Without it, Copilot gives generic answers. With it, answers are grounded in this project.

---

<!-- _class: content -->
# Pick Your Task

| Task | Who It's For |
|------|-------------|
| Complete the PRD | Anyone comfortable with product thinking |
| Analyse the feedback | Anyone — great first task |
| Write user stories | Anyone — practice with personas |
| Sketch the architecture | Engineers and technical PMs |
| Draft a launch announcement | Anyone who writes comms |

&nbsp;

**One rule:** Use Copilot for the actual work. Don't write it yourself.

---

<!-- _class: code -->
# The Git Workflow

Every participant opens a PR. Here's the flow:

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

<!-- _class: section -->
# The AI-First Way

---

<!-- _class: content-2col -->
# What Good Context Looks Like

<div class="columns">
<div class="col">

### ❌ Without context

- Generic answer about "feedback systems"
- Has to ask clarifying questions
- Output needs heavy editing

</div>
<div class="col">

### ✅ With context

- Answer grounded in Juno, Dynatrace, your personas
- Already knows the project, audience, and constraints
- Output is 80% usable immediately

</div>
</div>

**Before you ask Copilot anything, ask yourself:** *does it have what it needs?*

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

<!-- _class: content -->
# Now: Do the Work

**You have 20 minutes.**

1. Pick your task from the README
2. Use Copilot to complete it
3. Save your file(s) in the repo
4. Come back for the Git workflow walkthrough

&nbsp;

*Facilitators are here if you get stuck.*

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
