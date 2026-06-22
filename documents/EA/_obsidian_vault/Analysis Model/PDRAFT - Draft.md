---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model"
domain: "Analysis Model"
element_id: 1655414
diagrams: 1
connections: 6
tags:
  - state
  - analysis-model
---

# 🔄 PDRAFT - Draft

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model

## 📝 Notes

Contract is waiting for filling second block of data.

## 🔗 Connections (6)

- ← StateFlow: [[POG - Offers generated]]
- ← ObjectFlow: [[ACL Approved with Cross-sell limits]]
- ← StateFlow: [[PLW - LAP waiting]]
- → StateFlow: [[Leave status _In pre-process_]]
- → StateFlow: [[Leave status _In pre-process_]]
- ← ObjectFlow: [[CF Client draft]]

## 📊 Appears In (1 diagrams)

- Statechart: In Pre-process (P)
