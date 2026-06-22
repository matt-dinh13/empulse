---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1799225
diagrams: 1
connections: 7
tags:
  - class
  - modules
---

# 🔷 Rule

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model

## 📝 Notes

Entity that holds a configuration determining which ticket status transitions are allowed for a specific ticket type and a specific department, whether a comment is required in such transition and whether the ticket should be reassigned to another department automatically after such transition.

## 🔗 Connections (7)

- → Dependency: [[Department (Enumeration 1799235)]]
- → Dependency: [[TicketStatus]]
- → Dependency: [[CommentPreference (Enumeration 1799244)]]
- → Association: [[Flow (Enumeration 1799239)]]
- → Dependency: [[Department (Enumeration 1799235)]]
- → Usage: [[ActionLabel]]
- → Dependency: [[TicketStatus]]

## 📊 Appears In (1 diagrams)

- Logical: Ticketing setting - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ActionLabel | ActionLabel |  |
| ActiveYN | Boolean |  |
| CommentPreference | CommentPreference |  |
| FromDepartment | Department |  |
| {DEL}CheckSolver | Boolean |  |
| CreationDate | DateTime |  |
| ToDepartment | Department |  |
| CreatedBy | User |  |
| StateFrom | TicketStatus |  |
| StateTo | TicketStatus |  |
| UpdateDate | DateTime |  |
| UpdatedBy | User |  |
