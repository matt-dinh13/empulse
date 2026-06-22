---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Model mapper/Use Case"
domain: "Modules"
element_id: 1346974
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}DeactivateCommodityManufacturerDefinition - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Model mapper/Use Case

## 📝 Notes

{ADD PCG-1460/}
// Validation of DeactivateCommodityManufacturerDefinition 
If any validation fails for attribute then add new record with
- resultCode (defined in brackets)
- description (if defined)
- commodityTypeCode
- manufacturerCode
- requestType  
into resultDefinitionDeactivate  structure.

Validations:

	
- commodityTypeCode
Mandatory [MISSING_COMMODITY]
	
- manufacturerCode
Mandatory [MISSING_MANUFACTURER]
	
- requestType
Mandatory [MISSING_REQUEST_TYPE]

## 🔗 Connections (1)

- ← Dependency: [[{DEL}08.802 Deactivate Commodity Manufacturer Definition]]

## 📊 Appears In (1 diagrams)

- Use Case: Commodity Manufacturer Definition UC
