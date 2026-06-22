---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1799236
diagrams: 2
connections: 3
tags:
  - enumeration
  - modules
---

# 📝 Priority

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model

## 📝 Notes

Country configurable enumeration of possible ticket priorities (e.g. critical, low, none). It is used especially for tickets of type Mistake.

## 🔗 Connections (3)

- ← Association: [[TicketType]]
- ← Association: [[Mistake Rule]]
- ← Dependency: [[Ticket (Class 1799223)]]

## 📊 Appears In (2 diagrams)

- Logical: Ticketing - Logical Data Model
- Logical: Ticketing setting - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Value | string |  |
| Version | Number |  |
| CreationDate | DateTime |  |
| CreatedBy | User |  |
| UpdateDate | DateTime |  |
| UpdatedBy | User |  |
| ActiveYN | boolean |  |
