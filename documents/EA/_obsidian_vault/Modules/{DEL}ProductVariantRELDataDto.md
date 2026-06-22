---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/Provided Services/Interface Provided/ProvideProductDataWS/Product Data"
domain: "Modules"
element_id: 1860337
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 {DEL}ProductVariantRELDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/Provided Services/Interface Provided/ProvideProductDataWS/Product Data

## 📝 Notes

Specific Product Variant attributes for ProductType = REL

## 🔗 Connections (4)

- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «mapping»: [[Revolving Loan Product Variant]]
- ← Dependency: [[{DEL}ProductVariantProductTypeDataDto]]

## 📊 Appears In (1 diagrams)

- Logical: Product data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| minInstallmentBase | string |  |
| minInstallmentRate | decimal |  |
| minInstallmentFixedAmount | MoneyType |  |
| minInstallmentRounding | string |  |
| minInstallmentRoundingScale | decimal |  |
| installmentPrescriptionMinLimit | MoneyType |  |
| statementPrintoutTemplate | string |  |
