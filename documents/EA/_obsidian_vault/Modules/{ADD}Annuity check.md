---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme"
domain: "Modules"
element_id: 1314780
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {ADD}Annuity check

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme

## 📝 Notes

{ADD PCG-707/}
Inputs:
- Annuity
- RoundingMethod, RoundingScale
- ProvidedCreditAmount
- Term
- GiftPaymentService - parameters of assigned GIFTP service

// Annuity checks
All following checks must be satisfied.
a) Annuity > 0
b) PCA >= (Annuity * Term)
c) Check if the first installment can cover interest calculated for the first period
- Calculate effective interest rate (EIR) from Term, PCA and Annuity using EIR calculation.
- Calculate principal amount of the first installment as Principal = Annuity / ( (1.0 + EIR) ^ (Terms - 1)). The Principal is rounded using RoundingMethod, RoundingScale. If RoundingMethod, RoundingScale are not defined on input then use
GlobalParameter.(AnnuityRoundingScale, AnnuityRoundingMethod).
- Calculate interest amount of the first installment as Interest = Annuity – Principal
- If Interest =< 0 or Principal <= 0 then the check is not successful.
d) Additive check for GIFTP service
If GiftPaymentService is defined on input and GiftPaymentService.CoveredByInterest = True then check if the annuity repayments after granting of gift payments would be sufficient to cover the total loan amount (principal):
- ReducedTerm = Term - GiftPaymentService.NumberOfGiftPayments
- Annuity * ReducedTerm >= PCA

## 🔗 Connections (3)

- → Dependency: [[EIR calculation]]
- ← Dependency: [[{MOD}Evaluate basic financial parameters of Product Offer]]
- ← Dependency: [[{MOD}Calculation of Financial Parameters of offer]]

## 📊 Appears In (2 diagrams)

- Custom: Calculation of financial parameters of offer
- Custom: Evaluation of Basic Financial Parameters of Product Offer
