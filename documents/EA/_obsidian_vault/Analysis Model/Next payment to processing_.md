---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854333
diagrams: 1
connections: 4
tags:
  - decision
  - analysis-model
---

# 🔀 Next payment to processing?

> **Type**: Decision
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 🔗 Connections (4)

- → ControlFlow: [[For every payment]]
- → ControlFlow: [[Payment is paired to the contract]]
- ← ControlFlow: [[Is currency the same_]]
- ← ControlFlow: [[Set payment pairing status to _pending_]]

## 📊 Appears In (1 diagrams)

- Activity: 05.182 Pair payment with contract
