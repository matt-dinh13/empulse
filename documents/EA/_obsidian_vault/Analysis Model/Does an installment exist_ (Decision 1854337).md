---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854337
diagrams: 1
connections: 3
tags:
  - decision
  - analysis-model
---

# 🔀 Does an installment exist?

> **Type**: Decision
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 🔗 Connections (3)

- → ControlFlow: [[For each not fully paired Installment Part in the Installment Parts To Pairing where currency is sam (Synchronization 1854344)]]
- ← ControlFlow: [[Is MONEY _ 0 _ (no next installment parts to pair) (Decision 1854341)]]
- → ControlFlow: [[Create overpayment by 03.080 Add installment (Activity 1854351)]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
