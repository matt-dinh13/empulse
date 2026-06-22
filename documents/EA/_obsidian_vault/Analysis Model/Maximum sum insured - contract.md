---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules"
domain: "Analysis Model"
element_id: 1728253
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Maximum sum insured - contract

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules

## 📝 Notes

Inputs:

	
- insuranceService
	
- sumInsured


Outputs:

	
- eligibility - boolean


If sumInsured is lower or equal to the maximum sum insured defined for contract (insuranceService.insuranceProgram.InsuranceEligibilityCriteria.MaxSumInsuredContract).
-- return true
else
-- return false
end if

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Eligible Insurance Service]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Eligible Insurance Service
