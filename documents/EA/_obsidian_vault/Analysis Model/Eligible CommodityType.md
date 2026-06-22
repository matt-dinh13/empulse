---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules"
domain: "Analysis Model"
element_id: 1728251
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Eligible CommodityType

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules

## 📝 Notes

Inputs:

	
- insuranceService
	
- commodity
	
- {ADD CLM-2622}price (optional){/ADD}


Outputs:

	
- eligibility - boolean



	
- If insuranceService.InsuranceProgram.SubjectType != 'GOODS' then  -- only validate commodity for insurance
return TRUE and exit
	
- If a commodity is not in defined eligible commodity types (insuranceService.InsuranceProgram.InsuranceEligibilityCriteria.EligibleCommodityType) then
return FALSE and exit
	
- {ADD CLM-2622}If EligibleCommodityType.Minimal Price value in NULL, return TRUE and Exit
	
- If price is NULL, return FALSE and Exit – check for commodity price is required
	
- If price >= EligibleCommodityType.Minimal Price, return TRUE, otherwise return FALSE{/ADD}
	
- Exit

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Eligible Insurance Service]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Eligible Insurance Service
