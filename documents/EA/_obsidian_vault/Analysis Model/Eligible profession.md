---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules"
domain: "Analysis Model"
element_id: 1728256
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Eligible profession

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules

## 📝 Notes

Inputs:

	
- insuranceService
	
- profession


Outputs:

	
- eligibility - boolean


If profession is in the list of the ineligible professions of the insurance program (insuranceService.InsuranceProgram.InsuranceEligibilityCriteria.IneligibleProfessions) then
-- return false
else
-- return true
end if

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Eligible Insurance Service]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Eligible Insurance Service
