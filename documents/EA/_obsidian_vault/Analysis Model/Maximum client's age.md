---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules"
domain: "Analysis Model"
element_id: 1728255
diagrams: 2
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Maximum client's age

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules

## 📝 Notes

Inputs:

	
- clientBirthDate
	
- clientGender
	
- insuranceService
	
- period order (values "first" or "next")


Outputs:

	
- eligibility - boolean


Eligibility Criteria = InsuranceService.InsuranceProgram.InsuranceEligibilityCriteria
If period order=first then reference date = date of generation of the offer, which is currently generated or chosen else reference date = current date

If period order=first then
EndOfInsurancePeriod is calculated using business rule Determine first insurance period with following parameters:

	
- date sent to approval = reference date
	
- date signed = reference date


	
- transaction signed = (If Contract.Contract Type = REL and Initial Transaction in (POS, CASH) then reference date else NULL)


	
- date activated = reference date
	
- insuranceService
	
- term = term (number of installments) of the product sub-variant

else
EndOfInsurancePeriod is calculated using business rule Determine next insurance period.

If eligibilityCriteria.maximumAgeRestrictionType is set to 'DO NOT INSURE' then
-- If clientGender = Male then 
---- maximalAge = eligibilityCriteria.MinAgeMale
-- else 
---- maximalAge = eligibilityCriteria.MinAgeFemale
--end if
-- If maximalAge is defined and endOfInsurancePeriod <= (clientBirthDate + maximalAge) then
---- return true
-- else
---- return false.
else
-- return true
end if

## 🔗 Connections (4)

- → Dependency: [[Determine next insurance period]]
- ← Dependency: [[{MOD}Eligible Insurance Service]]
- → Dependency: [[Determine first insurance period]]
- ← Dependency: [[11.081 Prolong insurance contracts]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Eligible Insurance Service
