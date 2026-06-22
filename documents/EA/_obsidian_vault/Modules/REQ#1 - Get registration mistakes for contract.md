---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services"
domain: "Modules"
element_id: 1799525
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 REQ#1 - Get registration mistakes for contract 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services

## 📝 Notes

Requirement:
Return non-closed and non-cancelled tickets of the registration mistake types by provided ContractCode
Request

	
- Contract code

Response

	
- Ticket code
	
- Ticket priority
	
- Assigned department
	
- Ticket status
	
- Ticket subtype
	
- Ticket description


Proposed solution:
use TicketInfos.GET with request parameters: GetTicketInfoRequest; response:TicketInfo
Recommended search parameters for GetTicketInfoRequest:

	
- relatedSubjectTypeCode = 'CONTRACT' (mandatory)
	
- relatedSubjectCode = ContractCode (mandatory)
	
- searchType = 'TICKET_SEARCH' (mandatory)
	
- activeOnlyYN = 1 (mandatory) - new parameter
	
- page = 1 (for the first page of result; there is returned 50 records per page. For getting next page, number is increased by 1)
	
- userLanguage = country code (e.g. EN, IN,...) (optional)


Another conditions:

	
- calling system has role having UC10_010 and UC10_010_ALL (All ticket search) privilege
	
- parameters of calling user setting can be obtained by call UserSetting.GET ?

## 🔗 Connections (1)

- → Generalization: [[Requirement - Ticketing web services for exposing]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-1139 (CLM-866) IN Paperless REQ7 - Ticketing web services
