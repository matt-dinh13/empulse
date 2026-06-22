---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1799238
diagrams: 4
connections: 2
tags:
  - enumeration
  - modules
---

# 📝 TicketCategory

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model

## 📝 Notes

Country configurable enumeration of possible ticket categories. Example values can be: CCN (Contract cancellation), CM (Contract management).

## 🔗 Connections (2)

- ← Dependency: [[NotificationRule]]
- ← Association: [[TicketType]]

## 📊 Appears In (4 diagrams)

- Logical: Ticket notification setting - Logical Data Model
- Logical: Ticketing - Logical Data Model
- Logical: Ticketing setting - Logical Data Model
- Logical: TicketType extension - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Value | string |  |
| CreationDate | DateTime |  |
| CreatedBy | User |  |
| UpdateDate | DateTime |  |
| UpdatedBy | User |  |
| VisibleYN | Boolean |  |
| ActiveYN | Boolean |  |
