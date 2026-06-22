---
type: Interface
stereotype: "REST Path"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API"
domain: "Modules"
element_id: 1836287
diagrams: 2
connections: 5
tags:
  - interface
  - modules
---

# 🔶 /tickets

> **Type**: Interface · **Stereotype**: «REST Path»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API

## 🔗 Connections (5)

- → Dependency: [[{ADD}Ticket (Class 1864827)]]
- → Dependency: [[ErrorMessageRest]]
- → Nesting «path»: [[Ticketing (Boundary 1836464)]]
- → Dependency: [[Ticket (Class 1799223)]]
- ← Nesting «path»: [[_tickets_{ticketCode}]]

## 📊 Appears In (2 diagrams)

- Component: {MOD}Ticketing API
- Logical: createTicket
