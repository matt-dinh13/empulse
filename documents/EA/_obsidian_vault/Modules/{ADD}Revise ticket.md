---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Ticket detail"
domain: "Modules"
element_id: 1799313
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ {ADD}Revise ticket

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Ticket detail

## 📝 Notes

{ADD CLM-1558 /}
The Button create a new ticket as revision of current ticket - it runs {ADD}10.052 Revise ticket manually use case.
Button is visible only if Ticket.Status<>REVISED (see UC constraints).


Localization code: TCK_ReviseTicket

## 🔗 Connections (1)

- → Dependency: [[10.052 Revise ticket manually]]

## 📊 Appears In (1 diagrams)

- Custom: Ticket detail - user interface
