---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Insurance/Business Rules"
domain: "Analysis Model"
element_id: 1728250
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {DEL}Max eligible commodity date activation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Business Rules

## 📝 Notes

{DEL CSI-1276 /}

This rule check maximal number of days after the commodity activation and/or commodity price to be eligible for insurance.

Inputs:

	
- InsuranceProgram
	
- CommodityCode
	
- ActivationDate (optional)
	
- Price (optional)


Outputs:

	
- Eligibility - boolean


Steps:
A. If InsuranceProgram.SubjectType = 'GOODS' then -- the check is intended for commodity insurance only

	
- Get EligibleCommodity by provided CommodityCode (i.e. Insurance Program -> Insurance Eligibility Criteria.Eligible Commodity Type.Commodity Type Code = CommodityCode)
	
- If no EligibleCommodity then return Eligibility = FALSE
	
- If EligibleCommodity.Max Days After Activation value exists, 
- if ActivationDate is NULL return Eligibility = FALSE and Exit – check for commodity date of activation is required
- check current date <= ActivationDate + Add Days (Max Days After Activation). If so return Eligibility = TRUE else return Eligibility = FALSE
	
- If EligibleCommodity.Max Days After Activation value does not exists, return Eligibility = TRUE --- no limitation
	
- If EligibleCommodityType.Minimal Price value is NULL, return Eligibility = TRUE and Exit
	
- If price is NULL, return Eligibility = FALSE and Exit – check for commodity price is required
	
- Check price >= EligibleCommodityType.Minimal Price. If so, return Eligibility = TRUE, otherwise return Eligibility = FALSE

B. If InsuranceProgram.SubjectType != 'GOODS' then return Eligibility = TRUE
C. Exit

## 🔗 Connections (1)

- ← Dependency: [[{MOD}11.010 Create insurance contract]]

## 📊 Appears In (2 diagrams)

- Custom: Eligible Insurance Service
- Use Case: Create and Sign Insurance contract
