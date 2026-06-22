---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/COMMON for Contract Bulk Operations/User Interface Model"
domain: "Modules"
element_id: 1690931
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Resume

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/COMMON for Contract Bulk Operations/User Interface Model

## 📝 Notes

If Operation.Status = VALIDATION_PAUSED then call  08.713 Resume bulk operation without TimeFrom + TimeTo  and refresh the page.

If Operation.Status = EXECUTION_PAUSED then show confirmation dialog with pre-filled TimeFrom + TimeTo edits, then call  08.713 Resume bulk operation with entered TimeFrom + TimeTo and refresh the page.
TimeFrom and TimeTo must be both empty or both filled.
The period can be also through night, e.g. 22:00 - 6:00. 

Visible only if UC precondition is met (Bulk Operation.Status = VALIDATION_PAUSED or EXECUTION_PAUSED)

## 🔗 Connections (1)

- → Dependency: [[08.713 Resume bulk operation (UseCase 1879244)]]

## 📊 Appears In (1 diagrams)

- Custom: Bulk operation detail
