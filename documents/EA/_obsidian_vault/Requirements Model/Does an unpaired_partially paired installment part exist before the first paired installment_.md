---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519231
diagrams: 1
connections: 3
tags:
  - decision
  - requirements-model
---

# 🔀 Does an unpaired/partially paired installment part exist before the first paired installment?

> **Type**: Decision
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (3)

- ← ControlFlow: [[Find all active installment parts]]
- → ControlFlow: [[Get all active not paired, or partially paired payments related to the provided contract]]
- → ControlFlow: [[05.200 Perform decoupling not chronologically paired payments]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
