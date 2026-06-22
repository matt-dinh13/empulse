---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model"
domain: "Analysis Model"
element_id: 1655416
diagrams: 1
connections: 4
tags:
  - state
  - analysis-model
---

# 🔄 RLWO - LAP waiting after offers

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model

## 📝 Notes

This sub-status indicates that an accepted optional offer was sent to approval.

## 🔗 Connections (4)

- → StateFlow: [[RLF - LAP failed]]
- → StateFlow: [[Leave status _In process_]]
- → StateFlow: [[Leave status _In process_]]
- ← StateFlow: [[ROG - Offers generated]]

## 📊 Appears In (1 diagrams)

- Statechart: In Process (R)
