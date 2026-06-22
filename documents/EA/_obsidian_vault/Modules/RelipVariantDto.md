---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator"
domain: "Modules"
element_id: 1878404
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 RelipVariantDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator

## 🔗 Connections (2)

- → Dependency: [[RelipVariantInstallmentDto]]
- ← Dependency: [[OfferServiceDto]]

## 📊 Appears In (1 diagrams)

- Logical: OfferDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| annuity | int |  |
| firstDueDate | string |  |
| firstInterestPeriodEndDate | string |  |
| installments | RelipVariantInstallmentDto |  |
| presentedInterestRate | int |  |
| terms | int |  |
| totalFee | int |  |
| totalInterest | int |  |
| totalMonthlyPayment | int |  |
| totalPaymentPerCredit | int |  |
| totalPrincipal | int |  |
| transactionAmount | int |  |
| variantNumber | int |  |
