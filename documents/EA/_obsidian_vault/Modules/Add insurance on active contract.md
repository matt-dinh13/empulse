---
type: Activity
stereotype: "ArchiMate_BusinessProcess"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/Insurance business processes"
domain: "Modules"
element_id: 1592950
diagrams: 1
connections: 7
tags:
  - activity
  - modules
---

# ⚡ Add insurance on active contract

> **Type**: Activity · **Stereotype**: «ArchiMate_BusinessProcess»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/Insurance business processes

## 🔗 Connections (7)

- ← ControlFlow «ArchiMate_Triggering»: [[User via GUI]]
- ← ControlFlow «ArchiMate_Flow»: [[Replace insurance on contract]]
- ← ControlFlow «ArchiMate_Triggering»: [[External application]]
- → Dependency «ArchiMate_UsedBy»: [[Add Insurance on Contract]]
- → Dependency «ArchiMate_UsedBy»: [[Activate Insurance]]
- → Dependency «ArchiMate_UsedBy»: [[Insurance Data Eligibility]]
- → Dependency «ArchiMate_UsedBy»: [[Get insurance offer]]

## 📊 Appears In (1 diagrams)

- Logical: Insurance BP
