---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Validation Rules"
domain: "Analysis Model"
element_id: 1246501
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 DDM Limit height for applications and approved contracts (VAL_0122_OFFER_DDM_LIMIT)

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Validation Rules

## 📝 Notes

This validation is applicable only if contract is in status APPROVED or application is being filled in.
The following must be true: If DDM.limit is not null (otherwise skip validation) then  
DDM.LIMIT >= OFFER_DDM_LIMIT
where OFFER_DDM_LIMIT is defined if Algorithm: Calculate DDM limit.

Related error message: MSG_0121

## 🔗 Connections (2)

- → Dependency: [[Algorithm_ Calculate DDM limit]]
- ← Dependency: [[DDM limit]]

## 📊 Appears In (1 diagrams)

- Custom: Create DDM
