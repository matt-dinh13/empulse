---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854335
diagrams: 1
connections: 4
tags:
  - decision
  - analysis-model
---

# 🔀 Does an unpaired payment exist?

> **Type**: Decision
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 🔗 Connections (4)

- ← ControlFlow: [[Is MONEY _ 0 _ (no next installment parts to pair) (Decision 1854341)]]
- → ControlFlow: [[For each payment to be recoupled taken from the oldest one (Synchronization 1854370)]]
- ← ControlFlow: [[Call Pair Installment Part alternate with parameter_ settled amount = MONEY (Activity 1854336)]]
- → ControlFlow: [[All incoming payments are paired with the contract installments (StateNode 1854366)]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
