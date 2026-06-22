---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Model mapper/Use Case"
domain: "Modules"
element_id: 1346976
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}GetCommodityManufacturerDefinition - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Model mapper/Use Case

## 📝 Notes

{ADD PCG-1460/}
// Validation of commodityManufacturerDefinitionCriterion 
If any validation fails for attribute then add new record with
- resultCode (defined in brackets)
- description (if defined)
into GetDefinitionResult  structure.

GetCommodityManufacturerDefinitionRequest 

	
- searchCriterion
At least one searchCriterion need to be specified [MISSING_CRITERION]
Each assigned commodityManufacturerDefinitionCriterion is checked by the rule below


commodityManufacturerDefinitionCriterion 

	
- type
Mandatory [MISSING_CRITERION_TYPE]
Code must exist in criterionType  [INVALID_CRITERION_TYPE]


	
- value
Mandatory [MISSING_CRITERION_VALUE]

## 🔗 Connections (1)

- ← Dependency: [[{DEL}08.803 Get Commodity Manufacturer Definition]]

## 📊 Appears In (1 diagrams)

- Use Case: Commodity Manufacturer Definition UC
