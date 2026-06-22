---
type: Activity
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519221
diagrams: 1
connections: 2
tags:
  - activity
  - requirements-model
---

# ⚡ Call Pair Installment Part alternate with parameter: settled amount

> **Type**: Activity
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (2)

- ← ControlFlow: [[Compute settled amount of Installment Part as settled amount = MIN (money, InstallmentPart.Amount – ]]
- → ControlFlow: [[Set MONEY = MONEY – settled amount]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
