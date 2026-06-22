---
type: Action
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854375
diagrams: 1
connections: 4
tags:
  - action
  - analysis-model
---

# 📄 Sort payments to be recoupled by deposit date ascendantly

> **Type**: Action
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 🔗 Connections (3)

- → ControlFlow: [[For each payment to be recoupled taken from the oldest one (Synchronization 1854370)]]
- ← ControlFlow: [[Get all active not paired, or partially paired payments related to the provided contract (Action 1854350)]]
- ← Dependency: [[Payment to Pairing collection (Object 1854322)]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
