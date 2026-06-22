---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/addTransition"
domain: "Modules"
element_id: 1836561
diagrams: 5
connections: 2
tags:
  - class
  - modules
---

# 🔷 {ADD}PropertyError

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/addTransition

## 📝 Notes

Data structure holding information about the error that occurred on property level

## 🔗 Connections (2)

- ← Dependency: [[ErrorMessageRest]]
- ← Dependency: [[{ADD}ErrorMessageRestApi]]

## 📊 Appears In (5 diagrams)

- Logical: addTransition
- Logical: assignTicketFromQueue
- Logical: assignTicketToUser
- Logical: createTicket
- Logical: unassignTicketFromUser

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| property | string |  |
| value | string |  |
| code | string |  |
| message | string |  |
