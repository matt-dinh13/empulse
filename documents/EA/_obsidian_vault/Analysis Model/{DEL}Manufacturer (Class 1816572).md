---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCodeList"
domain: "Analysis Model"
element_id: 1816572
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}Manufacturer

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCodeList

## 📝 Notes

{DEL LOR-8678/}
This data type defines active manufacturers (see code list Manufacturer).

{ADD PCG-1394}If BL_USE_SALES_PACKAGE = FALSE then{/ADD} only such manufacturers are provided, which are available on Products assigned to Salesroom defined by GetCodeListRequest.SalesroomCode. 

{ADD PCG-1394}If BL_USE_SALES_PACKAGE = TRUE then only such manufacturers are provided, which are available on Products assigned to Sales Packages assigned to Salesroom defined by GetCodeListRequest.SalesroomCode. {/ADD}

## 🔗 Connections (2)

- → Dependency: [[Manufacturer (Class 1879136)]]
- ← Dependency: [[{DEL}GetCodeListResponse (Class 1816566)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS - GetCodeList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | {DEL}LocalizedString |  |
| sortOrder | Number |  |
