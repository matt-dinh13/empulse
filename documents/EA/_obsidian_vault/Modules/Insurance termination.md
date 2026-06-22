---
type: Activity
stereotype: "ArchiMate_BusinessFunction"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/Insurance business processes"
domain: "Modules"
element_id: 1592970
diagrams: 1
connections: 6
tags:
  - activity
  - modules
---

# ⚡ Insurance termination

> **Type**: Activity · **Stereotype**: «ArchiMate_BusinessFunction»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/Insurance business processes

## 🔗 Connections (6)

- ← ControlFlow «ArchiMate_Triggering»: [[User via GUI]]
- ← ControlFlow «ArchiMate_Triggering»: [[Finish loan contract]]
- ← ControlFlow «ArchiMate_Triggering»: [[Loan contract paid-off]]
- → ControlFlow «ArchiMate_Triggering»: [[Replace insurance on contract]]
- ← ControlFlow «ArchiMate_Triggering»: [[External application]]
- → Dependency «ArchiMate_UsedBy»: [[Terminate Insurance on loan contract]]

## 📊 Appears In (1 diagrams)

- Logical: Insurance BP
