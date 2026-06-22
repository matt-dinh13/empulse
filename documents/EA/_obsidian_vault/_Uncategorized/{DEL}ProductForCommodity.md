---
type: Class
stereotype: "XSDcomplexType"
package: ""
domain: "_Uncategorized"
element_id: 1815109
diagrams: 0
connections: 3
tags:
  - class
  - _uncategorized
---

# 🔷 {DEL}ProductForCommodity

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: N/A

## 📝 Notes

{DEL LOR-8678/}
Information about Product available for financing of desired commodity.

## 🔗 Connections (3)

- → Dependency: [[{DEL}ProductVariantForCommodity]]
- → Dependency: [[{DEL}ProductForCommodityTariffItem]]
- ← Dependency: [[{DEL}InfoForCommodityType]]

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| productType | string |  |
| currency | Currency |  |
| manufacturer | string |  |
| productVariant | {DEL}ProductVariantForCommodity |  |
| tariffItem | {DEL}ProductForCommodityTariffItem |  |
