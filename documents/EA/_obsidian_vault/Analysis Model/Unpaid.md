---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Statechart"
domain: "Analysis Model"
element_id: 1234849
diagrams: 1
connections: 7
tags:
  - state
  - analysis-model
---

# 🔄 Unpaid

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Statechart

## 📝 Notes

A new outgoing payment is created within defined business events (e.g. client sign the contract).

## 🔗 Connections (7)

- → StateFlow: [[Paid]]
- → StateFlow: [[Order generating]]
- → StateFlow: [[Cancelled]]
- ← StateFlow: [[Waiting]]
- → StateFlow: [[Order generating]]
- ← StateFlow: [[Order generating]]
- ← StateFlow: [[Initial (StateNode 1234854)]]

## 📊 Appears In (1 diagrams)

- Statechart: Outgoing payment state
