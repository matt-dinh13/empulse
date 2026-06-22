---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Statechart"
domain: "Analysis Model"
element_id: 1234851
diagrams: 1
connections: 6
tags:
  - state
  - analysis-model
---

# 🔄 Cancelled

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Statechart

## 📝 Notes

The outgoing payment can be canceled from any its current status if the contract has been canceled.
It is final status of the payment.

## 🔗 Connections (6)

- ← StateFlow: [[Unpaid]]
- ← StateFlow: [[Blocked]]
- → StateFlow: [[Final (StateNode 1234858)]]
- ← StateFlow: [[Ready for redisbursement]]
- ← StateFlow: [[Order generating]]
- ← StateFlow: [[Paid]]

## 📊 Appears In (1 diagrams)

- Statechart: Outgoing payment state
