---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Interface provided"
domain: "Modules"
element_id: 1728223
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 CommodityCategoryDto

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Interface provided

## 🔗 Connections (2)

- ← Dependency: [[SalesFeaturesDto]]
- → Dependency: [[{MOD}CommodityTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: SalesFeaturesDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| commodityTypes | {MOD}CommodityTypeDto |  |
| name | LocalizedString |  |
