---
type: Activity
stereotype: "ArchiMate_Function"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-93 (CBL-29) Consolidation (Top-up) for cash loans/Business process idea"
domain: "Requirements Model"
element_id: 1063159
diagrams: 1
connections: 10
tags:
  - activity
  - requirements-model
---

# ⚡ Prepare Consolidation

> **Type**: Activity · **Stereotype**: «ArchiMate_Function»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-93 (CBL-29) Consolidation (Top-up) for cash loans/Business process idea

## 🔗 Connections (8)

- → ControlFlow «ArchiMate_Triggering»: [[Create Consolidation LSR]]
- ← ControlFlow «ArchiMate_Triggering»: [[Contract signed (ContractSignSE)]]
- ← Dependency: [[Financial parameters of Cons]]
- → Dependency «ArchiMate_UsedBy»: [[IS.calculateFerAmount]]
- → Dependency «ArchiMate_Access»: [[Consolidation_ Service]]
- → Dependency «ArchiMate_Access»: [[Consolidation _ OfferService]]
- → Dependency «ArchiMate_Access»: [[Consolidated2 _Contract]]
- → Dependency «ArchiMate_Access»: [[Consolidated1 _Contract]]

## 📊 Appears In (1 diagrams)

- Logical: Consolidation #1 x-sell - Business process idea
