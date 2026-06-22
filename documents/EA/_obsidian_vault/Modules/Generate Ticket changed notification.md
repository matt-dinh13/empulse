---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules"
domain: "Modules"
element_id: 1864803
diagrams: 4
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Generate Ticket changed notification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules

## 📝 Notes

{ADD CLM-4457/}
Goal of this rule is to send Ticket changed notification for significant events on ticket
Input:

	
- Ticket


Output:

	
- Notification


Steps:

	
- System takes Ticket objects from input and generates notification TicketChangedEvent.
	
- System sends notification.
	
- Rule ends.

## 🔗 Connections (4)

- ← Dependency: [[10.050 Assign ticket to department]]
- ← Dependency: [[{MOD}10.022 Create ticket service]]
- ← Dependency: [[10.062 Change ticket status service]]
- ← Dependency: [[10.034 Create related subject to ticket service]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: CLM-4457 - TCK - create job for cleaning ticket event outbox table
- Logical: Ticketing - Change ticket status API usage
- Use Case: Ticket creation - Use Case Model
