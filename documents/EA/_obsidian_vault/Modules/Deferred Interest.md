---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations"
domain: "Modules"
element_id: 1878858
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Deferred Interest

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations

## 📝 Notes

Calculation of Deferred interest (DI) base type

DI = Deferred Interest Amount / Number of installments
- Number of installments = Product.ProductVariant.Terms
- Deferred Interest Amount = Deferred Interest calculation with parameters
  -- DLP (date of loan providing) - if not defined then it is set to current date
  -- FirstDueDate - First due date + TopUpInstallmentsNumber (in months)
  -- Product.ProductProfile.DayCountMethod
  -- LoanAmount - Provided Credit Amount definition 
  -- Product.ProductVariant.InterestRate

## 🔗 Connections (1)

- → Dependency: [[Deferred Interest calculation]]

## 📊 Appears In (1 diagrams)

- Custom: Financial calculations
