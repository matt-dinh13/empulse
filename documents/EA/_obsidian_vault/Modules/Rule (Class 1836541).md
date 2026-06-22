---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Schema definitions"
domain: "Modules"
element_id: 1836541
diagrams: 6
connections: 4
tags:
  - class
  - modules
---

# 🔷 Rule

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Schema definitions

## 📝 Notes

The structure defines available setting (e.g. allowed status and department transitions) for the Ticket

## 🔗 Connections (4)

- ← Usage: [[Rule (Class 1836083)]]
- ← Usage: [[TicketInfo]]
- ← Usage: [[Ticket (Class 1836532)]]
- → Dependency: [[CommentPreferenceType]]

## 📊 Appears In (6 diagrams)

- Logical: Schema definitions
- Logical: Ticketing - Assign ticket to department API usage
- Logical: Ticketing - Change ticket status API usage
- Logical: Ticketing - Get Ticket details
- Logical: Ticketing - search for ticket usage
- Logical: Ticketing - Ticket infos

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| flowCode | string |  |
| fromStatus | Status |  |
| toStatus | Status |  |
| fromDepartment | Department |  |
| toDepartment | Department |  |
| commentPreference | string |  |
| actionLabel | ActionLabel |  |
