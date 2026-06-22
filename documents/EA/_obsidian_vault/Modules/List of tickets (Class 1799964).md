---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/User Interface Model"
domain: "Modules"
element_id: 1799964
diagrams: 1
connections: 0
tags:
  - class
  - modules
---

# 🔷 List of tickets

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/User Interface Model

## 📝 Notes

Grid of tickets assigned to communication history records of client.
Default order by: Created when desc

List of tickets related to displayed communication. For detail info see 07.120 Show communication ticket list use case
Default order by: Created when desc, TICKET.ID desc
Paging Yes

## 📊 Appears In (1 diagrams)

- Custom: Tab List of tickets

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created when  |  |  |
| Assigned department | Ticket access role |  |
| Created by | User Name |  |
| Code | text |  |
| Type | Ticket Type |  |
| Subtype | TicketSubtype |  |
| Status | Ticket Status |  |
| Ticket detail | button |  |
