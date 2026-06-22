---
type: Synchronization
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519216
diagrams: 1
connections: 4
tags:
  - synchronization
  - requirements-model
---

# 📄 For each not fully paired Installment Part in the Installment Parts To Pairing where currency is same as payment currency

> **Type**: Synchronization
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (4)

- ← ControlFlow: [[Set MONEY = the incoming payment amount]]
- → ControlFlow: [[Compute settled amount of Installment Part as settled amount = MIN (money, InstallmentPart.Amount – ]]
- ← ControlFlow: [[Does an installment exist_]]
- ← Dependency: [[Installment Parts collection]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
