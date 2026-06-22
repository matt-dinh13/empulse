---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/Provided Services/Interface Provided/ProvideProductDataWS/Product Data"
domain: "Modules"
element_id: 1860343
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {DEL}SubventionData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/Provided Services/Interface Provided/ProvideProductDataWS/Product Data

## 📝 Notes

Subvention on product

## 🔗 Connections (2)

- → Dependency «mapping»: [[{MOD}Subvention (Class 1858806)]]
- ← Dependency: [[{DEL}ProductCommonDataDto]]

## 📊 Appears In (1 diagrams)

- Logical: Product data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | int |  |
| participant | string |  |
| commodityType | string |  |
| allocationToClient | percentage |  |
| discount | boolean |  |
| fixedAmount | MoneyType |  |
| percentage | percentage |  |
| percentageType | string |  |
| rounding | string |  |
| roundingScale | int |  |
