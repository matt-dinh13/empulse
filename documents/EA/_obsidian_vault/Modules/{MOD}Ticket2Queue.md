---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1799260
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {MOD}Ticket2Queue

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model

## 📝 Notes

Holds main information about the relation.

{ADD CLM-5718}New column TICKET_STATUS was added to TCK_TICKET2QUEUE table. This column is updated always when ticket status is changed if more than 2+ relations to queues exist for given ticket.{/ADD}

## 🔗 Connections (2)

- → Association: [[{ADD}Queue]]
- ← Association: [[Ticket (Class 1799223)]]

## 📊 Appears In (1 diagrams)

- Logical: Ticketing - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Version | Number (18,0) |  |
| CreationDate | DateTime |  |
| CreatedBy | User |  |
| UpdateDate | DateTime |  |
| UpdatedBy | User |  |
| Archived | Boolean |  |
| TicketId | int |  |
| QueueCode | string |  |
| {ADD}TicketStatus | string |  |
