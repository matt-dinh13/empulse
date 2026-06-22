---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Ticket detail"
domain: "Modules"
element_id: 1799330
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 Ticket attachments

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Ticket detail

## 📝 Notes

Grid with attachments related with ticket. 

Source: Ticket.attachments[]

Default order: Date desc
Paging: No

## 🔗 Connections (1)

- → Dependency: [[10.075 Download a ticket attachment (UseCase 1865696)]]

## 📊 Appears In (1 diagrams)

- Custom: Ticket detail - user interface

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| File name | link |  |
| Attached by | string |  |
| Date | dateTime |  |
| Comment | string |  |
