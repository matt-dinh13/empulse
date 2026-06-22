---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854359
diagrams: 1
connections: 3
tags:
  - decision
  - analysis-model
---

# 🔀 Does an unpaired/partially paired installment part exist before the first paired installment?

> **Type**: Decision
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 🔗 Connections (3)

- ← ControlFlow: [[Find all active installment parts (Activity 1854363)]]
- → ControlFlow: [[Get all active not paired, or partially paired payments related to the provided contract (Action 1854350)]]
- → ControlFlow: [[05.200 Perform decoupling not chronologically paired payments (Activity 1854330)]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
