---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519213
diagrams: 1
connections: 4
tags:
  - decision
  - requirements-model
---

# 🔀 Is MONEY > 0 ? (no next installment parts to pair) 

> **Type**: Decision
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (3)

- ← ControlFlow: [[Set MONEY = MONEY – settled amount]]
- → ControlFlow: [[Does an installment exist_]]
- → ControlFlow: [[Does an unpaired payment exist_]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
