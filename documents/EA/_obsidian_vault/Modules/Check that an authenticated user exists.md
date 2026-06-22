---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules"
domain: "Modules"
element_id: 1864811
diagrams: 4
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Check that an authenticated user exists


> **Type**: Requirement
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules

## 📝 Notes

{ADD CLM-5246/}
 

	
- System checks that an authenticated user exists in the session.
	
- If not, system returns error "No user authenticated."
	
- If so, system returns true.

## 🔗 Connections (2)

- ← Dependency: [[10.061 Assign a ticket from queue]]
- ← Dependency: [[10.063 Unassign ticket from user]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Logical: assignTicketFromQueue
- Logical: assignTicketToUser
- Use Case: Ticketing - Queue management
