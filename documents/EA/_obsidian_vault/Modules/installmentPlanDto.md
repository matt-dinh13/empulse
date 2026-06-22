---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator"
domain: "Modules"
element_id: 1878417
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 installmentPlanDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator

## 🔗 Connections (2)

- ← Dependency: [[{MOD}OfferDto]]
- → Dependency: [[OfferInstallmentDto]]

## 📊 Appears In (1 diagrams)

- Logical: OfferDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| annualInterestRate | int |  |
| financingPackageCode | string |  |
| financingPackageVersion | int |  |
| financingSchemeCode | string |  |
| financingSchemeVariantNumber | int |  |
| financingSchemeVersion | int |  |
| initialTransactionInterestRate | int |  |
| installments | OfferInstallmentDto |  |
| preference | int |  |
| terms | int |  |
| totalMonthlyPayment | int |  |
| totalPaymentPerCredit | int |  |
