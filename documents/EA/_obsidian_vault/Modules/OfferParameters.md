---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Calculator/Interface Consumed/Account Pricing API"
domain: "Modules"
element_id: 1633262
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 OfferParameters

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Consumed/Account Pricing API

## 🔗 Connections (4)

- ← Dependency: [[InstallmentPlanOffer]]
- → Dependency: [[Subvention]]
- → Dependency: [[Fee (Class 1633267)]]
- → Dependency: [[Installment (Class 1633264)]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Calculation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cashPayment | int |  |
| downPayment | int |  |
| netFinancedAmount | int |  |
| annuity | int |  |
| firstDueDate | date |  |
| annualInterestRate | int |  |
| initialAnnualInterestRate | int |  |
| initialTerm | int |  |
| annuityWithoutFees | int |  |
| providedFinancedAmount | int |  |
| totalPaymentPerCredit | int |  |
| totalPrincipal | int |  |
| totalInterest | int |  |
| totalFees | int |  |
| effectiveInterestRate | int |  |
| ipFees | fee |  |
| subventions | subvention |  |
| dayCountMethod | string |  |
| instalmentPlanGenerationMethod | string |  |
| ipInstallments | Installment |  |
| pastDueAnnualInterestRate | int |  |
| pastDueInitialAnnualInterestRate | int |  |
| term | int |  |
