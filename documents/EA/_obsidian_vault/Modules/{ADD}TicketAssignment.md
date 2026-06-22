---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/assignments/assignTicketFromQueue"
domain: "Modules"
element_id: 1864833
diagrams: 3
connections: 4
tags:
  - class
  - modules
---

# 🔷 {ADD}TicketAssignment

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/assignments/assignTicketFromQueue

## 📝 Notes

Ticket assignment entity

## 🔗 Connections (4)

- ← Dependency: [[_assignments_tickets_{ticketCode} (Interface 1836085)]]
- ← Dependency: [[_assignments_tickets (Interface 1836284)]]
- → Dependency: [[User (Class 1801597)]]
- → Dependency: [[{ADD}TicketAssignmentTicket]]

## 📊 Appears In (3 diagrams)

- Logical: assignTicketFromQueue
- Logical: assignTicketToUser
- Logical: ResponsesV2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ticket | TicketAssignmentTicket |  |
| user | User |  |
| comment | string |  |
