---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6153 (CLM-3156) Improvement of Supplement configuration"
domain: "Requirements Model"
element_id: 1862175
diagrams: 6
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Get client documents needed to service request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6153 (CLM-3156) Improvement of Supplement configuration

## 📝 Notes

This rule describes obtaining Document Types required from client for collection tool service request.
Needed Document Types for the request are divided to two groups:

	
- Document Types required from client by reason for particular service usage (see this rule)


	
- Supplement Document Types for particular service generated from the system


Input:

	
- SupplementId
	
- RequiredDocumentContainerID


Output:

	
- Client's Document Type list


Steps:

	
- Get List of Document Types contained in Supplement ->Required Document Container having ID = RequiredDocumentContainerID and Supplement.Id = SupplementId and Supplement To Required Document Container.Archived=0
	
- Return obtained Document Types in List of Client's Document Types

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
