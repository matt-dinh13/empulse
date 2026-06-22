---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2317 (CLM-1075) TCK - API for integration with 3rd Party ICF"
domain: "Requirements Model"
element_id: 1241435
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Create general ticket from external system

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2317 (CLM-1075) TCK - API for integration with 3rd Party ICF

## 📝 Notes

Requirement: It is asked creating general ticket in TCK, based on the incoming customer’s feedback from an external system.
The created ticket will be related to a communication record. Important notice: A communication record has to be created before the ticket creation because the communication record identifier is needed as the input of the ticket creation.


Proposed solution:
Request for a ticket creation is realize by calling REST API tickets.POST with Ticket object in the request body. 
Expected Ticket attributes filled in:

	
- category.code = code of ticket category
	
- type.code = code of ticket type
	
- department.code = code of department where the ticket should be assigned
	
- description = a notice up to 2047 chars 
	
- relatedSubjects (can be more related subjects entered)
.subjectType = 'COMMUNICATION_RECORD'
.code = CommunicationRecordCode


Another conditions:

	
- calling system is in an user role having UC10_020 privilege


	
- available category, type and department code lists enabled for Ticket creation have to be taken by calling:
- category.code = calling REST categories.GET
- type.code = calling REST type.GET with category.code as parameter
- department = calling REST department.GET with type.code, activeOnly = 1, myOnly = 0 as parameter


	
- In case a user who performs the action is not authenticated in HoSel SSO, the calling (external) system will be only logged in the audit attributes of the action record.


For description of schemas/structures used for the ticket creation see the Provided web services chapter

## 📊 Appears In (1 diagrams)

- Custom: CBL-2317 (CLM-1075) TCK - API for integration with 3rd Party ICF
