---
type: Activity
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519235
diagrams: 1
connections: 3
tags:
  - activity
  - requirements-model
---

# ⚡ Get all unpaid Installment Parts of the contract and sorts them to pairing 

> **Type**: Activity
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (3)

- → ControlFlow: [[Set MONEY = the incoming payment amount]]
- ← ControlFlow: [[For each payment to be recoupled taken from the oldest one]]
- ← Dependency: [[Installment Parts collection]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
