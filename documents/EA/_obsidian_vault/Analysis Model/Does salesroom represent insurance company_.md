---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/Business rules"
domain: "Analysis Model"
element_id: 1676468
diagrams: 1
connections: 3
tags:
  - decision
  - analysis-model
---

# 🔀 Does salesroom represent insurance company?

> **Type**: Decision
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/Business rules

## 🔗 Connections (3)

- → ControlFlow: [[Find blocked outgoing payments related to the salesroom via payment channel]]
- ← ControlFlow: [[Load salesroom]]
- → ControlFlow: [[Find all contracts and supplements which were originated on processed salesroom]]

## 📊 Appears In (1 diagrams)

- Activity: Unblocking outgoing payments for salesroom
