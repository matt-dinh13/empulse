---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model"
domain: "Modules"
element_id: 1705424
diagrams: 1
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Check Insurance Eligibility based on client data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model

## 📝 Notes

This rule presents group of insurance eligibility checks based on client's data

Input:

	
- InsuranceProgramCode
	
- InsuranceEligibilityCriteria (with related Eligible Commodity Type and Ineligible Profession)
	
- ReferenceDate (date for which some checks are performed, i.e. max client's age)


	
- BirthDate (optional)
	
- Gender (optional)
	
- Profession (optional)
	
- ContractSumInsured (optional)
	
- ClientSumInsured (optional)
	
- ignoreMissingValues (optional)


Output:

	
- ClientEligibilityResult.result (possible codes: PASSED/FAILED)
	
- ClientEligibilityResult.resultDetails in ResultDetail (checkedItem, checkResult) array (optional)


Steps:

	
- If ReferenceDate is NULL, set ReferenceDate = the current date
	
- If InsuranceEligibilityCriteria.Min Age is not NULL, then call  Check Minimum Client Age with BirthDate, ReferenceDate, MinimalAge = Eligibility Criteria.Min Age, ClientEligibilityResult and ignoreMissingValues as parameters
	
- If InsuranceEligibilityCriteria.Max Age Restriction Type = 'DO NOT INSURE' and (InsuranceEligibilityCriteria.Max Age Male or Max Age Female) is not NULL then call {ADD}Check Maximum client age with BirthDate, Gender, ReferenceDate, MaxFemaleAge = Eligibility Criteria.Max Age Female, MaxMaleAge = Eligibility Criteria.Max Age Male, ClientEligibilityResult and ignoreMissingValues as parameters
	
- If a record of InsuranceEligibilityCriteria.Ineligible Profession exists, then call {ADD}Check client profession eligibility with InsuranceEligibilityCriteria.Ineligible Profession, ClientEligibilityResult, Profession, ReferenceDate and ignoreMissingValues as parameters
	
- If InsuranceEligibilityCriteria.Max Sum Insured Contract is not NULL, then call {ADD}Check Max sum insured for contract with ContractSumInsured, InsuranceEligibilityCriteria.Max Sum Insured Contract, ignoreMissingValues and ClientEligibilityResult as parameters
	
- If InsuranceEligibilityCriteria.Max Sum Insured Client is not NULL, then call {ADD}Check Max sum insured for client with ClientSumInsured, ContractSumInsured, InsuranceProgramCode, InsuranceEligibilityCriteria.Max Sum Insured Client, ReferenceDate, and ClientEligibilityResult as parameters

## 🔗 Connections (6)

- → Dependency: [[Check client profession eligibility]]
- → Dependency: [[Check Max sum insured for client]]
- → Dependency: [[Check Maximum client age]]
- ← Dependency: [[11.124 Validate data eligibility for insurance (UseCase 1705435)]]
- → Dependency: [[Check Minimum Client Age]]
- → Dependency: [[Check Max sum insured for contract]]

## 📊 Appears In (1 diagrams)

- Use Case: Insurance Program functions
