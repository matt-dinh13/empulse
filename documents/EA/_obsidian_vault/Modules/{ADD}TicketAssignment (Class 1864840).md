---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Responses"
domain: "Modules"
element_id: 1864840
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {ADD}TicketAssignment

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Responses

## 📝 Notes

Ticket assignment entity

## 🔗 Connections (2)

- ← Dependency: [[_assignments_tickets_{ticketCode} (Interface 1836085)]]
- → Dependency: [[{ADD}TicketAssignmentTicket (Class 1864844)]]

## 📊 Appears In (1 diagrams)

- Logical: ResponsesV2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ticket | TicketAssignmentTicket |  |
| user | User |  |
| comment | string |  |
