---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2317 (CLM-1075) TCK - API for integration with 3rd Party ICF"
domain: "Requirements Model"
element_id: 1241434
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 - Change ticket status from external system

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2317 (CLM-1075) TCK - API for integration with 3rd Party ICF

## 📝 Notes

Requirement: It is asked to change status of ticket by an external system. This request to change is accompanied by a commentary. 

Proposed solution:
use StatusTransitions.POST with request parameters: StatusTransiton object
Required parameters in StatusTransiton:

	
- ticketCode = Ticket code (mandatory)
	
- status = new status from related Rule.stateTo in Status.code = status code of Ticket (mandatory) - see Another conditions
	
- comment = a notice up to 2047 chars (optional)


Another conditions:

	
- calling system is in a user role having UC10_060 privilege


	
- available statuses enabled for change Ticket status have to be taken by calling Ticket.GET with Ticket.code as parameter. They are presented in the returned Ticket with array of Ticket.rules -> toStatus


	
- In case a user who performs the action is not authenticated in HoSel SSO, the calling (external) system will be only logged in the audit attributes of the action record.


For description of schemas/structures used for the ticket status change see the Provided web services chapter

## 📊 Appears In (1 diagrams)

- Custom: CBL-2317 (CLM-1075) TCK - API for integration with 3rd Party ICF
