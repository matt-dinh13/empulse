---
type: Activity
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854343
diagrams: 1
connections: 3
tags:
  - activity
  - analysis-model
---

# ⚡ Get all unpaid Installment Parts of the contract and sorts them to pairing 

> **Type**: Activity
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 🔗 Connections (3)

- ← ControlFlow: [[For each payment to be recoupled taken from the oldest one (Synchronization 1854370)]]
- → ControlFlow: [[Set MONEY = the incoming payment amount (Action 1854348)]]
- ← Dependency: [[Installment Parts collection (Object 1854320)]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
