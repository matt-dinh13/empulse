---
type: Activity
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854342
diagrams: 1
connections: 2
tags:
  - activity
  - analysis-model
---

# ⚡ Call Pair Installment Part alternate with parameter: settled amount

> **Type**: Activity
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 🔗 Connections (2)

- → ControlFlow: [[Set MONEY = MONEY – settled amount (Action 1854355)]]
- ← ControlFlow: [[Compute settled amount of Installment Part as settled amount = MIN (money, InstallmentPart.Amount –  (Action 1854378)]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
