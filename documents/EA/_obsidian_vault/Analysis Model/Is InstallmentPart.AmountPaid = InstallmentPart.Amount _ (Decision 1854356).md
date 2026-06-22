---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854356
diagrams: 1
connections: 3
tags:
  - decision
  - analysis-model
---

# 🔀 Is InstallmentPart.AmountPaid = InstallmentPart.Amount ?

> **Type**: Decision
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 🔗 Connections (3)

- → ControlFlow: [[Installment Part is paired to the Payment (StateNode 1854360)]]
- ← ControlFlow: [[Set InstallmentPart.AmountPaid = InstallmentPart.AmountPaid + settled amount (Activity 1854328)]]
- → ControlFlow: [[Set InstallmentPart.FullyPaidDate (Activity 1854326)]]

## 📊 Appears In (1 diagrams)

- Activity: Pair Installment Part
