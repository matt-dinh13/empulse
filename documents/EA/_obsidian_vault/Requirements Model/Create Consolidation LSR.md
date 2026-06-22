---
type: Activity
stereotype: "ArchiMate_Function"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-93 (CBL-29) Consolidation (Top-up) for cash loans/Business process idea"
domain: "Requirements Model"
element_id: 1063170
diagrams: 1
connections: 5
tags:
  - activity
  - requirements-model
---

# ⚡ Create Consolidation LSR

> **Type**: Activity · **Stereotype**: «ArchiMate_Function»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-93 (CBL-29) Consolidation (Top-up) for cash loans/Business process idea

## 🔗 Connections (5)

- → ControlFlow «ArchiMate_Triggering»: [[Create payment fo client]]
- → ControlFlow «ArchiMate_Flow»: [[Request created notification]]
- ← ControlFlow «ArchiMate_Triggering»: [[Prepare Consolidation]]
- → ControlFlow «ArchiMate_Triggering»: [[Create consolidation payments]]
- → Dependency «ArchiMate_Access»: [[Consolidation _LSR]]

## 📊 Appears In (1 diagrams)

- Logical: Consolidation #1 x-sell - Business process idea
