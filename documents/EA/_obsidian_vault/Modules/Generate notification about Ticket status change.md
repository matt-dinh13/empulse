---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules"
domain: "Modules"
element_id: 1864802
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Generate notification about Ticket status change

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules

## 📝 Notes

This rule describes set up of notification message about defined event on the Ticket.
In this case, defined event is STATUS_CHANGE.

Input:

	
- Ticket


Output:

	
- message


Steps:

	
- System gets TicketCategory.Code, TicketType.Code (if any), Ticket.Status (if any) related to the Ticket
	
- {DEL CLM-4075}System checks if {ADD}NotificationRule record exists by TicketCategory.Code, TicketType.Code, Ticket.Status for active records (ActiveYN = 1). If more than one record is found or no record is found, message is empty and scenario ends.{DEL/}
	
- System creates message based on TicketChangedNotification structure as follow::
- action = STATUS_CHANGE
- changeDate = Ticket.
- ticket = Ticket structure with data from Ticket
	
- Scenario ends.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}10.022 Create ticket service]]
- ← Dependency: [[10.062 Change ticket status service]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-11956 (CLM-4075) Complaints Data Data to Hadoop - TCK
- Logical: Ticketing - Change ticket status API usage
