---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1799246
diagrams: 1
connections: 7
tags:
  - class
  - modules
---

# 🔷 StatusTransition

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model

## 📝 Notes

Entity that holds history of ticket status changes including information about a department and a user that triggered the change.

## 🔗 Connections (7)

- → Dependency: [[TicketModificationType]]
- → Association: [[StatusTransition (Class 1799246)]]
- ← Association: [[StatusTransition (Class 1799246)]]
- → Dependency: [[TicketType]]
- → Association: [[TicketStatus]]
- → Association: [[Department (Enumeration 1799235)]]
- → Aggregation: [[Ticket (Class 1799223)]]

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
| Comment | Text |  |
| TicketTypeCode | TicketType |  |
| ModificationType | Ticket Modification Type |  |
| {ADD}AssignedTo | User |  |
