---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Product and Service selection"
domain: "Modules"
element_id: 1835628
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 {DEL}Service determination

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Product and Service selection

## 📝 Notes

{DEL PCG-1816/}
//Replaced by NEW Service determination

This algorithm determines particular non-insurance services for a product. Note that this algorithm does not calculate any amounts (that is done in particular calculation algorithms).

Inputs:

	
- Product


	
- Salesroom


	
- SetOfLoanPreferences


Outputs:

	
- collection of non-insurance services selected for the Product


Steps:
System returns services which satisfy all following collections: 
 

	
- Service.ServiceType.Category is not 'Insurance'
	
- Service is valid at the date of calculation, i.e. current date is in interval Service.(ValidFrom, ValidTo)
	
- Service.VersionStatus = 'Active'
	
- Service is assigned to Product as Mandatory OR Required (see definition below)
	
- {ADD PCG-1210}Service passes rule Service Exclusivity Check with (Service, OtherServices) as parameters where OtherServices is set of services already evaluated as eligible for Product.{/ADD}
	
- {ADD PCG-1767}Service passes rule {ADD}Service qualification criteria check with imput parameters (Service, QualificationCriteria(code, value)).{/ADD}


Mandatory services:

	
- Product.ProductToServiceType.AdjustmentRule = 'Mandatory'


Required services:

	
- Product.ProductToServiceType.AdjustmentRule = 'Opt-in' or 'Opt-out'
	
- ServiceType.Preference = 'REQUIRED' in SetOfLoanPreferences


If the mandatory or required Service is NOT available on Salesroom according to the rule Check Service Availability on Salesroom then the Product is skipped.

## 🔗 Connections (4)

- → Dependency: [[Service Exclusivity Check]]
- → Dependency: [[Service qualification criteria check]]
- → Dependency: [[Check Service Availability on Salesroom]]
- ← Dependency: [[{MOD}Calculate product offer]]

## 📊 Appears In (1 diagrams)

- Custom: Product and Service selection
