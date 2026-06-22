---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules"
domain: "Modules"
element_id: 1864808
diagrams: 3
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Generate Related subject notification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules

## 📝 Notes

{ADD CLM-3712/}
Goal of this rule is to send Related subject notification about an event which occurred on Related Subject or its bound Tickets.

Input:

	
- Event type
	
- Ticket


Output:

	
- Notification


Steps:

	
- If Input.Ticket -> Related Subject[.Type = CONTRACT].exists then system proceeds with next step else rule ends.
	
- System populates RelatedSubjectNotification (RSN) as following:
- RSN.eventType = Input.Event type
- RSN.eventDate = current date and time
- RSN -> relatedSubject.type = CONTRACT
- RSN -> relatedSubject.code = Input.Ticket -> Related Subject[.Type = CONTRACT].Code
- RSN -> tickets = list of all tickets, which have Related Subject[.Type = RSN -> relatedSubject.type and .Code = RSN -> relatedSubject.code]
For each ticket system populates following:
- RSN -> tickets[1..*].code = Ticket.Code
- RSN -> tickets[1..*].type = Ticket -> Type.Code
- RSN -> tickets[1..*].category = Ticket -> Type.Category
- RSN -> tickets[1..*].department = Ticket.Department
- RSN -> tickets[1..*].activeStatus = If Ticket.Status does not exist in global parameter TCK_INACTIVE_STATUSES then TRUE else FALSE.
	
- System sends notification.
	
- Rule ends.

## 🔗 Connections (4)

- ← Dependency: [[10.050 Assign ticket to department]]
- ← Dependency: [[{MOD}10.022 Create ticket service]]
- ← Dependency: [[10.062 Change ticket status service]]
- ← Dependency: [[10.034 Create related subject to ticket service]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-6153 (CLM-3712) Registration queue - TCK - Implement Kafka RelatedSubjectNotification
- Use Case: Ticket creation - Use Case Model
