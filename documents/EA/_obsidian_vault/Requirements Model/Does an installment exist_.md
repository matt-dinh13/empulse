---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519204
diagrams: 1
connections: 3
tags:
  - decision
  - requirements-model
---

# 🔀 Does an installment exist?

> **Type**: Decision
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (3)

- ← ControlFlow: [[Is MONEY _ 0 _ (no next installment parts to pair)]]
- → ControlFlow: [[For each not fully paired Installment Part in the Installment Parts To Pairing where currency is sam]]
- → ControlFlow: [[Create overpayment by 03.080 Add installment]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
