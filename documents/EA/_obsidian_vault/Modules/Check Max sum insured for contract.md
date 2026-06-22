---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model"
domain: "Modules"
element_id: 1705421
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Check Max sum insured for contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model

## 📝 Notes

This rule describes checking maximal allowed Sum Insured for Insurance contract

Input:

	
- sumInsuredContract
	
- MaxSumInsuredContract


	
- ClientEligibilityResult structure
	
- ignoreMissingValues


Outputs:

	
- ClientEligibilityResult (possible result codes: PASSED/FAILED)


	
- ClientEligibilityResult.resultDetails in ResultDetail (Code, Value) array (optional)


Steps:

	
- If sumInsuredContract is NULL and ignoreMissingValues = 1, 
- If ClientEligibilityResult is NULL, sets  ClientEligibilityResult.result = PASSED and sets ResultDetail[.checkedItem = 'sumInsuredContract', .checkResult = INSR_SumInsuredContractMissing and Return ClientEligibilityResult
	
- If sumInsuredContract is NULL and ignoreMissingValues = 0 || NULL, then set ClientEligibilityResult = FAILED; add into ResultDetail[.checkedItem = 'sumInsuredContract', .checkResult = INSR_SumInsuredContractMissing] and Return ClientEligibilityResult
	
- If sumInsuredContract <= MaxSumInsuredContract, then
- if ClientEligibilityResult.result is NULL, then set ClientEligibilityResult.result = PASSED
	
- Else ClientEligibilityResult.result = FAILED and add into ResultDetail[.checkedItem = 'sumInsuredContract', .checkResult = INSR_SumInsuredContractExceeded
	
- Return ClientEligibilityResult

## 🔗 Connections (1)

- ← Dependency: [[Check Insurance Eligibility based on client data]]

## 📊 Appears In (1 diagrams)

- Use Case: Insurance Program functions
