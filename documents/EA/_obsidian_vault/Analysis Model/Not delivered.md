---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Statechart"
domain: "Analysis Model"
element_id: 1234855
diagrams: 1
connections: 4
tags:
  - state
  - analysis-model
---

# 🔄 Not delivered

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Statechart

## 📝 Notes

Outgoing payment after negative confirmation (i.e. HoSel receive message from external system that outgoing payment was not disbursement)

## 🔗 Connections (4)

- → StateFlow: [[Final (StateNode 1234858)]]
- ← StateFlow: [[Paid]]
- → StateFlow: [[Ready for redisbursement]]
- → StateFlow: [[Order generating]]

## 📊 Appears In (1 diagrams)

- Statechart: Outgoing payment state
