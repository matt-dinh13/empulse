---
type: Synchronization
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854370
diagrams: 1
connections: 6
tags:
  - synchronization
  - analysis-model
---

# 📄 For each payment to be recoupled taken from the oldest one

> **Type**: Synchronization
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 🔗 Connections (5)

- ← ControlFlow: [[Sort payments to be recoupled by deposit date ascendantly (Action 1854375)]]
- → ControlFlow: [[Get all unpaid Installment Parts of the contract and sorts them to pairing (Activity 1854343)]]
- ← ControlFlow: [[Does an unpaired payment exist_ (Decision 1854335)]]
- ← ControlFlow: [[Sort contract installment parts (Action 1854327)]]
- ← Dependency: [[Payment to Pairing collection (Object 1854322)]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
