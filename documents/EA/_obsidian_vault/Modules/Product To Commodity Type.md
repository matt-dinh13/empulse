---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Logical Data Model"
domain: "Modules"
element_id: 1879086
diagrams: 3
connections: 3
tags:
  - class
  - modules
---

# 🔷 Product To Commodity Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Logical Data Model

## 📝 Notes

Assignment of commodity type to product with possible definition of a model.

## 🔗 Connections (3)

- ← Dependency «mapping»: [[{DEL}ProductCommodityTypeDataDto]]
- → Aggregation: [[{MOD}Product]]
- → Association: [[Commodity Type (Class 1758904)]]

## 📊 Appears In (3 diagrams)

- Logical: Entities to be removed
- Logical: Product data synchronization mapping
- Logical: Product Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Model | string |  |
| Price from | Financial Amount |  |
| Price to | Financial Amount |  |
| Commodity type code | string |  |
| Model Code | string |  |
