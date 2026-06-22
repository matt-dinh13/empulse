---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model"
domain: "Modules"
element_id: 1705418
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Check Max sum insured for client

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model

## 📝 Notes

This rule describes checking total sum insured from all active Insurance contracts of the client with the same Insurance Program type.

Input:

	
- MaxSumInsuredClient -- from Insurance Program eligibility definition
	
- sumInsuredContract -- taken from the new client's insurance contract
	
- clientSumInsured
	
- InsuranceProgramCode -- Insurance Program related to the new client's insurance contract


	
- ReferenceDate
	
- ClientEligibilityResult


Output:

	
- ClientEligibilityResult (possible result codes: PASSED/FAILED)


	
- ClientEligibilityResult.resultDetails in ResultDetail (Code, Value) array (optional)


Steps:

	
- If clientSumInsured is null, set clientSumInsured = 0
	
- Set clientSumInsured = clientSumInsured + sumInsuredContract
	
- If clientSumInsured <= MaxSumInsuredClient then
- if ClientEligibilityResult.result is NULL, then set ClientEligibilityResult.result = PASSED
- else ClientEligibilityResult.result = FAILED; ResultDetail[.checkedItem = 'sumInsuredClient', .checkResult = INSR_SumInsuredClientExceeded]
	
- Return ClientEligibilityResult

## 🔗 Connections (1)

- ← Dependency: [[Check Insurance Eligibility based on client data]]

## 📊 Appears In (1 diagrams)

- Use Case: Insurance Program functions
