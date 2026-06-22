---
type: Activity
stereotype: "ArchiMate_BusinessFunction"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/Insurance business processes"
domain: "Modules"
element_id: 1592946
diagrams: 1
connections: 5
tags:
  - activity
  - modules
---

# ⚡ Activate loan contract

> **Type**: Activity · **Stereotype**: «ArchiMate_BusinessFunction»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/Insurance business processes

## 🔗 Connections (5)

- ← ControlFlow «ArchiMate_Flow»: [[Sign loan application]]
- → ControlFlow «ArchiMate_Flow»: [[Cancel loan contract]]
- → ControlFlow «ArchiMate_Flow»: [[Pay-off loan contract]]
- → ControlFlow «ArchiMate_Flow»: [[Finish loan contract]]
- → Dependency «ArchiMate_UsedBy»: [[Activate Insurance]]

## 📊 Appears In (1 diagrams)

- Logical: Insurance BP
