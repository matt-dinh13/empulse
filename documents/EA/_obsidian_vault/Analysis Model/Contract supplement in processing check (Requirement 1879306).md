---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Business rules"
domain: "Analysis Model"
element_id: 1879306
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Contract supplement in processing check

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Business rules

## 📝 Notes

This rule performs validation for existing active request for contract status transition. It checks if any contract supplement with the passed type exists for the passed contract.
The check returns 'TRUE' or 'FALSE'. 

Input:

	
- Contract
	
- SupplementType


Steps:

	
- If exists Contract->ContractSupplement[where Type = passed SupplementType] is in Status (DRAFT, IN_PROCESS, APPROVED) , this rule returns 'TRUE' else it returns 'FALSE'.

## 🔗 Connections (1)

- ← Dependency: [[13.060 Create change credit limit request manually (UseCase 1877196)]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Use Case: Change credit limit manually
