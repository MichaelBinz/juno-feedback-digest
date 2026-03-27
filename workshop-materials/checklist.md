# Workshop Checklist

This is your guide for the workshop. Work through it at your own pace — the instructor will call out checkpoints when it's time to regroup.

> **How it works:** Complete each phase in order. When you hit a 🔔 **Checkpoint**, the instructor will do a short demo. You **don't have to wait** if you're ahead. Feel free to keep going or wait for the instructor.

---

## Prerequisites

*Confirm these before the workshop starts. If anything is missing, ask a facilitator for help.*

- [ ] I have a GitHub account with my `@dynatrace.com` email as primary
- [ ] I have 2FA enabled on GitHub
- [ ] I am a member of the `Dynatrace-CoPilot` GitHub organisation
- [ ] I have a **GitHub Copilot Business** licence active — [verify here](https://github.com/settings/copilot/features)
- [ ] I have **VS Code** installed with the **GitHub Copilot** extension

---

## Phase 1 — Get Started

*Goal: get hands-on with Copilot as fast as possible.*

### Clone and open the repo

- [ ] Clone the workshop repo:
  ```bash
  git clone https://github.com/MichaelBinz/juno-feedback-digest.git
  ```
- [ ] Open it in VS Code: **File → Open Folder → select `juno-feedback-digest`**

### Meet Copilot Chat

- [ ] Open Copilot Chat in VS Code (`Ctrl+Shift+I` / `Cmd+Shift+I`)
- [ ] Try a warm-up prompt — paste this into Chat:
  ```
  Read knowledge-base/project-context.md and summarise it in 5 bullets.
  ```
- [ ] Look at the answer. Notice how it already knows about the Juno Feedback Digest — that's because `.github/copilot-instructions.md` gives Copilot project context automatically.

### Understand `copilot-instructions.md`

- [ ] Open `.github/copilot-instructions.md` and skim it
- [ ] Notice what it tells Copilot: project summary, key files, tone, constraints
- [ ] Understand: **this is why Copilot gives project-specific answers instead of generic ones**

### Pick a task and start working

Choose **one task** from the table below and work on it using Copilot Chat. Save your output to a file in the repo.

| Task | What to Do | Example Prompt |
|------|-----------|----------------|
| **Complete the PRD** | Fill in the missing *Success Metrics* section in `docs/prd-draft.md` | *"Read docs/prd-draft.md and write the missing Success Metrics section"* |
| **Analyse the feedback** | Summarise the top 3 themes from `knowledge-base/sample-feedback.md` | *"Read knowledge-base/sample-feedback.md and summarise the top 3 themes with quotes and suggested actions"* |
| **Write user stories** | Write 3 user stories for the Platform Lead persona | *"Read knowledge-base/personas.md and write 3 user stories for the Platform Lead"* |
| **Sketch the architecture** | Propose a data flow in `docs/architecture-sketch.md` | *"Read the PRD and project context, then fill in docs/architecture-sketch.md"* |
| **Draft a launch announcement** | Write a Slack post for `#drs-all` | *"Read the project context and PRD, then draft a Slack announcement introducing the Juno Feedback Digest"* |

> 📖 More prompts: [`copilot-prompt-cheatsheet.md`](./copilot-prompt-cheatsheet.md)

- [ ] I picked a task and started working on it
- [ ] I saved my work to a file in the repo

---

## 🔔 Checkpoint A — MCP Demo

The instructor will demonstrate the Model Context Protocol (MCP) and how Copilot can query external systems like the Juno Software Catalog.

---

## Phase 2 — Level Up with MCP & Skills

*Goal: connect Copilot to external data sources and explore advanced capabilities.*

### Install the R&D AI Knowledge Base

The **R&D AI Knowledge Base** gives you MCP servers and Copilot Skills — no per-project configuration needed. It's registered as a Copilot plugin marketplace in VS Code settings.

- [ ] Open VS Code Settings (`Ctrl+,` / `Cmd+,`)
- [ ] Search for `chat.plugins.marketplaces`
- [ ] Click **Add Item** and add:
  ```
  Dynatrace-Internal/rnd-ai-knowledgebase
  ```
- [ ] Reload VS Code if prompted

> **Authentication issues?** If you see an error accessing the marketplace, run `gh auth login --web` in a terminal first, then repeat the step.

### Install the Juno MCP server

Now that the marketplace is registered, you can install the MCP server as an extension:

- [ ] Open the Extensions view (`Ctrl+Shift+X` / `Cmd+Shift+X`)
- [ ] Search for **Juno MCP** (it's now available from the Knowledge Base marketplace)
- [ ] Install it and reload VS Code if prompted

> 📖 Source: `github.com/Dynatrace-Internal/rnd-ai-knowledgebase`

> **Troubleshooting — manual setup:** If the MCP server installs but doesn't connect, add it manually:
> 1. Open VS Code Settings (`Ctrl+,` / `Cmd+,`) and search for `mcp`
> 2. Click **Edit in settings.json** next to `mcp servers`
> 3. Add the following entry inside the `"servers"` object:
>    ```json
>    "juno": {
>      "url": "https://mcp.juno.internal.dynatrace.com/mcp",
>      "type": "http"
>    }
>    ```
> 4. Save the file — Copilot will pick it up immediately, no restart needed

### Try an MCP query

- [ ] Open Copilot Chat and try:
  ```
  Who owns the token-service?
  ```
- [ ] Watch Copilot query the Juno Software Catalog — it's pulling live data, not just reading local files

### Explore Copilot Skills

Skills are portable instruction packages from the Knowledge Base. Two to try:

- [ ] **`dt-github`** — ask Copilot to list open issues in this repo, or describe a PR
- [ ] **`dt-skill-creator`** — ask Copilot to evaluate a skill or draft a new one

### Keep working on your task

- [ ] Continue (or finish) the task you started in Phase 1
- [ ] Try a second task if you have time
- [ ] Save all your work

---

## 🔔 Checkpoint B — Git & PR Demo

The instructor will walk through the Git workflow and show what a completed pull request looks like.

---

## Phase 3 — Ship It

*Goal: commit your work and open a pull request.*

> **Cheat mode enabled:** Ask Copilot to do it — the `dt-github` skill can handle all of this:
> ```
> Create a pull request with all my changes.
> ```

### Create a branch and push

- [ ] Create your branch, stage your changes, commit & push:
  ```bash
  git checkout -b workshop/your-name
  git add .
  git commit -m "Add [your task] — workshop contribution"
  git push -u origin workshop/your-name
  ```

### Open a Pull Request

- [ ] Go to the repo on GitHub and click **"Compare & pull request"**
- [ ] Add a short title and description, then click **"Create pull request"**


- [ ] I have an open PR on GitHub

📖 Full Git guide: [CONTRIBUTING.md](../CONTRIBUTING.md)

---

## Bonus — Go Deeper

*Finished early? Pick the track that interests you most.*

### Group 1 — AI Setup

- [ ] Write a `copilot-instructions.md` for one of your own projects
- [ ] Use `dt-skill-creator` to design a new Copilot Skill

### Group 2 — Juno

- [ ] Browse the Juno Portal at `juno.internal.dynatrace.com`
- [ ] Explore the Software Catalog — find your team's services

### Group 3 — DT App Development

Check out existing guides to get started.

- [ ] [App Dev with AI (official quickstart)](https://developer.dynatrace.com/quickstart/app-development-with-ai/#setup-instructions)
- [ ] [Product Builder / App Development MCP](https://dynatrace.sharepoint.com/sites/RnD/SitePages/Product-Builder.aspx)
- [ ] [Vibe Coding Guide](https://dynatrace.sharepoint.com/sites/ProdOps/SitePages/Vibecoding.aspx)
- [ ] [Christoph's Practical Guide to AI Engineering](https://dynatrace.sharepoint.com/sites/Observability/SitePages/AI-Engineering-Christophs-Practical-Guide.aspx)

---

## What I Learned Today

*Self-check: tick the things you now understand.*

- [ ] Copilot's quality depends on the **context** it's given
- [ ] `copilot-instructions.md` gives Copilot project-level context automatically
- [ ] **MCP** lets Copilot query external systems (Software Catalog, etc.)
- [ ] **Copilot Skills** are reusable instruction packages from the Knowledge Base
- [ ] I can use Copilot for non-code tasks: PRDs, analysis, announcements, architecture
- [ ] I know how to create a branch, commit, push, and open a PR
- [ ] I know where to get help: `#github-copilot-community-of-practice` and `#help-juno` on Slack

---

## 📚 Resources

| Resource | Link |
|----------|------|
| Juno Portal | `juno.internal.dynatrace.com` |
| R&D AI Knowledge Base | `github.com/Dynatrace-Internal/rnd-ai-knowledgebase` |
| Copilot Community | `#github-copilot-community-of-practice` on Slack |
| Help with Juno | `#help-juno` on Slack |
| This Workshop Repo | `github.com/MichaelBinz/juno-feedback-digest` |
| GitHub Copilot Docs | `docs.github.com/en/copilot` |
| Git Cheat Sheet | `education.github.com/git-cheat-sheet-education.pdf` |
