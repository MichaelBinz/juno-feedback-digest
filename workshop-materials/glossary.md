# Glossary — Dynatrace-Specific Terms

> Most concepts from this workshop (MCP, pull requests, branch protection, Copilot Chat, etc.) are well-documented and Copilot Chat can explain them accurately. Just ask.
>
> This glossary exists only for **Dynatrace-internal terms** where Copilot's answer would be wrong or incomplete — either because the concept is internal-only, or because Dynatrace uses different terminology than the industry default.

---

## Juno

**What it is:** Dynatrace's internal developer portal, built on the open-source [Backstage](https://backstage.io) platform. Maintained by the Juno team (part of Dynatrace R&D / DevRel).

**Core capabilities:**

| Capability | What It Does |
|-----------|-------------|
| **Software Catalog** | Register and discover internal services, APIs, libraries, and teams |
| **TechDocs** | Publish and find internal technical documentation, hosted directly in Juno |
| **Templates** | Create new services and projects from pre-approved golden templates |
| **Juno MCP** | Query the Software Catalog from within GitHub Copilot Chat |

📖 Portal: `juno.internal.dynatrace.com`  
📖 Help: `#help-juno` on Slack

---

## Templates *(not "Scaffolder")*

> ⚠️ Copilot (and Backstage docs) call this feature "Scaffolder". At Dynatrace we call it **Templates**.

**What it is:** Juno's template engine that lets teams create new services, libraries, or projects from pre-configured golden templates.

**How it works:** Browse templates in the Juno Portal → fill in a form → Juno creates a GitHub repo, runs setup steps, and registers the service in the catalog — all automatically.

**Why it matters:** New services start with the right defaults: observability config, linting, CI/CD pipelines, and catalog registration — without manual setup.

---

## Software Catalog

**What it is:** A centralised registry of all internal services, APIs, libraries, teams, and systems at Dynatrace. Browsable via the Juno Portal.

**How services are registered:** Each service has a `catalog-info.yaml` file in its repository that declares its name, type, owner, and relationships to other services.

**Why it matters:** Makes services discoverable, connects ownership data, and powers the Juno MCP so Copilot can answer questions about your internal landscape.

---

## TechDocs

**What it is:** Juno's documentation platform. Teams write docs in Markdown (alongside their code), and TechDocs builds and publishes them to the Juno Portal automatically.

**How it works:** Add a `mkdocs.yml` file and a `docs/` folder to your repo. Juno picks it up and renders it as a searchable, versioned documentation site.

---

## Copilot Skill *(Dynatrace format)*

> ⚠️ "Skills" mean different things in different AI ecosystems. This refers specifically to the `SKILL.md` convention used at Dynatrace.

**What it is:** A portable instruction package — a `SKILL.md` file — that defines a specific Copilot persona, behaviour rules, and output format. Available across all your projects without any per-repo setup.

**How it differs from `copilot-instructions.md`:** Instructions files are project-level (one per repo). Skills are task-level and come from the shared **R&D AI Knowledge Base** — install once, use everywhere.

**Where they live:** The R&D AI Knowledge Base (`github.com/Dynatrace-Internal/rnd-ai-knowledgebase`) is the central library of Dynatrace skills. You don't copy skills into your repos — they're managed centrally.

**Two skills highlighted in this workshop:**

| Skill | Purpose |
|-------|---------|
| **`dt-github`** | GitHub CLI operations from Copilot Chat — PRs, issues, releases, Actions workflows |
| **`dt-skill-creator`** | Create and evaluate new skills for the Dynatrace knowledge base, with safety guardrails |

📖 Knowledge Base: `github.com/Dynatrace-Internal/rnd-ai-knowledgebase`  
📖 Community: `#github-copilot-community-of-practice` on Slack
