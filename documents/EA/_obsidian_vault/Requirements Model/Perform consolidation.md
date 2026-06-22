---
type: Activity
stereotype: "ArchiMate_Function"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-93 (CBL-29) Consolidation (Top-up) for cash loans/Business process idea"
domain: "Requirements Model"
element_id: 1063160
diagrams: 1
connections: 5
tags:
  - activity
  - requirements-model
---

# ⚡ Perform consolidation

> **Type**: Activity · **Stereotype**: «ArchiMate_Function»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-93 (CBL-29) Consolidation (Top-up) for cash loans/Business process idea

## 🔗 Connections (5)

- ← ControlFlow «ArchiMate_Triggering»: [[Disbursement confirmation received]]
- ← ControlFlow «ArchiMate_Triggering»: [[No cash for client]]
- → ControlFlow «ArchiMate_Flow»: [[Request executed notification]]
- → Dependency «ArchiMate_UsedBy»: [[IS.PerformFER]]
- → Dependency «ArchiMate_Access»: [[Consolidation _LSR]]

## 📊 Appears In (1 diagrams)

- Logical: Consolidation #1 x-sell - Business process idea
