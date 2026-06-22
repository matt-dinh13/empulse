---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1799253
diagrams: 4
connections: 12
tags:
  - enumeration
  - modules
---

# 📝 TicketType

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model

## 📝 Notes

Country configurable enumeration of possible ticket subtypes.

## 🔗 Connections (12)

- → Association: [[TicketStatus]]
- → Association: [[TicketStatus]]
- ← Dependency: [[NotificationRule]]
- ← Dependency: [[StatusTransition (Class 1799246)]]
- → Association: [[TicketTypeSpecification]]
- → Association: [[Flow (Enumeration 1799239)]]
- → Association: [[TicketCategory]]
- → Association: [[TicketFlow]]
- → Association: [[Priority (Enumeration 1799236)]]
- ← Association: [[Mistake Rule]]
- → Association: [[Role (Enumeration 1799224)]]
- ← Association: [[Ticket (Class 1799223)]]

## 📊 Appears In (4 diagrams)

- Logical: Ticket notification setting - Logical Data Model
- Logical: Ticketing - Logical Data Model
- Logical: Ticketing setting - Logical Data Model
- Logical: TicketType extension - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Value | string |  |
| Version | Number (18,0) |  |
| {DEL}TypeCount | Number (6,0) | 0 |
| CreationDate | DateTime |  |
| CreatedBy | User |  |
| UpdateDate | DateTime |  |
| UpdatedBy | User |  |
| ActiveYN | Boolean |  |
| VisibleYN | Boolean |  |
