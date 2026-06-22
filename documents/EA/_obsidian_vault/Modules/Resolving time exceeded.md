---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Search for Tickets/Search panel - all tickets types"
domain: "Modules"
element_id: 1800386
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Resolving time exceeded

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Search for Tickets/Search panel - all tickets types

## 📝 Notes

Resolving time entered in hours. (e.g. If user enters 72 then system finds tickets which have difference between ticket first status and last cancelled, or closed status greater than or equal to 72 hours.)

Search parameter: Ticket.ResolutionTime >= {resolutionTime}

Localization code: TCK_ResolvingTimeExc

## 🔗 Connections (1)

- → Dependency: [[Number 1 up to 9999]]

## 📊 Appears In (1 diagrams)

- Custom: Search panel - all tickets types
