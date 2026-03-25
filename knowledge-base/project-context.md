# Project Context — Juno Feedback Digest

## What Is This Project?

The **Juno Feedback Digest** is an automated weekly summary system that helps Dynatrace product teams stay on top of developer feedback — without having to manually trawl through Slack threads, support queues, and survey responses every week.

The system ingests feedback from multiple sources, identifies trends and sentiment, and delivers a clean, actionable digest to the people who need it most: Platform Leads, Developer Advocates, and Product Managers.

---

## Why Does This Matter?

Developer feedback at Dynatrace arrives continuously and from many directions:

- Engineers post questions and frustrations in Slack channels like `#help-juno`, `#platform`, and team-specific channels
- Support tickets document recurring blockers and pain points
- NPS and pulse surveys capture structured sentiment at release milestones
- Direct messages and hallway conversations surface urgent issues that never make it into formal systems

The problem is **fragmentation and volume**. No single person can monitor all of these streams. As a result:

- Recurring pain points go unnoticed for weeks or months
- High-signal feedback from influential engineers gets buried
- Product teams make prioritisation decisions without a complete picture of developer sentiment

The Juno Feedback Digest solves this by aggregating, analysing, and surfacing the most important signal — delivered automatically, every week.

---

## How It Works (Conceptually)

1. **Collect** — The system connects to configured Slack channels and pulls messages from the past 7 days
2. **Normalise** — Raw messages are cleaned, deduplicated, and structured into a common feedback format
3. **Analyse** — Sentiment classification and theme extraction identify patterns across the data
4. **Generate** — A concise digest is assembled with the top 3 themes, supporting quotes, and flagged high-priority items
5. **Deliver** — The digest is sent via Slack DM to configured recipients every Monday morning

---

## Who Benefits?

See `personas.md` for full persona definitions. In short:

- **Platform Leads** use the digest to understand recurring pain points and prioritise investments
- **Developer Advocates** use it to identify themes for content, talks, and community outreach
- **Product Managers** use it to track feature request trends and NPS signals across releases

---

## Relationship to Juno

The Juno Feedback Digest is a proposed addition to the **Juno platform** — Dynatrace's internal developer portal. It would run as a scheduled Juno service, using Juno's existing infrastructure for hosting, scheduling, and integration with internal systems.

This project is part of the broader Juno mission: to make Dynatrace developers more productive by removing friction and giving teams better tools to understand and respond to developer needs.

---

## Current Status

This is an **early-stage proposal**. The PRD is in draft, architecture decisions are open, and no code has been written yet. This is an opportunity to shape the product from the ground up.

Your contributions from the workshop — refined PRD sections, feedback analysis, user stories, architecture proposals — will directly inform what gets built.
