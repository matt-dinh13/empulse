---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model"
domain: "Modules"
element_id: 1705422
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Check Minimum Client Age

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model

## 📝 Notes

This rule describes validation of minimal client's age

Inputs:

	
- ClientBirthDate
	
- ReferenceDate
	
- MinimalAge
	
- ignoreMissingValues
	
- ClientEligibilityResult structure


Outputs:

	
- ClientEligibilityResult (possible result codes: PASSED/FAILED)
	
- ClientEligibilityResult.resultDetails in ResultDetail (Code, Value) array (optional)



	
- If ClientBirthDate is NULL and ignoreMissingValues = 1, then system 
- If ClientEligibilityResult is NULL, sets ClientEligibilityResult.result = PASSED and sets ResultDetail[.checkedItem = 'birthDate', .checkResult = INSR_ClientBirthDateOrGenderMissing] and Return ClientEligibilityResult
	
- If ClientBirthDate is NULL and ignoreMissingValues = 0 || NULL, set ClientEligibilityResult.result = FAILED and add into ResultDetail[.checkedItem = 'birthDate', .checkResult = INSR_ClientBirthDateOrGenderMissing] and Return ClientEligibilityResult
	
- If (ReferenceDate - ClientBirthDate) is lower than or equal MinimalAge then
-- If ClientEligibilityResult is NULL, then sets ClientEligibilityResult.result = PASSED and Return ClientEligibilityResult 
else
-- set ClientEligibilityResult.result = FAILED; add into ResultDetail[.checkedItem = 'birthDate', .checkResult = INSR_MinClientAge]
	
- Return ClientEligibilityResult

## 🔗 Connections (1)

- ← Dependency: [[Check Insurance Eligibility based on client data]]

## 📊 Appears In (1 diagrams)

- Use Case: Insurance Program functions
