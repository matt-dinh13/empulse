---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/Provided Services/Interface Provided/ProvideProductDataWS/Product Data"
domain: "Modules"
element_id: 1860347
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 {DEL}ProductVariantDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/Provided Services/Interface Provided/ProvideProductDataWS/Product Data

## 📝 Notes

Variant of the Product

## 🔗 Connections (5)

- → Dependency: [[MoneyType (Class 1878205)]]
- → Dependency «mapping»: [[Product Variant (Class 1879099)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- ← Dependency: [[{DEL}ProductCommonDataDto]]
- → Association: [[{DEL}ProductVariantProductTypeDataDto]]

## 📊 Appears In (1 diagrams)

- Logical: Product data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| productVariantCode | string |  |
| creditAmountMin | MoneyType |  |
| creditAmountMax | MoneyType |  |
| cashPaymentCalculationMethod | string |  |
| minCashPaymentFixedAmount | MoneyType |  |
| minCashPaymentRate | percentage |  |
| maxCashPaymentFixedAmount | MoneyType |  |
| maxCashPaymentRate | percentage |  |
| preference | string |  |
| pricingCategoryFrom | integer |  |
| pricingCategoryTo | integer |  |
