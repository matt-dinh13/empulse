---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model"
domain: "Modules"
element_id: 1870126
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get client documents needed to service request (SUP)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model

## 📝 Notes

This rule describes obtaining Document Types required from client for collection tool service request.
Needed Document Types for the request are divided to two groups:

	
- Document Types required from client by reason for particular service usage (see this rule)


	
- Supplement Document Types for particular service generated from the system


Input:

	
- SupplementId
	
- RequiredDocumentContainerCode


Output:

	
- Client's Document Type list


Steps:

	
- Get List of Document Types contained in Supplement -> Required Document Container having Code = RequiredDocumentContainerCode and Supplement.Id = SupplementId and Supplement To Required Document Container.Archived=0
	
- Return obtained Document Types in List of Client's Document Types

## 🔗 Connections (1)

- ← Dependency: [[13.200 Generate Contract Supplement Documents]]

## 📊 Appears In (1 diagrams)

- Use Case: Create Contract Supplement documents - Use Case Model
