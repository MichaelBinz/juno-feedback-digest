# What's Next — Your AI-First Learning Path

You've done the workshop. Here's how to turn today's experience into a lasting habit.

---

## Your First Week: Try It on a Real Project

The fastest way to make this stick is to apply it immediately.

### Step 1 — Add `copilot-instructions.md` to one of your repos

Pick a project you're actively working on. Spend 15 minutes writing a `.github/copilot-instructions.md` that tells Copilot:
- What the project is and why it exists
- Which files are most important
- Who the audience is
- Any constraints or style preferences

Use this prompt to get started:
```
I'm starting a new project. Here's a brief description: [describe your project].
Help me write a .github/copilot-instructions.md that gives Copilot the context
it needs to be useful. Include: project summary, key files, audience, tone, and constraints.
```

### Step 2 — Do one task with Copilot that you'd normally do alone

Pick something from your backlog: a document to write, a review to conduct, a piece of code to refactor. Use Copilot Chat with `@workspace` and see what happens.

### Step 3 — Share what you learned

Tell one colleague what you tried. The best way to reinforce learning is to teach it.

---

## Your First Month: Build Team Habits

### Register your service in the Juno Software Catalog

If your team's services aren't in the catalog, add them. This unlocks Juno MCP — so Copilot can answer questions about your systems directly.

📖 How-to: Juno Portal → `juno.internal.dynatrace.com` → Software Catalog → Register Component

### Publish documentation with TechDocs

If your team writes docs in Confluence or Google Docs, try migrating one doc to TechDocs. Docs next to code get updated. Docs in external tools get stale.

📖 How-to: Juno Portal → TechDocs → Getting Started

### Try a Juno Template for your next new service

Next time you're bootstrapping a service, use a Juno Template instead of starting from scratch. It handles the boring setup so you can focus on the actual problem.

📖 How-to: Juno Portal → Create → browse templates

---

## Deepen Your Copilot Skills

| Topic | Where to Learn |
|-------|---------------|
| Writing better prompts | [`workshop-materials/copilot-prompt-cheatsheet.md`](./copilot-prompt-cheatsheet.md) |
| Custom instructions deep-dive | [GitHub Copilot docs](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot) |
| Copilot for code review | Ask Copilot to review a PR diff with `@workspace` |
| Copilot for testing | Ask Copilot to write tests for an existing function |
| Using and sharing Skills | Browse the R&D AI Knowledge Base: `github.com/Dynatrace-Internal/rnd-ai-knowledgebase` |
| MCP deep-dive | [modelcontextprotocol.io](https://modelcontextprotocol.io) |

---

## Community and Support

| Channel | What It's For |
|---------|--------------|
| `#github-copilot-community-of-practice` | Share tips, ask questions, see what others are doing |
| `#help-juno` | Juno Portal, TechDocs, Templates, MCP issues |
| `#drs-all` | Broader DevRel and developer experience discussions |

The community channel is the best place to learn what's working across teams. People share prompts, workflows, and real examples regularly.

---

## Bring This to Your Team

Want to run a version of today's workshop for your team? Here's how:

1. **Fork this repo** — or copy the structure into your team's context
2. **Replace the knowledge base** — swap out `knowledge-base/` with content relevant to your team's domain
3. **Update `copilot-instructions.md`** — tailor it to your team's project
4. **Pick real tasks** — instead of fictional ones, use actual backlog items
5. **Run the session** — 60 minutes, same structure: tour → task → git workflow → PR

Reach out in `#github-copilot-community-of-practice` if you want help facilitating.

---

## The Long Game: AI-First by Default

The teams that get the most from AI tools aren't the ones that use the most features — they're the ones that have built AI-readiness into how they work:

- Every project has a `copilot-instructions.md`
- Documentation lives in TechDocs, not Confluence
- Services are registered in the catalog
- New projects start from Juno Templates
- The team has a shared set of Skills for recurring tasks

**That's the goal. Start with one thing. Build from there.**

---

## Quick Reference

| What | Where |
|------|-------|
| This repo | `github.com/MichaelBinz/juno-feedback-digest` |
| Juno Portal | `juno.internal.dynatrace.com` |
| R&D AI Knowledge Base | `github.com/Dynatrace-Internal/rnd-ai-knowledgebase` |
| Copilot Community Slack | `#github-copilot-community-of-practice` |
| Copilot Docs | `docs.github.com/en/copilot` |
| MCP Overview | `modelcontextprotocol.io` |
| Git Cheat Sheet | `education.github.com/git-cheat-sheet-education.pdf` |
