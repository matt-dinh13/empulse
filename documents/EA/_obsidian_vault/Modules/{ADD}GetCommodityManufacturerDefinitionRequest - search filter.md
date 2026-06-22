---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Model mapper/Use Case"
domain: "Modules"
element_id: 1344714
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}GetCommodityManufacturerDefinitionRequest - search filter

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Model mapper/Use Case

## 📝 Notes

{ADD PCG-1460/}
// this algorithm finds Commodity manufacturer definition according to defined set of criteria

Input:
- Request.commodityManufacturerDefinitionCriterion 

Output:
- set of Commodity Data From Manufacturer (CDFM)

System transforms set of Request.commodityManufacturerDefinitionCriterion (criterion) to searching rules as follows:

	
- criterion.Type = COMMODITY_TYPE
If exists such criterion then system finds CDFM where CDFM.commodityTypeCode = criterion.value
	
- criterion.type = MANUFACTURER
If exists such criterion then system finds CDFM where CDFM.manufacturerCode = criterion.value
	
- criterion.type = REQUEST_TYPE
If exists such criterion then system finds CDFM where CDFM.requestType = criterion.value


System finds and returns CDFM which satisfy all the searching rules (only active records are taking into account).

## 🔗 Connections (1)

- ← Dependency: [[{DEL}08.803 Get Commodity Manufacturer Definition]]

## 📊 Appears In (1 diagrams)

- Use Case: Commodity Manufacturer Definition UC
