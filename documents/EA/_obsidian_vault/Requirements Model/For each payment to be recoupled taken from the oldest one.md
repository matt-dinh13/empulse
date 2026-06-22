---
type: Synchronization
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519220
diagrams: 1
connections: 6
tags:
  - synchronization
  - requirements-model
---

# 📄 For each payment to be recoupled taken from the oldest one

> **Type**: Synchronization
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (5)

- → ControlFlow: [[Get all unpaid Installment Parts of the contract and sorts them to pairing]]
- ← ControlFlow: [[Sort contract installment parts]]
- ← ControlFlow: [[Sort payments to be recoupled by deposit date ascendantly]]
- ← ControlFlow: [[Does an unpaired payment exist_]]
- ← Dependency: [[Payment to Pairing collection]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
