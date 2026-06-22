---
type: Action
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519246
diagrams: 1
connections: 2
tags:
  - action
  - requirements-model
---

# 📄 Compute settled amount of Installment Part as settled amount = MIN (money, InstallmentPart.Amount – InstallmentPart.AmountPaid).

> **Type**: Action
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (2)

- → ControlFlow: [[Call Pair Installment Part alternate with parameter_ settled amount]]
- ← ControlFlow: [[For each not fully paired Installment Part in the Installment Parts To Pairing where currency is sam]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
