---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519202
diagrams: 1
connections: 4
tags:
  - decision
  - requirements-model
---

# 🔀 Does an unpaired payment exist?

> **Type**: Decision
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (4)

- → ControlFlow: [[All incoming payments are paired with the contract installments (StateNode 1519240)]]
- ← ControlFlow: [[Call Pair Installment Part alternate with parameter_ settled amount = MONEY]]
- → ControlFlow: [[For each payment to be recoupled taken from the oldest one]]
- ← ControlFlow: [[Is MONEY _ 0 _ (no next installment parts to pair)]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
