---
type: Action
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/Business rules"
domain: "Analysis Model"
element_id: 1676475
diagrams: 1
connections: 2
tags:
  - action
  - analysis-model
---

# 📄 Set isBlocked to 'false' for the remaining outgoing payments. 

> **Type**: Action
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/Business rules

## 🔗 Connections (2)

- ← ControlFlow: [[Exclude outgoing payments which were generated for contracts with blocked payments]]
- → ControlFlow: [[ActivityFinal (StateNode 1676467)]]

## 📊 Appears In (1 diagrams)

- Activity: Unblocking outgoing payments for salesroom
