---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services"
domain: "Modules"
element_id: 1799529
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 REQ#6 - Get tickets by department

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services

## 📝 Notes

Return only non-closed and non-cancelled Tickets based on provided Department and (optionally) Ticket status.
Request

	
- Assigned department
	
- Ticket status

Response

	
- Ticket code
	
- Ticket priority
	
- Assigned department
	
- Ticket status
	
- Ticket subtype
	
- Ticket description


Proposed solution:
use TicketInfos.GET request parameters: GetTicketInfoRequest; response:TicketInfo
Recommended search parameters for GetTicketInfoRequest:

	
- searchType = 'TICKET_SEARCH' (mandatory)
	
- activeOnlyYN = 1 (mandatory)
	
- department = department associated with the Ticket in Department structure (mandatory) - see Another conditions


	
- statusCode = code of status


	
- page = 1 (for the first page of result; there is returned 50 records per page. For getting next page, number is increased by 1)
	
- userLanguage = country code (e.g. EN, IN,...) (optional)


Another conditions:

	
- calling system has role having UC10_010 and UC10_010_ALL (All ticket search) privilege
	
- a list of available Departments for the Ticket searching has to be taken by calling Departments.GET with with myOnly = 0 and activeOnly = 1 as parameters.

## 🔗 Connections (1)

- → Generalization: [[Requirement - Ticketing web services for exposing]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services
