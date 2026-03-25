# Juno Feedback Digest

A fictional Juno capability used as a learning vehicle for the **AI-First Hands-On Workshop**.

The Juno Feedback Digest is an automated weekly digest system that collects developer feedback from multiple sources — Slack channels, support tickets, and survey responses — and produces digest summaries that extract trends, sentiment, and action items for product teams.

---

## Why This Project?

This repo mirrors real Juno product development work. It offers:

- **Non-technical entry points** — writing PRDs, analysing feedback, defining personas
- **Technical depth** — architecture decisions, API design, data flows
- **Realistic context** — processing developer feedback at scale is something everyone on the team understands

---

## Presentation

**[View the workshop slides](https://michaelbinz.github.io/juno-feedback-digest/ai-first-workshop.html)** — opens directly in your browser.

---

## Repository Structure

```
juno-feedback-digest/
├── .github/
│   └── copilot-instructions.md     # Project-level context and rules for Copilot
├── docs/
│   ├── prd-draft.md                # Incomplete PRD — ready for your contribution
│   ├── user-research-template.md   # Empty research template
│   └── architecture-sketch.md      # Skeleton data flow diagram
├── knowledge-base/
│   ├── project-context.md          # What this project is and why it matters
│   ├── personas.md                 # 3 defined user personas
│   └── sample-feedback.md          # 30 fictional feedback entries
├── workshop-materials/
│   ├── checklist.md                # Self-assessment and learning outcomes
│   ├── copilot-prompt-cheatsheet.md # Copy-paste prompts for every task
│   ├── glossary.md                 # Plain-English definitions of tools and concepts
│   ├── whats-next.md               # Learning path after the workshop
│   └── slides/                     # Presentation source, compiled HTML, and theme
├── CONTRIBUTING.md                 # Step-by-step Git workflow guide
└── README.md                       # You are here
```

---

## Workshop Task Menu

Pick **one task** and complete it using GitHub Copilot Chat:

| Task | Difficulty | What to Do |
|------|-----------|------------|
| **Complete the PRD** | Beginner | Open `docs/prd-draft.md`. Ask Copilot to write the missing *Success Metrics* section. |
| **Analyse the feedback** | Beginner | Ask Copilot to read `knowledge-base/sample-feedback.md` and summarise the top 3 themes with example quotes. Save the summary as a new file. |
| **Write user stories** | Beginner | Ask Copilot to read the personas and write 3 user stories for the Platform Lead persona. Save to `docs/`. |
| **Sketch the architecture** | Intermediate | Open `docs/architecture-sketch.md`. Ask Copilot to propose a data flow for collecting feedback and producing a digest. |
| **Draft a launch announcement** | Beginner | Ask Copilot to read the project context and PRD, then draft a Slack announcement for `#drs-all`. |

**Example Copilot prompts to get you started:**

- *"Read the PRD and help me write the missing 'Success Metrics' section."*
- *"Read `knowledge-base/sample-feedback.md` and summarise the top 3 themes with example quotes."*
- *"Read the personas and write 3 user stories for the Platform Lead persona."*
- *"Based on the PRD and project context, propose a data flow for collecting feedback from Slack and producing a weekly digest."*
- *"Read the project context and PRD and draft a Slack announcement introducing the Juno Feedback Digest."*

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full Git workflow guide.

---

## Resources

| Resource | Link |
|----------|------|
| Juno Portal | `juno.internal.dynatrace.com` |
| Copilot Community | `#github-copilot-community-of-practice` on Slack |
| Help | `#help-juno` on Slack |
