---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case"
domain: "Modules"
element_id: 1746311
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}SearchCommodityDataRequest - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case

## 📝 Notes

{DEL PCG-3924/}
// Validation of Request for method SearchCommodityData of CommodityWS
// returned resultCode code is in bracket

ComplexType = SearchCriterium

	
- Criterium
Exists SearchCriteriumType where ComplexType.criterium = Criterium [INVALID_SEARCH_CRITERIUM]
Every ComplexType.criterium is unique [SEARCH_CRITERIUM_DUPLICITY]

## 🔗 Connections (1)

- ← Dependency: [[{DEL}01.696 Search commodity data from external systems]]

## 📊 Appears In (1 diagrams)

- Use Case: {DEL}Manage commodity data from external systems
