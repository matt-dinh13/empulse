---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model"
domain: "Analysis Model"
element_id: 1655399
diagrams: 1
connections: 4
tags:
  - state
  - analysis-model
---

# 🔄 ROG - Offers generated

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model

## 📝 Notes

This sub-status indicates that optional offers have ben generated and the system is waiting for acceptation or rejection of them. Note that this sub-status can be also left in case that all the generated offers will expire.

## 🔗 Connections (4)

- → StateFlow: [[Leave status _In process_]]
- → StateFlow: [[RLWO - LAP waiting after offers]]
- → StateFlow: [[Leave status _In process_]]
- ← StateFlow: [[RLW - LAP waiting]]

## 📊 Appears In (1 diagrams)

- Statechart: In Process (R)
