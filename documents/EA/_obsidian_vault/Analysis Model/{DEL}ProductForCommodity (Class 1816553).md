---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetProductsForCommodity"
domain: "Analysis Model"
element_id: 1816553
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}ProductForCommodity

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetProductsForCommodity

## 📝 Notes

{DEL LOR-8678/}
Information about Product available for financing of desired commodity.

## 🔗 Connections (3)

- ← Dependency: [[{DEL}InfoForCommodityType (Class 1816550)]]
- → Dependency: [[{DEL}ProductForCommodityTariffItem (Class 1816548)]]
- → Dependency: [[{DEL}ProductVariantForCommodity (Class 1816546)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS - GetProductsForCommodity

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| productType | string |  |
| currency | {DEL}Currency |  |
| manufacturer | string |  |
| productVariant | {DEL}ProductVariantForCommodity |  |
| tariffItem | {DEL}ProductForCommodityTariffItem |  |
