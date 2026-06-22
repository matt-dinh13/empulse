---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Statechart"
domain: "Analysis Model"
element_id: 1234853
diagrams: 1
connections: 7
tags:
  - state
  - analysis-model
---

# 🔄 Order generating

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Statechart

## 📝 Notes

The outgoing payment is involved in a payment order.

## 🔗 Connections (7)

- ← StateFlow: [[Unpaid]]
- ← StateFlow: [[Unpaid]]
- → StateFlow: [[Paid]]
- ← StateFlow: [[Ready for redisbursement]]
- ← StateFlow: [[Not delivered]]
- → StateFlow: [[Cancelled]]
- → StateFlow: [[Unpaid]]

## 📊 Appears In (1 diagrams)

- Statechart: Outgoing payment state
