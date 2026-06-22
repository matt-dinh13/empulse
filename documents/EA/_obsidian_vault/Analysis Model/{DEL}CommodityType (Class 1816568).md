---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCodeList"
domain: "Analysis Model"
element_id: 1816568
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}CommodityType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCodeList

## 📝 Notes

{DEL LOR-8678/}
This data type defines active commodity types (see code list Commodity Type) available on Salesroom defined by GetCodeListRequest.SalesroomCode according to rule Available commodity types for salesroom.

## 🔗 Connections (2)

- → Dependency: [[Commodity Type (Class 1758904)]]
- ← Dependency: [[{DEL}GetCodeListResponse (Class 1816566)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS - GetCodeList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | {DEL}LocalizedString |  |
| sortOrder | Number |  |
| categoryCode | string |  |
