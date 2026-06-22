---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9381 - Update direct debit mandate ECS provider from Application detail via DDM REST API"
domain: "Requirements Model"
element_id: 1821073
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Update ECS provider for application DDM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9381 - Update direct debit mandate ECS provider from Application detail via DDM REST API

## 📝 Notes

This object describes the steps, how system updates the ECS provider for selected direct debit mandate from the application.

Input:
- DirectDebitMandateCode = unique identifier of the direct debit mandate
- ECSProviderCode = unique identification code of the ECS provider

Output:
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the DirectDebitMandateCode from the input and updates the ECS provider for the corresponding direct debit mandate by calling the respective REST API provided by the Payments module (i.e. PUT UpdateECSProviderForDDMRequest) with following input parameters:
   - ddmCode = DirectDebitMandateCode
   - ecsProviderCode = ECSProviderCode

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
.
	
- System receives an applicable REST API response and proceeds based on its type accordingly - in case the direct debit mandate's ECS provider was not successfully updated (i.e. for the response with .code <> '200' (OK)), system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object.
	
- Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[01.423 Change ECS provider for application DDM (UseCase 1818672)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9381 - Update direct debit mandate ECS provider from Application detail via DDM REST API
- Custom: Operations with application DDM
