---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules"
domain: "Analysis Model"
element_id: 1728252
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Minimum client's age

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules

## 📝 Notes

Inputs:

	
- clientBirthDate
	
- insuranceService


Outputs:

	
- eligibility - boolean


reference date = date of generation of the offer, which is currently generated or chosen
minimalAge = InsuranceService.InsuranceProgram.InsuranceEligibilityCriteria.MinAge
If minimalAge is defined and difference between (reference date - clientBirthDate) is lower than minimalAge then
-- return true
else
-- return false.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Eligible Insurance Service]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Eligible Insurance Service
