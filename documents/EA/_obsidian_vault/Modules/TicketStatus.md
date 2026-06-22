---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-19733 (CLM-5625) Assign registration ticket based on its status"
domain: "Modules"
element_id: 1799256
diagrams: 5
connections: 8
tags:
  - enumeration
  - modules
---

# 📝 TicketStatus

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-19733 (CLM-5625) Assign registration ticket based on its status

## 📝 Notes

Country configurable enumeration of possible ticket statuses. It contains predefined status items used generally by the product. Possible values are: new, open, closed etc.

## 🔗 Connections (8)

- ← Association: [[TicketType]]
- ← Association: [[TicketType]]
- ← Dependency: [[NotificationRule]]
- ← Association: [[StatusTransition (Class 1799246)]]
- ← Dependency: [[Rule (Class 1799225)]]
- ← Dependency: [[Rule (Class 1799225)]]
- ← Association: [[Ticket (Class 1799223)]]
- ← Dependency: [[_statuses]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-19733 (CLM-5625) Assign registration ticket based on its status
- Logical: listStatuses
- Logical: Ticket notification setting - Logical Data Model
- Logical: Ticketing - Logical Data Model
- Logical: Ticketing setting - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| NEW |  |  |
| APPROVED |  |  |
| CANCELLED |  |  |
| CLOSED |  |  |
| FIXED |  |  |
| Code | string |  |
| Value | string |  |
| ActiveYN | Boolean |  |
| Version | Number (18.0) |  |
| CreationDate | DateTime |  |
| CreatedBy | User |  |
| UpdateDate | DateTime |  |
| UpdatedBy | User |  |
| OPEN |  |  |
| FOLLOW_UP |  |  |
| VERIFY |  |  |
| SOLVED |  |  |
| TO_APPROVE |  |  |
| INVESTIGATE |  |  |
| ASSIGNED |  |  |
| IN_PROCESS |  |  |
| {ADD}REVISED |  |  |
| BLOCKED |  |  |
| {ADD}INVESTIGATION |  |  |
| RE-CHECK |  |  |
| REJECTED |  |  |
| REVISED |  |  |
| UNCONTACTED |  |  |
| WAITING |  |  |
