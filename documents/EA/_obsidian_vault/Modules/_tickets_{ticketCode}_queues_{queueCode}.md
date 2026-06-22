---
type: Interface
stereotype: "REST Path"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API"
domain: "Modules"
element_id: 1836098
diagrams: 3
connections: 7
tags:
  - interface
  - modules
---

# 🔶 /tickets/{ticketCode}/queues/{queueCode}

> **Type**: Interface · **Stereotype**: «REST Path»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API

## 📝 Notes

{ADD CLM-5246/}

## 🔗 Connections (7)

- → Dependency: [[{ADD}Queue (Class 1836496)]]
- → Nesting «path»: [[_tickets_{ticketCode}_queues]]
- → Dependency: [[{ADD}ErrorMessageRestApi]]
- → Dependency: [[{ADD}ErrorMessageRestApi]]
- → Dependency: [[{ADD}ErrorMessageRestApi]]
- → Realisation: [[10.032 Add ticket to queue]]
- → Dependency: [[200]]

## 📊 Appears In (3 diagrams)

- Component: {MOD}Ticketing API
- Logical: addTicketToQueue
- Logical: removeTicketFromQueue
