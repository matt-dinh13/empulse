---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetProductsForCommodity"
domain: "Analysis Model"
element_id: 1816548
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}ProductForCommodityTariffItem

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetProductsForCommodity

## 📝 Notes

{DEL LOR-8678/}
Tariff Items defined as fixed amount from Tariff assigned to particular Product.

## 🔗 Connections (1)

- ← Dependency: [[{DEL}ProductForCommodity (Class 1816553)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS - GetProductsForCommodity

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| tariffItemType | string |  |
| fixedAmount | decimal |  |
