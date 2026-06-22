---
type: Interface
stereotype: "REST Path"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API"
domain: "Modules"
element_id: 1836276
diagrams: 2
connections: 5
tags:
  - interface
  - modules
---

# 🔶 /tickets/{ticketCode}/transitions

> **Type**: Interface · **Stereotype**: «REST Path»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API

## 🔗 Connections (5)

- → Dependency: [[ErrorMessageRest]]
- → Nesting «path»: [[_tickets_{ticketCode}]]
- → Dependency: [[{ADD}AddTicketTransition]]
- → Dependency: [[{ADD}ErrorMessageRestApi]]
- → Dependency: [[{ADD}Transition]]

## 📊 Appears In (2 diagrams)

- Component: {MOD}Ticketing API
- Logical: addTransition
