# Copilot Prompt Cheat Sheet

Ready-to-use prompts for the workshop and beyond. Copy, adapt, and use on your own projects.

---

## Workshop Task Prompts

### Complete the PRD
```
Read docs/prd-draft.md and help me write the missing "Success Metrics" section.
Use the goals and non-functional requirements already in the document to define
meaningful metrics. Include adoption metrics, quality metrics, and at least one
leading indicator.
```

### Analyse the feedback
```
Read knowledge-base/sample-feedback.md and summarise the top 3 themes.
For each theme include:
- A short name and description
- The sentiment (positive / neutral / negative)
- One representative quote
- One suggested action for the product team
```

### Write user stories
```
Read knowledge-base/personas.md and write 3 user stories for the Platform Lead persona.
Use this format: "As a [persona], I want to [action] so that [outcome]."
Then add 2-3 acceptance criteria for each story.
```

### Sketch the architecture
```
Read docs/prd-draft.md and knowledge-base/project-context.md.
Propose a concrete data flow for collecting feedback from Slack and producing a
weekly digest. Fill in the skeleton in docs/architecture-sketch.md with:
- How the ingestion layer works
- What the processing pipeline steps are
- How sentiment analysis and theme extraction could be implemented
- What the delivery mechanism looks like
```

### Draft a launch announcement
```
Read knowledge-base/project-context.md and docs/prd-draft.md.
Draft a Slack announcement for #drs-all introducing the Juno Feedback Digest.
Keep it under 200 words. Tone: friendly, practical, not marketing-y.
Include: what it does, who it's for, and how to learn more or get involved.
```

---

## General-Purpose Copilot Prompts

### Understand a codebase or document
```
Read [file] and give me a 5-bullet summary of what it does and who it's for.
```

### Write missing documentation
```
Read [file] and write the missing [section name] section.
Follow the tone and structure of the rest of the document.
```

### Review and improve a draft
```
Read [file]. What's missing, unclear, or inconsistent?
Suggest specific improvements without rewriting the whole thing.
```

### Generate acceptance criteria
```
Read [PRD or user story]. Write acceptance criteria in Given/When/Then format
for the feature described.
```

### Turn feedback into action items
```
Here is a set of developer feedback: [paste feedback]
Identify the top 3 pain points and suggest one concrete action for each.
```

### Explain a concept simply
```
Explain [concept] in plain English for someone who hasn't used it before.
Then give one concrete example of how it's used at Dynatrace.
```

---

## Prompts for Your Own Projects

### Bootstrap copilot-instructions.md
```
I'm starting a new project. Here's a brief description: [describe your project].
Help me write a .github/copilot-instructions.md file that gives Copilot the context
it needs to be useful. Include: project summary, key files, audience, tone, and constraints.
```

### Create a knowledge base entry
```
Read [document or codebase]. Write a knowledge-base/project-context.md file that
explains what this project is, why it matters, how it works, and who uses it.
Write it so that a new team member (and Copilot) can get up to speed quickly.
```

### Define a persona
```
Based on [describe your user or stakeholder], write a user persona in the style of
knowledge-base/personas.md in the juno-feedback-digest repo.
Include: background, goals, frustrations, how they use the product, and a representative quote.
```

### Use the `dt-github` skill — Open a PR from Copilot Chat
```
I've pushed my branch workshop/[your-name]. Create a pull request against main
with a clear title and a short description of what I changed.
```

### Use the `dt-github` skill — List open issues
```
List the open issues in this repo. Group them by label if possible.
```

### Use the `dt-skill-creator` skill — Create a new skill
```
I want to create a Copilot Skill for [describe the task].
Use the dt-skill-creator to write a safe, well-structured SKILL.md ready
for contribution to the Dynatrace knowledge base.
```

### Use the `dt-skill-creator` skill — Evaluate an existing skill
```
Review the SKILL.md I've pasted below. Score it for clarity, safety, and
trigger quality, and suggest specific improvements.
[paste SKILL.md content]
```

---

## Tips for Better Prompts

| ❌ Weak | ✅ Strong |
|--------|---------|
| "Write a PRD" | "Read docs/prd-draft.md and write the missing Success Metrics section using the goals already defined in the document" |
| "Summarise the feedback" | "Read knowledge-base/sample-feedback.md and summarise the top 3 themes with one quote each and a suggested action" |
| "Explain MCP" | "Explain MCP in plain English for a developer who hasn't used it before, then show how it's configured in this repo" |
| "Help with architecture" | "Based on the PRD and project context, fill in the skeleton in docs/architecture-sketch.md with a concrete data flow" |

**The pattern:** Give Copilot a specific file to read + a specific output to produce + any format or constraints it needs.
