---
type: Class
stereotype: "XSDcomplexType"
package: ""
domain: "_Uncategorized"
element_id: 1816672
diagrams: 0
connections: 0
tags:
  - class
  - _uncategorized
---

# 🔷 {ADD}Manufacturer

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: N/A

## 📝 Notes

This data type defines active manufacturers (see code list Manufacturer).

{ADD PCG-1394}If BL_USE_SALES_PACKAGE = FALSE then{/ADD} only such manufacturers are provided, which are available on Products assigned to Salesroom defined by GetCodeListRequest.SalesroomCode. 

{ADD PCG-1394}If BL_USE_SALES_PACKAGE = TRUE then only such manufacturers are provided, which are available on Products assigned to Sales Packages assigned to Salesroom defined by GetCodeListRequest.SalesroomCode. {/ADD}

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | {ADD}LocalizedString |  |
| sortOrder | Number |  |
