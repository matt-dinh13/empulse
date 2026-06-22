---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Modules/CEL Account (CELA)/Architecture/Flow diagram"
domain: "Modules"
element_id: 1798820
diagrams: 1
connections: 4
tags:
  - decision
  - modules
---

# 🔀 Contract status check

> **Type**: Decision
> **Package**: HomerSelect/BSL/Modules/CEL Account (CELA)/Architecture/Flow diagram

## 🔗 Connections (4)

- → ControlFlow «FC_Connector»: [[Get all source data]]
- ← ControlFlow «FC_Connector»: [[Cotract changed]]
- ← ControlFlow «FC_Connector»: [[Direct debit mandate changed]]
- → ControlFlow «FC_Connector»: [[End]]

## 📊 Appears In (1 diagrams)

- Logical: Flow diagram
