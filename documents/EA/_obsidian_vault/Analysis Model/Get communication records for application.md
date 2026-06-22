---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with communication records"
domain: "Analysis Model"
element_id: 1878486
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get communication records for application

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with communication records

## 📝 Notes

This object describes the steps, how system gets the data of the communication records (possibly filtered by their type, channel or source system) associated with the specific application.

Input:

	
- ApplicationCode - unique identifier of the application
	
- CUID - client's unique identifier
	
- CommunicationChannel [0..1] - channel of the communication (for filtering the records)
	
- CommunicationType [0..1] - type of the communication (for filtering the records)
	
- SourceSystem [0..n] - system, where the communication records are sourced from (for filtering the records)


Output:

	
- CommunicationRecord [0..n] - object of respective communication record:
   - Communication
   - Ticket [0..n]
	
- ErrorCode (optional) - code of the error, when some technical issues occur during the performed steps


Steps:

	
- System takes the ApplicationCode, CUID, CommunicationChannel, CommunicationType and each SourceSystem from the input and gets the data of the applicable communication for the corresponding application by calling the respective REST API provided by the CLC module (i.e. GET https://clc.{environment}/rest/v1/communication) with following input parameters:
   - cuid = CUID
   - contractCode = ApplicationCode
   - type = CommunicationType
   - channel = CommunicationChannel
   - system = SourceSystem
   - sortOrder = 'desc'
   - sortBy = 'creationDate'
   - pageNumber = '0'
   - pageSize = '100'

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on the returned data accordingly - in case no communication data are returned (i.e. no communication meeting the requested criteria was found), then algorithm ends (with no ErrorCode returned to the calling object).
	
- System takes the communication data returned within the previous step and gets the data of all the tickets associated with such communication by calling the respective REST API provided by the TCK module (i.e. GET https://tck.{environment}/tck/rest/v2/ticket-infos) with following input parameters:
   - searchType = 'TICKET_SEARCH'
   - page = '1'
   - relatedSubjectTypeCode = 'COMMUNICATION_RECORD'
   - relatedSubjectCodes = Communication.content.externalId.id (returned within the previous step)
   - projection = 'RELATED_SUBJECT_DEFAULT'

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on the returned data accordingly - in case any ticket data are returned (i.e. at least one ticket associated with any of the previously retrieved communications was found), system takes them and pairs them with the corresponding communication data (using the Ticket.relatedSubjects[.type.code='COMMUNICATION_RECORD'].code).
	
- System takes each CommunicationRecord constructed within the previous step(s) and returns them to the calling object.
	
- Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[07.022 Show list of communication for application (UseCase 1736405)]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with communication records
