---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Model mapper/Use Case"
domain: "Modules"
element_id: 1346975
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}CreateCommodityManufacturerDefinition - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Model mapper/Use Case

## 📝 Notes

{ADD PCG-1460/}
// Validation of CommodityManufacturerDefinition 
If any validation fails for attribute then add new record with
- resultCode (defined in brackets)
- description (if defined)
- commodityTypeCode
- manufacturerCode
- requestType  
into resultDefinitionCreate structure.

Validations:

	
- commodityTypeCode
Mandatory [MISSING_COMMODITY]
	
- manufacturerCode
Mandatory [MISSING_MANUFACTURER]
requestType
Mandatory [MISSING_REQUEST_TYPE]
	
- combination of commodityTypeCode + manufacturerCode
Must be unique in Commodity Data From Manufacturer (commodityDataFromManufacturerDefinition.activeFlag = 1) [NOT_UNIQUE]

## 🔗 Connections (1)

- ← Dependency: [[{DEL}08.801 Create Commodity Manufacturer Definition]]

## 📊 Appears In (1 diagrams)

- Use Case: Commodity Manufacturer Definition UC
