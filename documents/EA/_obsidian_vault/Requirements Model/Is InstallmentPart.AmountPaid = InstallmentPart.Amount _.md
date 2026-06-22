---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519203
diagrams: 1
connections: 3
tags:
  - decision
  - requirements-model
---

# 🔀 Is InstallmentPart.AmountPaid = InstallmentPart.Amount ?

> **Type**: Decision
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (3)

- ← ControlFlow: [[Set InstallmentPart.AmountPaid = InstallmentPart.AmountPaid + settled amount]]
- → ControlFlow: [[Set InstallmentPart.FullyPaidDate]]
- → ControlFlow: [[Installment Part is paired to the Payment]]

## 📊 Appears In (1 diagrams)

- Activity: Pair Installment Part
