---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-19215 (CLM-5259) Add queue support - GUI"
domain: "Modules"
element_id: 1799354
diagrams: 2
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ {MOD}Department

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-19215 (CLM-5259) Add queue support - GUI

## 📝 Notes

{ADD CLM-5259 field was renamed}
Department which is assigned to the ticket.
{DEL}Read only{/DEL}
Source: Label[.code=Department[.code = current ticket.department].code].value
Localization code: TCK_Department

## 🔗 Connections (1)

- → Dependency: [[10.050 Assign ticket to department]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-19215 (CLM-5259) Add queue support - GUI
- Custom: Ticket detail - user interface
