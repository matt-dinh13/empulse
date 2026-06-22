---
type: StateNode
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Statechart model"
domain: "Analysis Model"
element_id: 1018599
diagrams: 1
connections: 4
tags:
  - statenode
  - analysis-model
---

# 📄 Confirmation received?

> **Type**: StateNode
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Statechart model

## 🔗 Connections (4)

- → StateFlow: [[R (Rejected)]]
- → StateFlow: [[A (Approved)]]
- ← StateFlow: [[U (Unknown)]]
- → Dependency: [[RFC (Received From Confirmation)]]

## 📊 Appears In (1 diagrams)

- Statechart: DDM Statechart model
