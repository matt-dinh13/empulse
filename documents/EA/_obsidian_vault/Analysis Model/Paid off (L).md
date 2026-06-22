---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model"
domain: "Analysis Model"
element_id: 1655410
diagrams: 1
connections: 6
tags:
  - state
  - analysis-model
---

# 🔄 Paid off (L)

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model

## 🔗 Connections (6)

- → StateFlow: [[Sold (Q)]]
- ← StateFlow: [[Signed (N) (State 1655412)]]
- → StateFlow: [[Written off (H)]]
- → StateFlow: [[Cancelled (T) (State 1655407)]]
- ← StateFlow: [[Active (A) (State 1655405)]]
- → StateFlow: [[Finished (K) (State 1655396)]]

## 📊 Appears In (1 diagrams)

- Statechart: Contract Statechart Model
