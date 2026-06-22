---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/My overview"
domain: "Modules"
element_id: 1868157
diagrams: 2
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ {MOD}Assign new ticket

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/My overview

## 📝 Notes

Button that triggers the use case 10.061 Assign a ticket from queue {ADD CLM-5401} with input parameter status = 'IN_PROGRESS' for the TCK REST API call done in the use case.{/ADD} Its visibility is controlled by privilege 10.061 Assign ticket from queue. 

Localization code: TCK_AssignNewTicket

## 🔗 Connections (1)

- → Dependency: [[10.061 Assign a ticket from queue]]

## 📊 Appears In (2 diagrams)

- Custom: {ADD}My overview form
- Custom: CBL-19215 (CLM-5401) assignTicketFromQueue - add tickets limit per user
