---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Validation Rules"
domain: "Analysis Model"
element_id: 1246497
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 DDM Limit height for "non-APPROVED" contracts (VAL_0119_DDM_LIMIT)

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Validation Rules

## 📝 Notes

This validation is applicable only if contract is not in status 'APPROVED':

	
- If DDM.limit is not null (otherwise skip this validation) then the following must be true:
DDM.Limit >= OFFER_DDM_LIMIT where OFFER_DDM_LIMIT is defined if Algorithm: Calculate DDM limit.


Related validation message: MSG_0427

## 🔗 Connections (2)

- ← Dependency: [[DDM limit]]
- → Dependency: [[Algorithm_ Calculate DDM limit]]

## 📊 Appears In (1 diagrams)

- Custom: Create DDM
