---
type: Sequence
stereotype: ""
package: "HomerSelect/BSL/Modules/Debt catalogue/Scheduled jobs "
domain: "Modules"
element_id: 1623322
diagrams: 1
connections: 7
tags:
  - sequence
  - modules
---

# 📄 Publish debt full info job

> **Type**: Sequence
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Scheduled jobs 

## 📝 Notes

Publish debt full info
Job calculate debt full info message and send it to Loxon. Items for processing are taken from debt_contract_queue table.

Scheduled every 15 minutes on every node but tasks are executed at most once at the same time (Schedlock)

## 🔗 Connections (7)

- → Sequence: [[Debt catalogue request]]
- → Sequence: [[LCS]]
- ← Sequence: [[Processing nodes]]
- ← Sequence: [[Time (Actor 1623317)]]
- ← Sequence: [[Debt contract queue]]
- → Sequence: [[Debt contract queue]]
- → Sequence: [[Debt contract queue]]

## 📊 Appears In (1 diagrams)

- Sequence: Scheduled jobs - sequence diagram
