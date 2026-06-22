---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Ticket detail"
domain: "Modules"
element_id: 1800567
diagrams: 1
connections: 0
tags:
  - class
  - modules
---

# 🔷 Ticket history

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Ticket detail

## 📝 Notes

Grid to showing history of ticket changes It shows all history records include current one.

Source: Ticket.statusTransitions[]

Default order: Date desc
Paging: No

## 📊 Appears In (1 diagrams)

- Custom: Ticket detail - user interface

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Status | Ticket Status |  |
| Date | dateTime |  |
| Modified by | string |  |
| Assigned to | string |  |
| Comment | string |  |
