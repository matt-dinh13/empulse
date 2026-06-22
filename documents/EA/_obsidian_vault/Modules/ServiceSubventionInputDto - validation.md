---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Validation Rules"
domain: "Modules"
element_id: 1877273
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 ServiceSubventionInputDto - validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Validation Rules

## 📝 Notes

ServiceSubventionInputDto

Only if globalParameter.UseServiceSubvention (BL_USE_SERVICE_SUBVENTION) = TRUE Subventions tab is displayed in GUI
 

	
- fixedAmount


	
- currency
must exists in Currency


	
- percentageType
must fulfill Search for Allowed Base Types by Usage for usage 'SUPC'
	
- percentage
	
- roundingType
Must exists in RoundingTypeDto
	
- roundingScale
	
- percentagetype, percentage, roundingType, roundingScale
must be filled all together or none
	
- toClientPercentage
Subvention.AllocationToClient = null [VAL_VALUE_MUST_BE_EMPTY]

## 🔗 Connections (1)

- ← Dependency: [[Service - validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
