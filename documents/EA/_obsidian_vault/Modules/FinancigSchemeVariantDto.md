---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Schemes"
domain: "Modules"
element_id: 1831436
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 FinancigSchemeVariantDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Schemes

## 🔗 Connections (4)

- → Dependency: [[Financing Scheme Variant Type]]
- → Dependency: [[Financing Scheme Variant Criterion Type]]
- ← Dependency: [[{MOD}FinancingSchemeDto]]
- ← Dependency: [[Input]]

## 📊 Appears In (1 diagrams)

- Logical: FinancingSchemeDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| number | integer |  |
| type | string |  |
| term | integer |  |
| initTerm | integer |  |
| air | integer |  |
| initAir | integer |  |
| pastDueAir | integer |  |
| pastDueInitAir | integer |  |
| totalMonthlyPayment | integer |  |
| numberOfGiftPayments | integer |  |
| maximalPricingCategory | integer |  |
| minimalPricingCategory | integer |  |
| giftPaymentsAir | integer |  |
