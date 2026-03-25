# Architecture Sketch — Juno Feedback Digest

**Status:** Skeleton — ready for contribution  
**Last Updated:** 2025-Q2

> **Workshop task:** Ask Copilot to help you fill in the data flow below. Use the PRD and project context as input.  
> *Example prompt: "Based on the PRD and project context, propose a data flow for collecting feedback from Slack and producing a weekly digest."*

---

## High-Level Data Flow

```
[Feedback Sources]
       |
       ▼
[Ingestion Layer]      ← ??? How does this work?
       |
       ▼
[Processing Pipeline]  ← ??? What steps happen here?
       |
       ▼
[Digest Generation]    ← ??? What format / logic?
       |
       ▼
[Delivery]             ← ??? How does it reach users?
```

---

## Components (To Be Defined)

### Feedback Sources

*Which systems send data into the digest pipeline?*

- [ ] Slack channels — list TBD
- [ ] Support tickets — integration TBD
- [ ] Survey responses — platform TBD

---

### Ingestion Layer

*How is feedback collected and normalised?*

<!-- Describe the ingestion approach here -->

---

### Processing Pipeline

*What transformations happen to raw feedback before it becomes a digest?*

Steps (to be completed):
1. 
2. 
3. 

---

### Sentiment Analysis

*How is sentiment determined?*

<!-- Options to consider: rule-based, ML model, LLM-based, third-party API -->

---

### Theme Extraction

*How are the top themes identified?*

<!-- Options to consider: clustering, keyword frequency, LLM summarisation -->

---

### Digest Generation

*What does a digest look like? How is it produced?*

<!-- Describe the output format and generation logic -->

**Example digest structure:**

```
Weekly Digest — [Date]

📊 This week: [N] feedback items across [N] channels

🔥 Top Themes
1. [Theme] — [N] mentions
   > "[example quote]"

2. [Theme] — [N] mentions
   > "[example quote]"

3. [Theme] — [N] mentions
   > "[example quote]"

⚠️ Flagged Items
- [Item requiring action]

📈 Sentiment
Positive: [N]% | Neutral: [N]% | Negative: [N]%
```

---

### Delivery

*How does the digest reach recipients?*

- [ ] Slack DM to configured users
- [ ] Email (v2)
- [ ] Juno Portal feed (v2)

---

## Scheduling

*When does the pipeline run?*

- Trigger: <!-- e.g., cron schedule, event-based -->
- Frequency: <!-- e.g., weekly every Monday 08:00 CET -->
- Timeout: <!-- max allowed run time -->

---

## Open Architecture Questions

- How do we handle duplicate feedback across sources?
- What happens if a source is unavailable at collection time?
- How do we scale if feedback volume grows 10x?
- Where is data stored, and for how long?
