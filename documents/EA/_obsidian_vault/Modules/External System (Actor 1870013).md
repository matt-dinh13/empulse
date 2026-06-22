---
type: Actor
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Actors"
domain: "Modules"
element_id: 1870013
diagrams: 4
connections: 10
tags:
  - actor
  - modules
---

# 👤 External System

> **Type**: Actor
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Actors

## 📝 Notes

External System, communication under public standards.

## 🔗 Connections (10)

- ← Dependency: [[{ADD}Contract cancel via API]]
- → Association: [[10.063 Unassign ticket from user]]
- → Association: [[10.017 Get available queues]]
- → Association: [[10.062 Assign ticket to user]]
- → Association: [[10.061 Assign a ticket from queue]]
- → Association: [[10.032 Add ticket to queue]]
- → Association: [[10.031 Get ticket queues]]
- → Association: [[10.033 Remove ticket from queue]]
- ← Association: [[{ADD}Contract migration rollback via API]]
- ← Association: [[{ADD}Contract migrate via API]]

## 📊 Appears In (4 diagrams)

- Use Case: Actors
- Use Case: Cancel contract after sign
- Use Case: Contract cancellation
- Use Case: Use Case Model
