---
type: Synchronization
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519206
diagrams: 1
connections: 3
tags:
  - synchronization
  - requirements-model
---

# 📄 For each installment part

> **Type**: Synchronization
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (3)

- ← ControlFlow: [[Next Instalment Part exists_]]
- ← ControlFlow: [[Find all installment parts paired to the payment where pairing is not locked]]
- → ControlFlow: [[Subtract amount of the incoming payment paired to the installment part from the paid amount of the i]]

## 📊 Appears In (1 diagrams)

- Activity: AD - 05.200 Perform decoupling
