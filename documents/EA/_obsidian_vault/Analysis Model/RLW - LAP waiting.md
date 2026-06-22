---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model"
domain: "Analysis Model"
element_id: 1655401
diagrams: 1
connections: 6
tags:
  - state
  - analysis-model
---

# 🔄 RLW - LAP waiting

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model

## 🔗 Connections (6)

- → StateFlow: [[Leave status _In process_]]
- ← StateFlow: [[Enter status _In process_]]
- → StateFlow: [[Leave status _In process_]]
- → StateFlow: [[RLF - LAP failed]]
- ← StateFlow: [[RCI - CIF identified]]
- → StateFlow: [[ROG - Offers generated]]

## 📊 Appears In (1 diagrams)

- Statechart: In Process (R)
