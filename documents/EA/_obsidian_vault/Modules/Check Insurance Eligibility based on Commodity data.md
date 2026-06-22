---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model"
domain: "Modules"
element_id: 1705420
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Check Insurance Eligibility based on Commodity data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model

## 📝 Notes

This rule presents group of insurance eligibility checks based on commodity data

Input:

	
- InsuranceEligibilityCriteria (with related Eligible Commodity Type and Ineligible Profession)
	
- DEC.commoditiesData (array)
	
- ignoreMissingValues
	
- ReferenceDate (optional)


Output:

	
- CommoditiesDataResults[] array


Steps:

	
- If ReferenceDate is NULL, set ReferenceDate = the current date
	
- For each CommodityData in DEC.commoditiesData, system
- calls {ADD}Check Commodity type data with Eligible Commodity Type, CommoditiesData, ignoreMissingValues and ReferenceDate as parameters
- add the returned CommodityDataResult into the CommoditiesDataResult[]
	
- If DataEligibilityCheck.commoditiesData is processed, system returns CommoditiesDataResults[]

## 🔗 Connections (2)

- ← Dependency: [[11.124 Validate data eligibility for insurance (UseCase 1705435)]]
- → Dependency: [[Check Commodity type data]]

## 📊 Appears In (1 diagrams)

- Use Case: Insurance Program functions
