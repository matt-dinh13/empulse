---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/Provided Services/Interface Provided/ProvideProductDataWS/Product Data"
domain: "Modules"
element_id: 1860335
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {DEL}ProductCommodityTypeDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/Provided Services/Interface Provided/ProvideProductDataWS/Product Data

## 📝 Notes

Commodity Type assigned to the Product

## 🔗 Connections (2)

- ← Dependency: [[{DEL}ProductCommonDataDto]]
- → Dependency «mapping»: [[Product To Commodity Type]]

## 📊 Appears In (1 diagrams)

- Logical: Product data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodityTypeCode | string |  |
| CommodityPriceFrom | MoneyType |  |
| CommodityPriceTo | MoneyType |  |
