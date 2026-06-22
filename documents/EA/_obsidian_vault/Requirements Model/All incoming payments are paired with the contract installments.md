---
type: Synchronization
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519230
diagrams: 1
connections: 3
tags:
  - synchronization
  - requirements-model
---

# 📄 All incoming payments are paired with the contract installments

> **Type**: Synchronization
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (3)

- ← ControlFlow: [[Standard pairing]]
- ← ControlFlow: [[Keep priority pairing]]
- → ControlFlow: [[Call 01.474 Calculate CEL debt info]]

## 📊 Appears In (1 diagrams)

- Activity: AD - 05.180 Perform coupling payments with instalments
