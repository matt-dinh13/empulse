---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme"
domain: "Modules"
element_id: 1878839
diagrams: 4
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Cash Payment on Product

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme

## 📝 Notes

Input parameters:
- CalculationMethod
- Amount
- Rate
- Base
Output:
- CashPayment

If CalculationMethod = 'P' and Rate is defined then
  CashPayment = Base * Rate
If CalculationMethod = 'F' and Amount is defined then
  CashPayment = Amount
otherwise
  CashPayment is not defined

## 🔗 Connections (5)

- ← Dependency: [[{DEL}Evaluate Initial Payment Limits for Product Variant]]
- ← Dependency: [[{MOD}Calculation of Financial Parameters of offer]]
- ← Dependency: [[{DEL}Calculated flat rate and cash payment (CFR_CP)]]
- ← Dependency: [[{DEL}Fixed flat rate and fixed number of advance payments (FFR_AI)]]
- ← Dependency: [[{DEL}Calculated flat rate (CFR)]]

## 📊 Appears In (4 diagrams)

- Custom: Calculation of financial parameters of offer
- Custom: Evaluation of Products based on Financing Scheme
- Custom: Financial calculations
- Custom: Offer calculation algorithms - CFR, CFR_CP, FFR_AI
