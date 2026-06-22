---
type: Interface
stereotype: "REST Path"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API"
domain: "Modules"
element_id: 1836285
diagrams: 2
connections: 5
tags:
  - interface
  - modules
---

# 🔶 /tickets/{ticketCode}/queues

> **Type**: Interface · **Stereotype**: «REST Path»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API

## 📝 Notes

Retrieves queues where ticket is allocated. You need to have UC10_031 privilege.

## 🔗 Connections (5)

- → Nesting «path»: [[_tickets_{ticketCode}]]
- → Dependency: [[{ADD}Queue (Class 1836496)]]
- → Dependency: [[400]]
- → Dependency: [[403]]
- ← Nesting «path»: [[_tickets_{ticketCode}_queues_{queueCode}]]

## 📊 Appears In (2 diagrams)

- Component: {MOD}Ticketing API
- Logical: getTicketQueues
