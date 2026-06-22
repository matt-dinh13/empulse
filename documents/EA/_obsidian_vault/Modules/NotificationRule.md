---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1799251
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 NotificationRule

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model

## 📝 Notes

Entity that holds a configuration determining for which combinations of Ticket Type and Ticket Status Kafka notifications are generated.

## 🔗 Connections (3)

- → Dependency: [[TicketStatus]]
- → Dependency: [[TicketType]]
- → Dependency: [[TicketCategory]]

## 📊 Appears In (1 diagrams)

- Logical: Ticket notification setting - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Value | string |  |
| TicketCategoryCode | Code |  |
| TicketTypeCode | Code |  |
| TicketStatus | string |  |
| ActiveYN | Boolean |  |
