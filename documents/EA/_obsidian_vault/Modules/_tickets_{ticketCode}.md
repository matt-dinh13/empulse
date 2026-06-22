---
type: Interface
stereotype: "REST Path"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API"
domain: "Modules"
element_id: 1836286
diagrams: 2
connections: 4
tags:
  - interface
  - modules
---

# 🔶 /tickets/{ticketCode} 

> **Type**: Interface · **Stereotype**: «REST Path»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API

## 🔗 Connections (4)

- → Dependency: [[{ADD}Ticket (Class 1864827)]]
- → Nesting «path»: [[_tickets]]
- ← Nesting «path»: [[_tickets_{ticketCode}_queues]]
- ← Nesting «path»: [[_tickets_{ticketCode}_transitions]]

## 📊 Appears In (2 diagrams)

- Component: {MOD}Ticketing API
- Logical: getTicket
