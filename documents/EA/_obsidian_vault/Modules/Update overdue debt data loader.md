---
type: Sequence
stereotype: ""
package: "HomerSelect/BSL/Modules/Debt catalogue/Scheduled jobs "
domain: "Modules"
element_id: 1623323
diagrams: 1
connections: 2
tags:
  - sequence
  - modules
---

# 📄 Update overdue debt data loader

> **Type**: Sequence
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Scheduled jobs 

## 📝 Notes

Update Overdue debt data loader
Job is loading data (list of contracts) from BSL where due date was yesterday (or from last successful run of this job). The list is saved into debt_catalogue_request table where will be processed by update overdue debt job.

Job is launched at midnight and being processed by one node

## 🔗 Connections (2)

- → Sequence: [[Debt catalogue request]]
- ← Sequence: [[Time (Actor 1623317)]]

## 📊 Appears In (1 diagrams)

- Sequence: Scheduled jobs - sequence diagram
