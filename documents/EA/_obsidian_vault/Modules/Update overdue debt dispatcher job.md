---
type: Sequence
stereotype: ""
package: "HomerSelect/BSL/Modules/Debt catalogue/Scheduled jobs "
domain: "Modules"
element_id: 1623321
diagrams: 1
connections: 4
tags:
  - sequence
  - modules
---

# 📄 Update overdue debt dispatcher job

> **Type**: Sequence
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Scheduled jobs 

## 📝 Notes

Update Overdue debt dispatcher
Helper job for load balancing the job load between nodes (pods). Job take all requests which are in waiting or processing status, groups them by nodes and distributes the new requests to each node so that they have the same length of queue to process.

Scheduled every 2 minutes on every node but tasks are executed at most once at the same time (Schedlock)

## 🔗 Connections (4)

- → Sequence: [[Debt catalogue request]]
- ← Sequence: [[Debt catalogue request]]
- → Sequence: [[Processing nodes]]
- ← Sequence: [[Time (Actor 1623317)]]

## 📊 Appears In (1 diagrams)

- Sequence: Scheduled jobs - sequence diagram
