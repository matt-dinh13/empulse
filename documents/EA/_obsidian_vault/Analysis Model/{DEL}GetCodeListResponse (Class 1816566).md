---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCodeList"
domain: "Analysis Model"
element_id: 1816566
diagrams: 1
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}GetCodeListResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCodeList

## 📝 Notes

{DEL LOR-8678/}
This data type defines output of the method CustomerOfferWS.GetCodeList.

## 🔗 Connections (7)

- → Dependency: [[{DEL}Manufacturer (Class 1816572)]]
- → Dependency: [[{DEL}CommodityCategory (Class 1816567)]]
- → Dependency: [[{DEL}TickedClientDocumentType (Class 1816570)]]
- → Dependency: [[{DEL}Currency (Class 1816573)]]
- → Dependency: [[{DEL}CommodityType (Class 1816568)]]
- → Dependency: [[{DEL}ClientDocumentType (Class 1816564)]]
- ← Dependency: [[{DEL}CustomerOfferWS]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS - GetCodeList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| currency | Currency |  |
| clientDocumentType | {DEL}ClientDocumentType |  |
| tickedClientDocumentType | {DEL}TickedClientDocumentType |  |
| commodityType | {DEL}CommodityType |  |
| commodityCategory | {DEL}CommodityCategory |  |
| manufacturer | {DEL}Manufacturer |  |
