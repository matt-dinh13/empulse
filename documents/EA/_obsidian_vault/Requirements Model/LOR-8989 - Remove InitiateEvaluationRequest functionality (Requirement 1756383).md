---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL"
domain: "Requirements Model"
element_id: 1756383
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-8989 - Remove InitiateEvaluationRequest functionality

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL

## 📝 Notes

As Loan Origination module, I need to get rid of the unused initiate evaluation functionality, so the system's code can be enlightened slightly.

Solution proposal:

	
- Return an unsupported operation exception for ApplicationManagementWS.InitiateEvaluation method (v21 endpoint).
	
- Remove the following features from the system's code:
- InitiateEvaluationRequest and InitiateEvaluationResponse.
- 01.084 Initiate evaluation externally use case incl. related access right.
- 01.153 Send to basic evaluation use case incl. related access right.
- 01.453 Receive basic evaluation result use case incl. related access right, notifications and system events.
- BASIC LAP vector preparation.
- 'BASIC' item from EvaluationRequestType.class
- Whole BSL_BASIC_VECTOR_FILTER database table.
- Individual records in the BSL_VECTOR_CONFIGURATION database table, which are related to BASIC LAP vector.

## 🔗 Connections (1)

- → Realisation: [[LOR-8421 LOR - remove KZ custom behavior of BSL (Requirement 1756369)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8421 LOR - remove KZ custom behavior of BSL
- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
