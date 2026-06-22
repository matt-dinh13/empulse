---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model"
domain: "Modules"
element_id: 1705419
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Check client profession eligibility

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model

## 📝 Notes

This rule describes a check whether client's profession is eligible for insurance 

Input:

	
- clientProfession
	
- ReferenceDate
	
- IneligibleProfesions[]


	
- ClientEligibilityResult structure
	
- ignoreMissingValues


Outputs:

	
- ClientEligibilityResult (possible result codes: PASSED/FAILED)


	
- ClientEligibilityResult.resultDetails in ResultDetail (Code, Value) array (optional)


Steps:

	
- If clientProfession is NULL and ignoreMissingValues = 1,
- If ClientEligibilityResult is NULL, sets  ClientEligibilityResult.result = PASSED
sets ResultDetail[.checkedItem = 'profession', .checkResult = INSR_ClientProfessionMissing] and Return ClientEligibilityResult
	
- If clientProfession is NULL and ignoreMissingValues = 0 || NULL, set ClientEligibilityResult.result = FAILED and add into ResultDetail[.checkedItem = 'profession', .checkResult = INSR_ClientProfessionMissing and Return ClientEligibilityResult
	
- If clientProfession is included in the IneligibleProfesions[] list
- set ClientEligibilityResult.result = FAILED and add into ResultDetail[.checkedItem = 'profession', .checkResult = INSR_IneligibleClientProfession]
	
- Else if ClientEligibilityResult.result is NULL, set ClientEligibilityResult.result = PASSED
	
- Return ClientEligibilityResult

## 🔗 Connections (1)

- ← Dependency: [[Check Insurance Eligibility based on client data]]

## 📊 Appears In (1 diagrams)

- Use Case: Insurance Program functions
