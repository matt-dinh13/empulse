---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters"
domain: "Modules"
element_id: 1878865
diagrams: 8
connections: 14
tags:
  - requirement
  - modules
---

# 📋 Total Monthly Payment definition

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters

## 📝 Notes

For loans with product type <> SAI or ProductType = SAI and Product.ProductFlag.SAI_WITH_INSTALLMENT_SCHEDULE = true:
Total monthly payment (TMP, also called as installment) is defined as: TMP = Annuity + Sum(MonthlyFees) + Sum(ServiceFees paid in the installment as not part of annuity)

For loans with product type = SAI and Product.ProductFlag.SAI_WITH_INSTALLMENT_SCHEDULE = false:
TMP is defined as: TMP = Sum(ServiceFees paid in the installment as not part of annuity)


For MonthlyFees see Monthly fees amount definition.
For ServiceFees see Service fees amount definition.

## 🔗 Connections (14)

- ← Dependency: [[{ADD}Generation of CEL Installment Plan]]
- ← Dependency: [[{MOD}Evaluate basic financial parameters of Product Offer]]
- ← Dependency: [[Evaluation of product sub-variant]]
- ← Dependency: [[{DEL}Calculated flat rate and cash payment (CFR_CP)]]
- ← Dependency: [[{MOD}Insurance (INSURANCE)]]
- ← Dependency: [[{DEL}Fixed flat rate and fixed number of advance payments (FFR_AI)]]
- ← Dependency: [[{MOD}Standard (STND)]]
- ← Dependency: [[{DEL}Calculated flat rate (CFR)]]
- ← Dependency: [[Offer Financial Parameter]]
- ← Dependency: [[{MOD}Offer recalculation]]
- → Dependency: [[Monthly fees amount definition]]
- → Dependency: [[Service fees amount definition]]
- ← Dependency: [[Total Payment Per Credit]]
- ← Dependency: [[{MOD}01.191 Process installment schedule generation after disbursement]]

## 📊 Appears In (8 diagrams)

- Custom: Evaluation of Basic Financial Parameters of Product Offer
- Custom: Evaluation of IP for Product Offer with Financing Scheme
- Custom: Financial calculations
- Custom: Offer Calculation algorithm - INSURANCE
- Custom: Offer Calculation algorithm - STANDARD
- Custom: Offer calculation algorithms - CFR, CFR_CP, FFR_AI
- Use Case: Determine installment schedule processing
- Use Case: Determine installment schedule processing
