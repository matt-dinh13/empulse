---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/COMMON for Contract Bulk Operations/User Interface Model"
domain: "Modules"
element_id: 1690938
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Execute

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/COMMON for Contract Bulk Operations/User Interface Model

## 📝 Notes

Show confirmation dialog with TimeFrom + TimeTo edits, then call 08.711 Execute bulk operation  and refresh the page.

TimeFrom and TimeTo must be both empty or both filled.
The period can be also through night, e.g. 22:00 - 6:00. 

Visible only if UC precondition is met (Bulk Operation.Status = VALIDATED)

## 🔗 Connections (1)

- → Dependency: [[{MOD}08.711 Execute bulk operation]]

## 📊 Appears In (1 diagrams)

- Custom: Bulk operation detail
