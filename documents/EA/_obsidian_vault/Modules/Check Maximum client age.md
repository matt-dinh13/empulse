---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model"
domain: "Modules"
element_id: 1705416
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Check Maximum client age

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model

## 📝 Notes

This rule describes evaluation of client's age eligibility for defined insurance

Input:

	
- clientBirthDate
	
- clientGender
	
- ReferenceDate
	
- MaxFemaleAge
	
- MaxMaleAge


	
- ClientEligibilityResult structure
	
- ignoreMissingValues


Output:

	
- ClientEligibilityResult (possible result codes: PASSED/FAILED)


	
- ClientEligibilityResult.resultDetails in ResultDetail (Code, Value) array (optional)


Steps:

	
- If clientBirthDate or clientGender is NULL and ignoreMissingValues = 1 then set ClientEligibilityResult.result = PASSED and add into ResultDetail[.checkedItem = 'birthDate/gender', .checkResult = INSR_ClientBirthDateOrGenderMissing] and Return ClientEligibilityResult
	
- If clientBirthDate or clientGender is NULL, set ClientEligibilityResult.result  = FAILED and add into ResultDetail[.checkedItem = 'birthDate/gender', .checkResult = INSR_ClientBirthDateOrGenderMissing] and Return ClientEligibilityResult
	
- System checks the clientGender matches GENDER code list value (CSD GET .../codelist/CUST/search/GENDER is used for getting values)
If the check fails, set ClientEligibilityResult.result  = FAILED and add into ResultDetail[.checkedItem = 'gender', .checkResult = MSG_ELIGIBILITY_CLIENT_INVALID_GENDER (Provided client gender value is invalid) and Return ClientEligibilityResult
	
- If clientGender = MALE (M) and MaxMaleAge is not NULL then
- set maximalAge = InsuranceEligibilityCriteria.Max Age Male
- Else set maximalAge = InsuranceEligibilityCriteria.Max Age Female
	
- If maximalAge is defined and ReferenceDate <= (clientBirthDate + maximalAge) then
- If ClientEligibilityResult.result  = NULL set ClientEligibilityResult.result = PASSED
- else set ClientEligibilityResult.result  = FAILED; add into ResultDetail[.checkedItem = 'birthDate', .checkResult = INSR_ClientMaximalAge]
	
- Return ClientEligibilityResult

## 🔗 Connections (1)

- ← Dependency: [[Check Insurance Eligibility based on client data]]

## 📊 Appears In (1 diagrams)

- Use Case: Insurance Program functions
