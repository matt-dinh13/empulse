---
type: Synchronization
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854345
diagrams: 1
connections: 3
tags:
  - synchronization
  - analysis-model
---

# 📄 For each installment part

> **Type**: Synchronization
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 🔗 Connections (3)

- ← ControlFlow: [[Next Instalment Part exists_ (Decision 1854368)]]
- → ControlFlow: [[Subtract amount of the incoming payment paired to the installment part from the paid amount of the i (Activity 1854379)]]
- ← ControlFlow: [[Find all installment parts paired to the payment where pairing is not locked (Activity 1854353)]]

## 📊 Appears In (1 diagrams)

- Activity: AD - 05.200 Perform decoupling
