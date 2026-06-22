---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/MTCACC"
domain: "Modules"
element_id: 1816872
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 {MOD}ServiceParametersMTCACC

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/MTCACC

## 📝 Notes

Specific for Service.ServiceType = MTCACC

## 🔗 Connections (4)

- → Dependency: [[{MOD}Base Type]]
- → Dependency: [[RoundingTypeDto]]
- → Dependency: [[Billing day calculation method]]
- ← Dependency: [[{MOD}ServiceTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: MTCACC Data
- Logical: Service Type Specific Extension

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountType | string |  |
| forInternalClient | boolean |  |
| installmentPrescriptionMinLimit | number |  |
| maxCreditAmount | number |  |
| minCreditAmount | number |  |
| minInstallmentBase | string |  |
| minInstallmentFixedAmount | number |  |
| minInstallmentRate | number |  |
| minInstallmentRounding | RoundingType |  |
| minInstallmentRoundingScale | number |  |
| billingDayCalculationMethod | string |  |
| dueDayOffset | number |  |
| fixedDueDay | number |  |
| accountLifespan | number |  |
| {ADD}accountingMethod | string |  |
