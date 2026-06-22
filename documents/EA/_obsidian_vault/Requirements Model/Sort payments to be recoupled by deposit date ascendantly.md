---
type: Action
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519211
diagrams: 1
connections: 4
tags:
  - action
  - requirements-model
---

# 📄 Sort payments to be recoupled by deposit date ascendantly

> **Type**: Action
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (3)

- → ControlFlow: [[For each payment to be recoupled taken from the oldest one]]
- ← ControlFlow: [[Get all active not paired, or partially paired payments related to the provided contract]]
- ← Dependency: [[Payment to Pairing collection]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
