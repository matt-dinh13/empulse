---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations"
domain: "Modules"
element_id: 1877741
diagrams: 3
connections: 4
tags:
  - requirement
  - modules
---

# 📋 {ADD}Monthly Payment Without Insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations

## 📝 Notes

{ADD PCG-5652/}
For country: ID
For loans with product type = CEL:
Monthly payment without insurance (MPWI) is defined as: MPWI = AnnuityWithoutInsurance + Sum(MonthlyFees) + Sum(ServiceFees paid in the installment as not part of annuity and without InsuranceServiceFees)


For MonthlyFees see Monthly fees amount definition.
For ServiceFees see Service fees amount definition.
For InsuranceServiceFees see Insurance service fees

## 🔗 Connections (4)

- ← Dependency: [[{MOD}Standard (STND)]]
- → Dependency: [[Monthly fees amount definition]]
- → Dependency: [[Service fees amount definition]]
- → Dependency: [[{ADD}Insurance service fees]]

## 📊 Appears In (3 diagrams)

- Custom: Financial calculations without insurance
- Custom: Offer Calculation algorithm - STANDARD
- Custom: PCG-5652 BRID-1756 - Additional Value in CustomerOffer REST API Responses
