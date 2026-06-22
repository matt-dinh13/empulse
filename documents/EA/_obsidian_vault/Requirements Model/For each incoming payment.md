---
type: Synchronization
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519214
diagrams: 1
connections: 3
tags:
  - synchronization
  - requirements-model
---

# 📄 For each incoming payment

> **Type**: Synchronization
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (3)

- → ControlFlow: [[Find all installment parts paired to the payment where pairing is not locked]]
- ← ControlFlow: [[Take incoming payments provided as parameters]]
- ← ControlFlow: [[Next Incoming Payment exists_]]

## 📊 Appears In (1 diagrams)

- Activity: AD - 05.200 Perform decoupling
