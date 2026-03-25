---
marp: true
theme: dynatrace
size: 16:9
paginate: true
---

<!-- _class: cover -->

# Dynatrace Example Presentation
## Platform Engineering | Q1 2024

**Speaker Name** | Platform Engineer | March 2024

---

<!-- _class: content -->

# Agenda

1. Introduction – what we'll cover today
2. Platform Overview – architecture and components
3. Observability Results – key metrics and findings
4. Live Demo – Dynatrace in action
5. Next Steps – roadmap and actions

---

<!-- _class: section -->

# 01
# Introduction

What we'll cover today

---

<!-- _class: content -->

# Why Observability Matters

- Modern applications are **distributed and complex** – a single transaction may span dozens of services
- Traditional monitoring is **reactive** – you learn about problems after users are impacted
- **Dynatrace** provides:
  - Full-stack, AI-powered observability
  - Automatic root cause analysis
  - Real-time topology mapping

---

<!-- _class: content-2col -->

# Before vs. After Dynatrace

<div class="columns">
<div class="col">

## Before

- Manual alerting rules
- Siloed monitoring tools (APM, infra, logs)
- Hours to diagnose incidents
- No context across services

</div>
<div class="col">

## After

- AI-driven anomaly detection
- Unified observability across the full stack
- Minutes to root cause
- End-to-end tracing and topology

</div>
</div>

---

<!-- _class: section -->

# 02
# Platform Overview

Architecture and components

---

<!-- _class: content-image -->

# Dynatrace Architecture

- **OneAgent** – deployed once per host, auto-instruments everything
- **ActiveGate** – routes data and extends coverage to cloud services
- **Dynatrace SaaS** – the analytics and AI engine

<!-- Replace this comment with: ![bg right:40%](path/to/your-diagram.png) -->

---

<!-- _class: full-image -->

<!-- Replace this comment with: ![bg](path/to/your-topology.png) -->

## Full Stack Topology View

---

<!-- _class: section -->

# 03
# Observability Results

Key metrics and findings

---

<!-- _class: metrics -->

# Platform Health – Last 30 Days

<div class="metrics-grid">
  <div class="metric-card">
    <span class="metric-value">99.97%</span>
    <span class="metric-label">Availability</span>
    <span class="metric-trend-up">▲ +0.12%</span>
  </div>
  <div class="metric-card">
    <span class="metric-value">38ms</span>
    <span class="metric-label">Avg Response Time</span>
    <span class="metric-trend-down">▼ -12ms improved</span>
  </div>
  <div class="metric-card">
    <span class="metric-value">2.1M</span>
    <span class="metric-label">Requests / Day</span>
    <span class="metric-trend-up">▲ +18%</span>
  </div>
  <div class="metric-card">
    <span class="metric-value">0</span>
    <span class="metric-label">P1 Incidents</span>
    <span class="metric-trend-up">✓ On target</span>
  </div>
</div>

---

<!-- _class: code -->

# OneAgent Kubernetes Deployment

```yaml
apiVersion: dynatrace.com/v1beta1
kind: DynaKube
metadata:
  name: dynatrace
  namespace: dynatrace
spec:
  apiUrl: https://ENVIRONMENT_ID.live.dynatrace.com/api
  tokens: dynatrace-tokens
  oneAgent:
    cloudNativeFullStack:
      tolerations:
        - key: node-role.kubernetes.io/master
          effect: NoSchedule
  activeGate:
    capabilities:
      - routing
      - kubernetes-monitoring
```

---

<!-- _class: quote -->

> "Since deploying Dynatrace, our MTTR dropped from 4 hours to under 15 minutes. Our engineers can focus on features, not firefighting."

— Platform Engineering Lead, Enterprise Customer

---

<!-- _class: content -->

# Key Findings

| Finding                            | Impact    | Status        |
|------------------------------------|-----------|---------------|
| Database slow queries detected     | High      | ✅ Resolved   |
| Memory leak in payment service     | Critical  | ✅ Resolved   |
| CDN cache-miss rate increased 40%  | Medium    | 🔄 In progress|
| 3rd party API latency spike        | Low       | 📋 Scheduled  |

---

<!-- _class: section -->

# 04
# Next Steps

Roadmap and actions

---

<!-- _class: content-2col -->

# Q2 Roadmap

<div class="columns">
<div class="col">

## Platform

- Expand OneAgent coverage to staging environments
- Enable log analytics across all services
- Integrate with PagerDuty for alert routing

</div>
<div class="col">

## Observability

- Onboard 3 new application teams
- Build SLO dashboards for each service
- Enable synthetic monitoring for critical user journeys

</div>
</div>

---

<!-- _class: closing -->

# Thank You

Questions? Reach us at **platform-team@example.com**

Or visit our internal wiki: `wiki.example.com/platform`
