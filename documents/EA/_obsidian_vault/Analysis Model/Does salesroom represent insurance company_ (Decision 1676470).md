---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/Business rules"
domain: "Analysis Model"
element_id: 1676470
diagrams: 1
connections: 4
tags:
  - decision
  - analysis-model
---

# 🔀 Does salesroom represent insurance company?

> **Type**: Decision
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/Business rules

## 🔗 Connections (4)

- ← ControlFlow: [[Load salesroom (Action 1676471)]]
- → ControlFlow: [[Find all contracts which were originated on processed salesroom]]
- → ControlFlow: [[Find unpaid outgoing payments related to the salesroom via payment channel]]
- → ControlFlow: [[Find unpaid outgoing payments which were generated for contracts or supplements originated on the pr]]

## 📊 Appears In (1 diagrams)

- Activity: Blocking outgoing payments for salesroom
