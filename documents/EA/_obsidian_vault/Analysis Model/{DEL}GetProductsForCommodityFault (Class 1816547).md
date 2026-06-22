---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetProductsForCommodity"
domain: "Analysis Model"
element_id: 1816547
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}GetProductsForCommodityFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetProductsForCommodity

## 📝 Notes

{DEL LOR-8678/}
This data type defines output of the method CustomerOfferWS.GetProductsForCommodity in case of fault.

## 🔗 Connections (2)

- → Dependency: [[{DEL}GetProductsForCommodityResultCode (Enumeration 1816551)]]
- ← Dependency: [[{DEL}CustomerOfferWS]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS - GetProductsForCommodity

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | {DEL}GetProductsForCommodityResultCode |  |
| description | string |  |
