---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6153 (CLM-3156) Improvement of Supplement configuration"
domain: "Requirements Model"
element_id: 1862174
diagrams: 6
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Get supplement documents required for service request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6153 (CLM-3156) Improvement of Supplement configuration

## 📝 Notes

This rule describes obtaining Generated supplement documents defined for a collection tool service request.
Needed supplement documents which are required for a collection tool service request are divided to two groups:

	
- Documents required from client by reason for particular service usage
	
- Supplement documents for particular service generated from the system (see this rule)


Generated supplement documents can be divided to categories by signature requirement:

	
- An amendment (supplements to contract) - sign required if no document the same type has ever been signed within the contract lifecycle
	
- An agreement to service usage - always signed, document is always generated
	
- A summary - sign not required; document is always generated


Input:

	
- CUID
	
- ServiceTypeCode


Output:

	
- List of Supplement Document Types objects with Signature Requirement


Steps:

	
- Get List of Document Types involved in Supplement Document Type and its Signature Requirement where Supplement Document Required Moment = 'SRC' (Service Request Creation) and Supplement Document Type.Archived=0
	
- For each Document Type in the List having Signature Requirement = STILL_UNSIGNED,
- check if the Service has been added additionally to Contract (i.e. check Contract Service having Contract Service.When Created = 'CTSE' and Service -> Service Type = ServiceTypeCode). If not the Document Type is removed from the List and scenario continues with next Document Type
- check if the Document Type has been already signed (i.e. pass through registration process) by the client within his/he other Contract lifecycle for other collection tool service (i.e. get count of (Document of Document Type = checked Document Type and having Document.Registered Flag = TRUE and related to Contract Supplement)  which have been created for Contract Supplement having Supplement.Supplement Type = COLLECTION_TOOL_SERVICE and all Contracts with Contract.Status in (N, A, L, K) and belongs to Client Snapshot -> Client.CUID = CUID)
- if count of (Document Type found) > 0, remove the Document Type from the List
	
- Return the List of Document Types and its Signature Requirement

## 🔗 Connections (3)

- → Dependency: [[{DEL}13.205 Create contract supplement documents]]
- ← Dependency: [[08.905 Show supplement documents for service request]]
- ← Dependency: [[{MOD}13.205 Create contract supplement documents v2]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-6153 (CLM-3156) Improvement of Supplement configuration
- Use Case: Collection tools request
- Use Case: Loan restructuring request creation - externally
- Use Case: Loan restructuring request creation - via GUI
- Use Case: Payment holiday request creation - via GUI
- Use Case: Use DMS in 13.205 Create contract supplement documents
