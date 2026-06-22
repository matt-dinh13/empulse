---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetProductsForCommodity"
domain: "Analysis Model"
element_id: 1816550
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}InfoForCommodityType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetProductsForCommodity

## 📝 Notes

{DEL LOR-8678/}
This data type defines response of the method CustomerOfferWS.GetProductsForCommodity in case of success.

## 🔗 Connections (2)

- ← Dependency: [[{DEL}GetProductsForCommodityResponse (Class 1816552)]]
- → Dependency: [[{DEL}ProductForCommodity (Class 1816553)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS - GetProductsForCommodity

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodityType | string |  |
| product | {DEL}ProductForCommodity |  |
