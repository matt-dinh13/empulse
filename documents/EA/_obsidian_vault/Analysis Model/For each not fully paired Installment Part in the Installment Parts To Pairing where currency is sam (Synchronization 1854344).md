---
type: Synchronization
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854344
diagrams: 1
connections: 4
tags:
  - synchronization
  - analysis-model
---

# 📄 For each not fully paired Installment Part in the Installment Parts To Pairing where currency is same as payment currency

> **Type**: Synchronization
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 🔗 Connections (4)

- → ControlFlow: [[Compute settled amount of Installment Part as settled amount = MIN (money, InstallmentPart.Amount –  (Action 1854378)]]
- ← ControlFlow: [[Set MONEY = the incoming payment amount (Action 1854348)]]
- ← ControlFlow: [[Does an installment exist_ (Decision 1854337)]]
- ← Dependency: [[Installment Parts collection (Object 1854320)]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
