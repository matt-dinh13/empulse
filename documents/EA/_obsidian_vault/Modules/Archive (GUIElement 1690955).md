---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/COMMON for Contract Bulk Operations/User Interface Model"
domain: "Modules"
element_id: 1690955
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Archive

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/COMMON for Contract Bulk Operations/User Interface Model

## 📝 Notes

Show confirmation dialog, then call 08.715 Archive bulk operation  and refresh the page

Visible only if UC precondition is met (Bulk Operation.Status <> VALIDATION_IN_PROGRESS or EXECUTION_IN_PROGRESS)

## 🔗 Connections (1)

- → Dependency: [[08.715 Archive bulk operation (UseCase 1879245)]]

## 📊 Appears In (1 diagrams)

- Custom: Bulk operation detail
