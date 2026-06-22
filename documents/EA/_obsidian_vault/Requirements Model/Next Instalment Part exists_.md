---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519228
diagrams: 1
connections: 3
tags:
  - decision
  - requirements-model
---

# 🔀 Next Instalment Part exists?

> **Type**: Decision
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (3)

- → ControlFlow: [[Next Incoming Payment exists_]]
- → ControlFlow: [[For each installment part]]
- ← ControlFlow: [[Is a complete Installment Part.Amount _ the amount paid _]]

## 📊 Appears In (1 diagrams)

- Activity: AD - 05.200 Perform decoupling
