---
type: Interface
stereotype: "REST Path"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API"
domain: "Modules"
element_id: 1836284
diagrams: 2
connections: 5
tags:
  - interface
  - modules
---

# 🔶 /assignments/tickets

> **Type**: Interface · **Stereotype**: «REST Path»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API

## 🔗 Connections (5)

- → Nesting «path»: [[Ticketing (Boundary 1836464)]]
- ← Nesting «path»: [[_assignments_tickets_{ticketCode} (Interface 1836085)]]
- → Dependency: [[{ADD}ErrorMessageRestApi]]
- → Dependency: [[{ADD}TicketAssignment]]
- → Dependency: [[412]]

## 📊 Appears In (2 diagrams)

- Component: {MOD}Ticketing API
- Logical: assignTicketFromQueue
