---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Business Rules"
domain: "Analysis Model"
element_id: 1728259
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {DEL}Check maximum client age rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Business Rules

## 📝 Notes

{DEL CSI-1276 /}
This rule describes evaluation of client's age eligibility for defined insurance
Input:

	
- InsuranceEligibilityCriteria


	
- clientBirthDate
	
- clientGender
	
- ReferenceDate


Output:

	
- checkResult (boolean)


Steps:
If InsuranceEligibilityCriteria.Maximum Age Restriction Type = 'DO NOT INSURE' then
-- If clientGender = Male then 
---- maximalAge = InsuranceEligibilityCriteria.Max Age Male
-- else 
---- maximalAge = InsuranceEligibilityCriteria.Max Age Female

-- If maximalAge is defined and ReferenceDate <= (clientBirthDate + maximalAge) then
---- return TRUE
-- else
---- return FALSE
else
-- return TRUE

## 🔗 Connections (1)

- ← Dependency: [[11.126 Check client eligibility for insurance (UseCase 1879786)]]

## 📊 Appears In (2 diagrams)

- Custom: Eligible Insurance Service
- Use Case: Insurance based on EOM message
