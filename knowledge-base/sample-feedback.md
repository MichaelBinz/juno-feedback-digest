# Sample Feedback — Juno Feedback Digest

This file contains 30 fictional feedback entries representing developer input collected from Slack channels, support tickets, and survey responses. All entries are fictional and created for workshop use.

Use this data for feedback analysis tasks — ask Copilot to identify themes, summarise sentiment, and extract quotes.

---

## Slack Channel Feedback

**Source:** `#help-juno`

---

**[Entry 1]**  
*Source: Slack / #help-juno*  
> "The Juno Portal search is really hard to use. I searched for 'token-service' and got 30 results with no way to filter by team or tech stack. Ended up asking in Slack anyway."

---

**[Entry 2]**  
*Source: Slack / #help-juno*  
> "Just discovered the TechDocs integration in Juno — this is genuinely great. Found three docs I didn't know existed. Why isn't this more prominent on the homepage?"

---

**[Entry 3]**  
*Source: Slack / #help-juno*  
> "The software catalog is missing half the services my team owns. We registered them 6 months ago but they're not showing up. Is there a sync issue?"

---

**[Entry 4]**  
*Source: Slack / #help-juno*  
> "Onboarding a new engineer today. The Juno getting started guide is outdated — half the screenshots don't match what we see. Took 2 hours longer than it should have."

---

**[Entry 5]**  
*Source: Slack / #help-juno*  
> "Juno Templates are a game-changer. Created a new service in 8 minutes with all the standard configs pre-applied. First time I've actually enjoyed service setup."

---

**[Entry 6]**  
*Source: Slack / #help-juno*  
> "Why does the Juno Portal time out after 15 minutes? I got logged out mid-documentation edit and lost my work. This has happened 3 times this week."

---

**[Entry 7]**  
*Source: Slack / #help-juno*  
> "The catalog API is super useful but the documentation is sparse. I figured out the endpoints by reading the source code. Would love proper API docs."

---

**[Entry 8]**  
*Source: Slack / #help-juno*  
> "Shoutout to the Juno team — the new dependency graph view is exactly what I needed for an architecture review today. Saved me hours of manual digging."

---

**[Entry 9]**  
*Source: Slack / #platform*  
> "We're maintaining TechDocs for 4 services and the publishing pipeline keeps failing silently. No error message, just a blank page. Hard to trust the docs are up to date."

---

**[Entry 10]**  
*Source: Slack / #platform*  
> "The Juno Portal is slow on my machine — takes about 8 seconds to load the catalog page. Other internal tools are fast, so not sure if it's Juno or my setup."

---

**[Entry 11]**  
*Source: Slack / #platform*  
> "Would love a way to subscribe to updates on a specific service in the catalog. Right now I check manually and often miss changes from dependent teams."

---

**[Entry 12]**  
*Source: Slack / #platform*  
> "The ownership model in the catalog is confusing. Some services show a team, some show an individual, some show nothing. Need clearer guidance on what to put in `catalog-info.yaml`."

---

**[Entry 13]**  
*Source: Slack / #platform*  
> "Just used the GitHub Copilot integration with Juno MCP. It correctly answered 'who owns the token-service' without me having to look it up. Very cool."

---

**[Entry 14]**  
*Source: Slack / #platform*  
> "The new Juno Template for Python services is missing the observability config. New services go live without dashboards. Can we add OTel setup to the template?"

---

**[Entry 15]**  
*Source: Slack / #dev-experience*  
> "Juno is a great idea but the discoverability is poor. I didn't know about half these features until someone showed me. Needs better in-product guidance."

---

**[Entry 16]**  
*Source: Slack / #dev-experience*  
> "The Juno onboarding flow assumed I already had VS Code configured. I'm on JetBrains and it took me an extra hour to work through the setup steps manually."

---

**[Entry 17]**  
*Source: Slack / #dev-experience*  
> "Loving the direction of the AI-first approach. Having Copilot grounded in Juno context is genuinely useful. Keep pushing on this."

---

**[Entry 18]**  
*Source: Slack / #dev-experience*  
> "I reported a bug in the catalog 3 weeks ago and haven't heard back. Not sure if it's been seen. A simple acknowledgement would help a lot."

---

## Support Ticket Feedback

---

**[Entry 19]**  
*Source: Support ticket #4821*  
> "User unable to register new component in catalog. YAML validation fails with cryptic error message: `ValidationError: unknown key 'spec.type'`. Workaround: use older schema format. Status: open."

---

**[Entry 20]**  
*Source: Support ticket #4834*  
> "TechDocs not rendering for a team's repo after they migrated from GitLab to GitHub. Build succeeds but docs don't appear in Juno Portal. Reproduction: consistent. Status: in progress."

---

**[Entry 21]**  
*Source: Support ticket #4867*  
> "Multiple engineers reporting that Juno Portal shows 'Access Denied' for the software catalog after SSO refresh. Clearing cookies fixes it temporarily. Root cause: unknown. Status: open."

---

**[Entry 22]**  
*Source: Support ticket #4902*  
> "Engineer requests ability to mark a service as 'deprecated' in the catalog with a custom message and migration guide link. Feature request. Status: backlog."

---

**[Entry 23]**  
*Source: Support ticket #4918*  
> "The Juno Template fails on step 3 (GitHub repo creation) when the engineer's GitHub handle contains a hyphen. Error: `Invalid identifier`. Affects ~10 engineers. Status: fix in review."

---

**[Entry 24]**  
*Source: Support ticket #4933*  
> "Team requests a bulk import tool for registering multiple existing services in the catalog. Currently requires a separate YAML file and PR per service. Status: feature request."

---

## Survey Responses

**Source:** Q2 Developer Experience Pulse Survey (fictional)

---

**[Entry 25]**  
*NPS: 9 / Source: Q2 Pulse Survey*  
> "Juno has genuinely changed how my team works. The catalog, TechDocs, and Templates together cover 80% of what we used to do manually. Would love better search and a mobile-friendly view."

---

**[Entry 26]**  
*NPS: 4 / Source: Q2 Pulse Survey*  
> "The potential is there but the execution is patchy. Good days and bad days. Catalog search is unreliable, TechDocs publishing breaks occasionally, and onboarding docs need a refresh. Hoping it improves."

---

**[Entry 27]**  
*NPS: 8 / Source: Q2 Pulse Survey*  
> "The AI integrations (Copilot + Juno MCP) are the biggest value-add for me right now. Being able to ask Copilot questions that are grounded in our internal systems is a real productivity boost."

---

**[Entry 28]**  
*NPS: 3 / Source: Q2 Pulse Survey*  
> "I've tried to use Juno three times and each time ran into a different blocker. The portal session timeouts are infuriating, the YAML schema docs are incomplete, and I can never tell if my catalog entry is actually live."

---

**[Entry 29]**  
*NPS: 7 / Source: Q2 Pulse Survey*  
> "Solid platform overall. My main ask is better notification and subscription features — I want to know when a service I depend on updates its catalog entry or publishes new docs."

---

**[Entry 30]**  
*NPS: 6 / Source: Q2 Pulse Survey*  
> "The Juno Templates save real time but they're inconsistent across teams. Some templates are well-maintained, others are clearly out of date. A 'last updated' indicator on templates would help me know which ones to trust."
