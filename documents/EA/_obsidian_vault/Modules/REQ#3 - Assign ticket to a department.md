---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services"
domain: "Modules"
element_id: 1799528
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 REQ#3 - Assign ticket to a department

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services

## 📝 Notes

Method assign the Ticked to provided Department by the current setting
Request

	
- Ticket code


	
- Assigned department

Response

	
- Result of activity



Proposed solution:
use StatusTransitions.POST with request parameters: StatusTransiton
Required parameters in StatusTransiton:

	
- ticketCode = Ticket code (mandatory)
	
- status = current status of Ticket in Status structure: Status.code = status code of Ticket (mandatory) - see Another conditions
	
- department = new department in Department structure Department.code = new department code (mandatory) - see Another conditions
	
- comment = a notice up to 2047 chars (optional)


Another conditions:

	
- calling system has role having UC10_050 privilege


	
- available Departments and current Ticket status for the Ticket assigning have to be taken by calling Ticket.GET with Ticket.code as parameter. Available Departments are presented in the returned Ticket with array of Ticket.rules -> toDepartment -> Department.code (see REQ#2 - Get ticket including history based on ticket code for more info)
	
- In case a user who performs the action is not authenticated in HoSel SSO, the calling (external) system will be only logged in the audit attributes of the action record.

## 🔗 Connections (1)

- → Generalization: [[Requirement - Ticketing web services for exposing]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services
