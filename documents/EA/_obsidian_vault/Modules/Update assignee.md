---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules"
domain: "Modules"
element_id: 1864812
diagrams: 4
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Update assignee

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules

## 📝 Notes

{ADD CLM-5246/}

input:

	
- ticket code
	
- {ADD CLM-5364}assignee
	
- comment{/ADD}
	
- {ADD CLM-5625} optional ticketTargetStatus{/ADD}{DEL CLM-5625}status{/DEL}
	
- user id of current user


	
- If the calling UC is 10.063 Unassign ticket from user, then System updates the AssignedTo field of the given ticket and its corresponding record in the ticket status transition table with NULL value by calling the REST API /assignments/tickets/{ticketCode} endpoint with the DELETE method.


	
- If the calling UC is 10.061 Assign a ticket from queue or 10.062 Assign ticket to user, then System updates the AssignedTo field of the given ticket and its corresponding record in the ticket status transition table with, respectively:
- the user id of the current user,  comment and, if optionally given on input,{ADD CLM-5625} ticketTargetStatus{/ADD}{DEL CLM-5625}status{/DEL} - but in a separate record in the ticket status transitions table by calling the REST API /assignments/tickets endpoint
- assignee and comment by calling the REST API /assignments/tickets/{ticketCode} endpoint with the POST method.
... both from TicketAssignment object in response


	
- System overwrites Update date field in the Ticket with the current date and fills it in the corresponding new record in the ticket status transition table.
	
- {DEL CLM-5364}If the calling UC is 10.063 Unassign ticket from user, then{/DEL} System fills the Comment field of its corresponding record in the ticket status transition table with the comment from the calling request (from DeleteTicketAssignment or CreateTicketAssignmentToUser){DEL CLM-5364} else with automatic message as follows: "Assignment from queue '<queue code>'."{/DEL}

## 🔗 Connections (2)

- ← Dependency: [[10.061 Assign a ticket from queue]]
- ← Dependency: [[10.063 Unassign ticket from user]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Logical: assignTicketFromQueue
- Logical: assignTicketToUser
- Use Case: Ticketing - Queue management
