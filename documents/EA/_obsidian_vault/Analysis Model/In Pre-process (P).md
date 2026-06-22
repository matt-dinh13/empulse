---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model"
domain: "Analysis Model"
element_id: 1655394
diagrams: 2
connections: 4
tags:
  - state
  - analysis-model
---

# 🔄 In Pre-process (P)

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model

## 📝 Notes

For two-stage sales process only. Contract is sent to preliminary scoring or waits for accepting offers.

## 🔗 Connections (4)

- → StateFlow: [[In Process (R)]]
- → StateFlow: [[Cancelled (T) (State 1655407)]]
- → StateFlow: [[Rejected (D)]]
- ← StateFlow: [[Initial (StateNode 1655404)]]

## 📊 Appears In (2 diagrams)

- Statechart: Contract Statechart Model
- Statechart: In Pre-process (P)
