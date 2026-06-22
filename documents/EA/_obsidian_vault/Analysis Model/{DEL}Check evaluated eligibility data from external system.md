---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Service Eligibility Evaluation/Use Case"
domain: "Analysis Model"
element_id: 1824625
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {DEL}Check evaluated eligibility data from external system

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Service Eligibility Evaluation/Use Case

## 📝 Notes

The rule describers set of validations to check evaluated eligibility data from external system

Input parameters:

	
- CUID
	
- ServiceType


Output:

	
- ValidationMessage


Check definition (validation rule; ValidationMessage when validation fails)

	
- Check if provided CUID exists in the Client Snapshot ->Client.CUID; ValidationMessage = CLIENT_NOT_FOUND (e.g. Client with cuid: ${cuid} not found.)
	
- Check if Service Type.Code = ServiceType exists in Service Type; ValidationMessage = MSG_ServiceTypeNotExist (e.g. Service Type for provided code does not exist.)

## 🔗 Connections (1)

- ← Dependency: [[{DEL}08.366 Get evaluated eligibility criteria from external system (UseCase 1824629)]]

## 📊 Appears In (1 diagrams)

- Use Case: Getting evaluated eligibility criteria from external system
