---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services"
domain: "Modules"
element_id: 1799530
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 REQ#5 - Set ticket status

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services

## 📝 Notes

Method Set ticket status to the new one for the provided Ticked by the current setting 
Request

	
- Ticket code
	
- Ticket status

Response

	
- Result of activity


Proposed solution:
use StatusTransitions.POST with request parameters: StatusTransiton
Required parameters in StatusTransiton:

	
- ticketCode = Ticket code (mandatory)
	
- status = new status from related Rule.stateTo in Status.code = status code of Ticket (mandatory) - see Another conditions
	
- comment = a notice up to 2047 chars (optional)


Another conditions:

	
- calling system has role having UC10.060 privilege


	
- available statuses enabled for change Ticket status have to be taken by calling Ticket.GET with Ticket.code as parameter. They are presented in the returned Ticket with array of Ticket.rules -> toStatus


	
- In case a user who performs the action is not authenticated in HoSel SSO, the calling (external) system will be only logged in the audit attributes of the action record.

## 🔗 Connections (1)

- → Generalization: [[Requirement - Ticketing web services for exposing]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services
