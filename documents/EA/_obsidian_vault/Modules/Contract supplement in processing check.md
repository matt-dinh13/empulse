---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Business Rules"
domain: "Modules"
element_id: 1870132
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Contract supplement in processing check

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Business Rules

## 📝 Notes

This rule performs validation for existing active request for contract status transition. It checks if any contract supplement with the passed type exists for the passed contract.
The check returns 'TRUE' or 'FALSE'. 

Input:

	
- Contract
	
- SupplementType


Steps:

	
- If exists Contract->ContractSupplement[where Type = passed SupplementType] is in Status (DRAFT, IN_PROCESS, APPROVED) , this rule returns 'TRUE' else it returns 'FALSE'.

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
