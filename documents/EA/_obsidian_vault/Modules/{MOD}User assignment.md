---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/User assignment modal"
domain: "Modules"
element_id: 1799295
diagrams: 1
connections: 2
tags:
  - screen
  - modules
---

# 📱 {MOD}User assignment

> **Type**: Screen
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/User assignment modal

## 📝 Notes

User from/to whom the ticket is being un/assigned.
Source: {DEL CLM-5364}Currently logged-in user{/DEL}{MOD CLM-5364}Users with roles for the current ticket's department that have logged in TCK at least once{/MOD} and NULL value (see UC's {ADD}10.062 Assign ticket to user and {ADD}10.063 Unassign ticket from user for more information)

## 🔗 Connections (2)

- → Dependency: [[10.063 Unassign ticket from user]]
- → Dependency: [[10.062 Assign ticket to user]]

## 📊 Appears In (1 diagrams)

- Custom: {ADD}User assignment modal
