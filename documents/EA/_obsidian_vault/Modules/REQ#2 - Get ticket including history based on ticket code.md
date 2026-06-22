---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services"
domain: "Modules"
element_id: 1799526
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 REQ#2 - Get ticket including history based on ticket code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services

## 📝 Notes

Requirement:
Return whole history of ticket in any status based on provided Ticket code
Request

	
- Ticket code

Response

	
- Ticket code
	
- Ticket priority
	
- Assigned department
	
- Ticket status
	
- Ticket subtype
	
- Ticket description
	
- Comment
	
- Updated date



Proposed solution:
use Tickets.GET with request parameters: GetTicketRequest; response: Ticket
Recommended search parameters for GetTicketRequest:

	
- code = Ticket code (mandatory)


	
- userLanguage = country code (e.g. EN, IN,...) (optional)


Another conditions:

	
- calling system has role having UC10_030 privilege

## 🔗 Connections (1)

- → Generalization: [[Requirement - Ticketing web services for exposing]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services
