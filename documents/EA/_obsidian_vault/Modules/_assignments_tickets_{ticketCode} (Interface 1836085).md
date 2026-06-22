---
type: Interface
stereotype: "REST Path"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API"
domain: "Modules"
element_id: 1836085
diagrams: 3
connections: 7
tags:
  - interface
  - modules
---

# 🔶 /assignments/tickets/{ticketCode}

> **Type**: Interface · **Stereotype**: «REST Path»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API

## 📝 Notes

{ADD CLM-5246/}

## 🔗 Connections (7)

- → Dependency: [[{ADD}TicketAssignment]]
- → Dependency: [[{ADD}ErrorMessageRestApi]]
- → Dependency: [[10.063 Unassign ticket from user]]
- → Dependency: [[{ADD}TicketAssignment (Class 1864840)]]
- → Dependency: [[{ADD}ErrorMessageRestApi]]
- → Dependency: [[200]]
- → Nesting «path»: [[_assignments_tickets (Interface 1836284)]]

## 📊 Appears In (3 diagrams)

- Component: {MOD}Ticketing API
- Logical: assignTicketToUser
- Logical: unassignTicketFromUser
