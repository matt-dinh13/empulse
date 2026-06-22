---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Statechart model"
domain: "Analysis Model"
element_id: 1018594
diagrams: 1
connections: 6
tags:
  - state
  - analysis-model
---

# 🔄 RFC (Received From Confirmation)

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Statechart model

## 🔗 Connections (6)

- → StateFlow: [[RFC (Received From Confirmation)]]
- ← StateFlow: [[RFC (Received From Confirmation)]]
- → StateFlow: [[CNC (Canceled)]]
- ← StateFlow: [[SFC (Sent For Confirmation)]]
- → StateFlow: [[FIN (Finished)]]
- ← Dependency: [[Confirmation received_]]

## 📊 Appears In (1 diagrams)

- Statechart: DDM Statechart model
