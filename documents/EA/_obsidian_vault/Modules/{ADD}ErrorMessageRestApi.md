---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/addTicketToQueue"
domain: "Modules"
element_id: 1864837
diagrams: 8
connections: 10
tags:
  - class
  - modules
---

# 🔷 {ADD}ErrorMessageRestApi

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/addTicketToQueue

## 📝 Notes

Data structure holding information about the error that occurred.

## 🔗 Connections (10)

- ← Dependency: [[_assignments_tickets_{ticketCode} (Interface 1836085)]]
- ← Dependency: [[_assignments_tickets_{ticketCode} (Interface 1836085)]]
- ← Dependency: [[_assignments_tickets (Interface 1836284)]]
- ← Dependency: [[_queues_{queueCode}_user_{userLogin}]]
- ← Dependency: [[_queues_{queueCode}_user_{userLogin}]]
- ← Dependency: [[_tickets_{ticketCode}_transitions]]
- ← Dependency: [[_tickets_{ticketCode}_queues_{queueCode}]]
- ← Dependency: [[_tickets_{ticketCode}_queues_{queueCode}]]
- ← Dependency: [[_tickets_{ticketCode}_queues_{queueCode}]]
- → Dependency: [[{ADD}PropertyError]]

## 📊 Appears In (8 diagrams)

- Logical: addTicketToQueue
- Logical: assignTicketFromQueue
- Logical: assignTicketToUser
- Logical: assignUserIntoQueue
- Logical: removeTicketFromQueue
- Logical: ResponsesV2
- Logical: unassignTicketFromUser
- Logical: unassignUserFromQueue

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| errorCode | string |  |
| errorMessage | string |  |
| propertyErrors | PropertyError |  |
| traceId | string |  |
