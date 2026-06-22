---
type: Action
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854378
diagrams: 1
connections: 2
tags:
  - action
  - analysis-model
---

# 📄 Compute settled amount of Installment Part as settled amount = MIN (money, InstallmentPart.Amount – InstallmentPart.AmountPaid).

> **Type**: Action
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 🔗 Connections (2)

- ← ControlFlow: [[For each not fully paired Installment Part in the Installment Parts To Pairing where currency is sam (Synchronization 1854344)]]
- → ControlFlow: [[Call Pair Installment Part alternate with parameter_ settled amount (Activity 1854342)]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
