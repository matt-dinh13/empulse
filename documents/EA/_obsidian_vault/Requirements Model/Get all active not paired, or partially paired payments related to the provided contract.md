---
type: Action
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519242
diagrams: 1
connections: 4
tags:
  - action
  - requirements-model
---

# 📄 Get all active not paired, or partially paired payments related to the provided contract

> **Type**: Action
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (4)

- ← ControlFlow: [[Does an unpaired_partially paired installment part exist before the first paired installment_]]
- ← ControlFlow: [[05.200 Perform decoupling not chronologically paired payments]]
- → ControlFlow: [[Sort payments to be recoupled by deposit date ascendantly]]
- ← Dependency: [[Payment to Pairing collection]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
