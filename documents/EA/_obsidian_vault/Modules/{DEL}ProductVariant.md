---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/{DEL}Products"
domain: "Modules"
element_id: 1683278
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 {DEL}ProductVariant

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/{DEL}Products

## 📝 Notes

{DEL PCG-3311/}

## 🔗 Connections (2)

- ← Dependency: [[{DEL}Product]]
- ← Dependency: [[{DEL}ProductVariantsForUpdate]]

## 📊 Appears In (2 diagrams)

- Logical: {DEL}Products
- Logical: Product Catalog API in BSL

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| creditAmountMin | Money |  |
| creditAmountMax | Money |  |
| cashPaymentCalculationMethod | string |  |
| minCashPaymentFixedAmount | Money |  |
| minCashPaymentRate | string |  |
| maxCashPaymentFixedAmount | Money |  |
| maxCashPaymentRate | string |  |
| preference | string |  |
| pricingCategoryFrom | int |  |
| pricingCategoryTo | int |  |
| annualInterestRate | int |  |
| terms | string |  |
| minInstallmentBase | string |  |
| minInstallmentRate | string |  |
| minInstallmentFixedAmount | Money |  |
| minInstallmentRounding | string |  |
| minInstallmentRoundingScale | string |  |
| installmentPrescriptionMinLimit | Money |  |
| statementPrintoutTemplate | Money |  |
