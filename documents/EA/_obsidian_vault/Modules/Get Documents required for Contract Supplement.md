---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model"
domain: "Modules"
element_id: 1870144
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get Documents required for Contract Supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model

## 📝 Notes

This rule describes obtaining Generated supplement documents defined for a Contract Supplement request (not related to a Loan Service).
Generated supplement documents can be divided to categories by signature requirement:

	
- An agreement to service usage - always signed, document is always generated (ALWAYS_REQUIRED)
	
- A summary - sign not required; document is always generated (NOT_REQUIRED)

Notice: STILL_UNSIGNED is not supported here

Input:

	
- ContractSupplement


Output:

	
- List of SupplementDocumentType objects


Steps:

	
- Get List of Document Types involved in Supplement Document Type and its Signature Requirement where Supplement Document Required Moment = 'SRC' (Service Request Creation) and Supplement Document Type.Archived=0 from ContractSupplement -> Supplement
	
- Return the List of SupplementDocumentType and its Signature Requirement

## 🔗 Connections (1)

- ← Dependency: [[13.200 Generate Contract Supplement Documents]]

## 📊 Appears In (1 diagrams)

- Use Case: Create Contract Supplement documents - Use Case Model
