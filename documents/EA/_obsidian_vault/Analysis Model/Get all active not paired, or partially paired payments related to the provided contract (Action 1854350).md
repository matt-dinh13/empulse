---
type: Action
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854350
diagrams: 1
connections: 4
tags:
  - action
  - analysis-model
---

# 📄 Get all active not paired, or partially paired payments related to the provided contract

> **Type**: Action
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 🔗 Connections (4)

- → ControlFlow: [[Sort payments to be recoupled by deposit date ascendantly (Action 1854375)]]
- ← ControlFlow: [[Does an unpaired_partially paired installment part exist before the first paired installment_ (Decision 1854359)]]
- ← ControlFlow: [[05.200 Perform decoupling not chronologically paired payments (Activity 1854330)]]
- ← Dependency: [[Payment to Pairing collection (Object 1854322)]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
