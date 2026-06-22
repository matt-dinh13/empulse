---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product"
domain: "Modules"
element_id: 1850273
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 ProductVariantDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product

## 🔗 Connections (3)

- → Dependency: [[RoundingTypeDto]]
- ← Dependency: [[{MOD}ProductDto]]
- ← Usage: [[Input (Class 1873252)]]

## 📊 Appears In (2 diagrams)

- Logical: ProductDto
- Logical: ProductInputDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| preference | int |  |
| minCreditAmount | int |  |
| maxCreditAmount | int |  |
| cashPaymentCalculationMethod | string |  |
| minCashPaymentAmount | int |  |
| maxCashPaymentAmount | int |  |
| minCashPaymentRate | int |  |
| maxCashPaymentRate | int |  |
| pricingCategoryFrom | int |  |
| pricingCategoryTo | int |  |
| currency | string |  |
| {MOD}annualInterestRate | int |  |
| terms | int |  |
| minInstallmentBase | string |  |
| minInstallmentRate | int |  |
| minInstallmentFixedAmount | int |  |
| minInstallmentRounding | RoundingTypeDto |  |
| minInstallmentRoundingScale | int |  |
| installmentPrescriptionMinLimit | int |  |
| statementPrintoutTemplate | string |  |
