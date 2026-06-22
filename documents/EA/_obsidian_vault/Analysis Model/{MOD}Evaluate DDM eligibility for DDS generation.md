---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Business Rules"
domain: "Analysis Model"
element_id: 1753480
diagrams: 4
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Evaluate DDM eligibility for DDS generation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Business Rules

## 📝 Notes

Input:

	
- DDM


Output:

	
- boolean --> TRUE if DDM is eligible for DDS generation, FALSE otherwise


Algorithm:
{ADD PAYM-1844 CBL-1541}
If DDM.Bank Account Code = null --> algorithm returns FALSE.
{/ADD}


DDM status is usable for creation of DD statement when configuration of accepted statuses (ACCEPTED_DDM_STATUS) contains record whose DDM status (ACCEPTED_DDM_STATUS.DDM_STATUS) value equals to status of DDM (DDM.STATUS) 
AND
[its confirmation status (ACCEPTED_DDM_STATUS.CONFIRMATION_STATUS) equals to confirmation status of DDM (DDM.CONFIRMATION_STATUS) or (ACCEPTED_DDM_STATUS.CONFIRMATION_STATUS) is empty]
AND 
[
(its  ECS provider type (ACCEPTED_DDM_STATUS.ECS_PROVIDER_TYPE) equals to DDM ECS provider type)
or  
(DDM ECS provider is empty and (ACCEPTED_DDM_STATUS.ECS_PROVIDER_TYPE) is empty)
]

## 🔗 Connections (3)

- ← Dependency: [[{MOD}DirectDebitMandateData]]
- ← Dependency: [[05.271 Process DDS request]]
- ← Dependency: [[05.130 Generate DD statements (UseCase 1863204)]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: PAYM-1844 (CBL-1541) - Refactoring of create/updateDDM WS methods
- Use Case: DDS requests from external systems
- Use Case: Direct Debit statements
