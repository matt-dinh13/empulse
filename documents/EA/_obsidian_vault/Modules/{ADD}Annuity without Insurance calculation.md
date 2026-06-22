---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations"
domain: "Modules"
element_id: 1877742
diagrams: 3
connections: 6
tags:
  - requirement
  - modules
---

# 📋 {ADD}Annuity without Insurance calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations

## 📝 Notes

{ADD PCG-5652/}
For country: ID
Based on Annuity calculation 

// Calculation of annuity without insurance for CEL
Input parameters:
- AIR (interest rate)
- Term (number of terms)
- AnnuityBaseAmountWithoutInsurance
- InstallmentScheduleMethod
- DayCountMethod
- StartDate
- FirstDueDate
- RoundingMethod, RoundingScale (optional)

Output:
- AnnuityWithoutInsurance

Invariant: 
- GlobalParameter.AnnuityConstant 

Equal principal 
If InstallmentScheduleMethod in (IS_ALG_EQ_PRINC) then
// Only the first Annuity is calculated (following annuities are then different for each due date for this method)
Principal = AnnuityBaseAmountWithoutInsurance / Term
InterestRateCoefficient is calculated according to rule Interest factor ACT
with parameters:
- DayCountMethod
- StartDate
- FirstDueDate
- AIR
Interest = InterestRateCoefficient * AnnuityBaseAmountWithoutInsurance
AnnuityWithoutInsurance = Principal + Interest

Zero AIR
If InstallmentScheduleMethod in (IS_ALG_BASIC, IS_ALG_EXTEND1, IS_ALG_AN_PRINC, EQUAL_ANNUITY) and AIR = 0 then Annuity = AnnuityBaseAmountWithoutInsurance / Term.

Basic, Extended1
If InstallmentScheduleMethod in (IS_ALG_BASIC, IS_ALG_EXTEND1) and AIR > 0 then AnnuityFactor is calculated according to Annuity factor 30/360 definition with parameters:
- AIR
- TERM
AnnuityWithoutInsurance = AnnuityFactor * AnnuityBaseAmountWithoutInsurance

Annuity principal
If InstallmentScheduleMethod in (IS_ALG_AN_PRINC) and AIR > 0 then:

Calculate EndOfDeferredPeriod period by algorithm End of Deferred Period calculation with parameters:
- DLP = StartDate
- FirstDueDate

Calculate AnnuityFactor according to Annuity factor ACT definition with parameters:
- StartDate = EndOfDeferredPeriod
- FirstDueDate
- DayCountMethod
- AIR
- TERM
AnnuityWithoutInsurance = GlobalParameter.AnnuityConstant + AnnuityFactor * AnnuityBaseAmountWithoutInsurance

Equal annuity
If InstallmentScheduleMethod in (EQUAL_ANNUITY) and AIR > 0 then:
Calculate AnnuityWithoutInsurance according PMT formula with parameters:
- AIR
- Term
- AnnuityBaseAmountWithoutInsurance

Rounding
AnnuityWithoutInsurance is rounded according to rule Rounding with parameters:
- AnnuityWithoutInsurance
- RoundingMethod, RoundingScale
If RoundingMethod, RoundingScale are not defined on input then use
- GlobalParameter.AnnuityRoundingScale 
- GlobalParameter.AnnuityRoundingMethod

## 🔗 Connections (6)

- ← Dependency: [[{MOD}Standard (STND)]]
- → Dependency: [[End of Deferred Period calculation]]
- → Dependency: [[Interest factor ACT]]
- → Dependency: [[Annuity factor ACT definition]]
- → Dependency: [[{MOD}PMT formula]]
- → Dependency: [[Annuity factor 30_360 definition]]

## 📊 Appears In (3 diagrams)

- Custom: Financial calculations without insurance
- Custom: Offer Calculation algorithm - STANDARD
- Custom: PCG-5652 BRID-1756 - Additional Value in CustomerOffer REST API Responses
