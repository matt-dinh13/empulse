---
type: Class
stereotype: "XSDcomplexType"
package: ""
domain: "_Uncategorized"
element_id: 1816681
diagrams: 0
connections: 3
tags:
  - class
  - _uncategorized
---

# 🔷 ProductForCommodity

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: N/A

## 📝 Notes

Information about Product available for financing of desired commodity.

## 🔗 Connections (3)

- → Dependency: [[{MOD}ProductVariantForCommodity]]
- → Dependency: [[ProductForCommodityTariffItem]]
- ← Dependency: [[InfoForCommodityType]]

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| productType | string |  |
| currency | Currency |  |
| manufacturer | string |  |
| productVariant | {MOD}ProductVariantForCommodity |  |
| tariffItem | ProductForCommodityTariffItem |  |
