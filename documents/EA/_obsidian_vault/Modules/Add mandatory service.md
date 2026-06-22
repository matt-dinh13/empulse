---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1835623
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Add mandatory service

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

The algorithm determine all mandatory services for the product offer.

Inputs:

	
- SetOfLoanPreferences


Output:

	
- Collection of services selected for the product


Steps:

	
- If product is without flag Exclude mandatory service on contract [EXCL_MAND_SERV_ON_CONTRACT code] than system finds all active, valid services flagged as Mandatory on contract (service.MandatoryOnContract = true and service.Active = true and current date is in interval service.validFrom , service.validTo).


	
- For each valid service type (List of allowed service types is limited by the rule Check compatibility of service type to product properties) assign service with Mandatory on contract flag unless there is already service of that type assigned

## 🔗 Connections (3)

- → Dependency: [[{MOD}Check compatibility of service type to product properties]]
- ← Dependency: [[{MOD}Offer recalculation]]
- ← Dependency: [[{MOD}Calculate product offer]]

## 📊 Appears In (3 diagrams)

- Custom: Calculate product offer
- Custom: Offer recalculation
- Custom: Product and Service selection
