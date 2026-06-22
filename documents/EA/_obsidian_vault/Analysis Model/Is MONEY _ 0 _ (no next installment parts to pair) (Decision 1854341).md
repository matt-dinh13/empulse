---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854341
diagrams: 1
connections: 4
tags:
  - decision
  - analysis-model
---

# 🔀 Is MONEY > 0 ? (no next installment parts to pair) 

> **Type**: Decision
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 🔗 Connections (3)

- ← ControlFlow: [[Set MONEY = MONEY – settled amount (Action 1854355)]]
- → ControlFlow: [[Does an installment exist_ (Decision 1854337)]]
- → ControlFlow: [[Does an unpaired payment exist_ (Decision 1854335)]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
