# Workshop Checklist — Things I Learned Today

Use this as a self-assessment and reference guide. Each item links to the resource you need to go deeper.

---

## Level 1 — Minimum

*Everyone should reach this level by the end of the session.*

---

### ✅ Setup & Access

- [ ] I have a GitHub account with my `@dynatrace.com` email as primary
- [ ] I have 2FA enabled on GitHub
- [ ] I am a member of the `Dynatrace-CoPilot` GitHub organisation
- [ ] I have a **GitHub Copilot Business** licence active
  - Verify at: [github.com/settings/copilot/features](https://github.com/settings/copilot/features)
- [ ] I have **VS Code** installed with the GitHub Copilot extension

---

### ✅ GitHub Copilot Basics

- [ ] I know how to open **Copilot Chat** in VS Code
- [ ] I understand that Copilot's quality depends on the context it's given
- [ ] I can write a useful, specific Copilot prompt (not just "write me code")

---

### ✅ Git & GitHub Workflow

- [ ] I know how to clone a repo: `git clone <url>`
- [ ] I know how to create a branch: `git checkout -b my-branch`
- [ ] I know how to stage changes: `git add .`
- [ ] I know how to commit: `git commit -m "message"`
- [ ] I know how to push: `git push -u origin my-branch`
- [ ] I've opened a **Pull Request** on GitHub
- [ ] I understand branch protection (why `main` requires a PR)

> **Cheat mode:** Ask Copilot to do it for you

📖 Resource: [CONTRIBUTING.md](../CONTRIBUTING.md) in this repo  
📖 Resource: [Git cheat sheet — GitHub](https://education.github.com/git-cheat-sheet-education.pdf)

---

### ✅ AI-First Mindset

- [ ] I understand the shift from "Copilot as autocomplete" to "Copilot as collaborator"
- [ ] I know that structured context = better Copilot output
- [ ] I can identify at least one task on my current project where Copilot could help
- [ ] I know where to go for help and community within Dynatrace

---

## Level 2 — Bonus

*Going deeper: for those who want to explore the more advanced tooling.*

---

### ⭐ Structuring Context for Copilot

- [ ] I know what **`copilot-instructions.md`** is and what it does
  - Lives in `.github/copilot-instructions.md`
  - Automatically read by Copilot on every conversation in VS Code
  - Contains: project summary, key files, tone, constraints
- [ ] I understand the difference between a project with good context and one without
- [ ] I can write a `copilot-instructions.md` for my own project

📖 Community: `#github-copilot-community-of-practice` on Slack

---

### ⭐ GitHub Copilot Skills

- [ ] I know what a **Copilot Skill** is
  - A portable set of instructions packaged as a `SKILL.md` file
  - Defines a persona, behaviour rules, and output format
  - Provided by the R&D AI Knowledge Base — install once, available everywhere
- [ ] I know about the **`dt-github` skill**
  - Lets Copilot manage pull requests, issues, releases, and GitHub Actions via the `gh` CLI
  - Invoke it by asking Copilot to create a PR, list issues, trigger a workflow, etc.
- [ ] I know about the **`dt-skill-creator` skill**
  - Helps you design, write, and evaluate new skills for the Dynatrace knowledge base
  - Enforces Dynatrace safety rules so every skill it produces is safe for internal use
- [ ] I know where to find all Skills — the R&D AI Knowledge Base

📖 Resource: `github.com/Dynatrace-Internal/rnd-ai-knowledgebase`  
📖 Community: `#github-copilot-community-of-practice` on Slack

---

### ⭐ Model Context Protocol (MCP)

- [ ] I know what **MCP** is
  - A protocol that lets Copilot query external systems (beyond local files)
  - At Dynatrace: **Juno MCP** connects Copilot to the Software Catalog
- [ ] I've seen an MCP query in action (e.g. "who owns the auth service?")
- [ ] I know where to find MCP servers for Dynatrace — the R&D AI Knowledge Base

📖 Resource: `github.com/Dynatrace-Internal/rnd-ai-knowledgebase`
📖 Help: `#help-juno` on Slack for Juno MCP questions

---

### ⭐ Juno Platform

- [ ] I know what **Juno** is (Dynatrace's internal developer portal, built on Backstage)
- [ ] I know the key Juno capabilities:
  - **Software Catalog** — register and discover services and teams
  - **TechDocs** — publish and find internal documentation
  - **Templates** — create new services from golden templates
  - **Juno MCP** — query Juno from within Copilot Chat
- [ ] I know how to register a service in the Software Catalog

📖 Resource: Juno Portal — `juno.internal.dynatrace.com`  
📖 Help: `#help-juno` on Slack

---

## 📚 All Resources in One Place

| Resource | Link |
|----------|------|
| Juno Portal | `juno.internal.dynatrace.com` |
| R&D AI Knowledge Base | `github.com/Dynatrace-Internal/rnd-ai-knowledgebase` |
| Copilot Community | `#github-copilot-community-of-practice` on Slack |
| Help with Juno | `#help-juno` on Slack |
| This Workshop Repo | `github.com/MichaelBinz/juno-feedback-digest` |
| GitHub Copilot Docs | `docs.github.com/en/copilot` |
| Git Cheat Sheet | `education.github.com/git-cheat-sheet-education.pdf` |
