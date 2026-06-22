---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1814851
diagrams: 16
connections: 20
tags:
  - requirement
  - modules
---

# 📋 Annuity calculation

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

// Calculation of annuity for CEL
Input parameters:
- AIR (interest rate)
- Term (number of terms)
- AnnuityBaseAmount (total principal)
- InstallmentScheduleMethod
- DayCountMethod
- StartDate
- FirstDueDate
- RoundingMethod, RoundingScale (optional)

Output:
- Annuity

Invariant: 
- GlobalParameter.AnnuityConstant 

Equal principal 
If InstallmentScheduleMethod in (IS_ALG_EQ_PRINC) then
// Only the first Annuity is calculated (following annuities are then different for each due date for this method)
Principal = AnnuityBaseAmount / Term
InterestRateCoefficient is calculated according to rule Interest factor ACT
with parameters:
- DayCountMethod
- StartDate
- FirstDueDate
- AIR
Interest = InterestRateCoefficient * AnnuityBaseAmount
Annuity = Principal + Interest

Zero AIR
If InstallmentScheduleMethod in (IS_ALG_BASIC, IS_ALG_EXTEND1, IS_ALG_AN_PRINC, EQUAL_ANNUITY) and AIR = 0 then Annuity = AnnuityBaseAmount / Term.

Basic, Extended1
If InstallmentScheduleMethod in (IS_ALG_BASIC, IS_ALG_EXTEND1) and AIR > 0 then AnnuityFactor is calculated according to Annuity factor 30/360 definition with parameters:
- AIR
- TERM
Annuity = AnnuityFactor * AnnuityBaseAmount

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
Annuity = GlobalParameter.AnnuityConstant + AnnuityFactor * AnnuityBaseAmount

Equal annuity
If InstallmentScheduleMethod in (EQUAL_ANNUITY) and AIR > 0 then:
Calculate annuity according PMT formula with parameters:
- AIR
- Term
- AnnuityBaseAmount

Rounding
Annuity is rounded according to rule Rounding with parameters:
- Annuity
- RoundingMethod, RoundingScale
If RoundingMethod, RoundingScale are not defined on input then use
- GlobalParameter.AnnuityRoundingScale 
- GlobalParameter.AnnuityRoundingMethod

## 🔗 Connections (20)

- ← Dependency: [[{MOD}08.060 Change Due Date]]
- ← Dependency: [[Restructuring offer recalculation]]
- ← Dependency: [[{MOD}Evaluate basic financial parameters of Product Offer]]
- → Dependency: [[Annuity factor ACT definition]]
- → Dependency: [[Annuity factor 30_360 definition]]
- → Dependency: [[{MOD}PMT formula]]
- → Dependency: [[Interest factor ACT]]
- → Dependency: [[End of Deferred Period calculation]]
- ← Dependency: [[{MOD}Calculate new installment amount on service termination]]
- ← Dependency: [[Prepare virtual IS to change due date]]
- ← Dependency: [[{MOD}08.210 Check and process Gift payment]]
- ← Dependency: [[{MOD}08.220 Check and process Grace period]]
- ← Dependency: [[{MOD}08.222 Calculate Grace period amount]]
- ← Dependency: [[New annuity calculation for 'Lower annuity' PER type]]
- ← Dependency: [[{DEL}Calculated flat rate and cash payment (CFR_CP)]]
- ← Dependency: [[{DEL}Fixed flat rate and fixed number of advance payments (FFR_AI)]]
- ← Dependency: [[{MOD}Standard (STND)]]
- ← Dependency: [[{DEL}Calculated flat rate (CFR)]]
- ← Dependency: [[{MOD}11.111 Cancel insurance contract manually]]
- ← Dependency: [[{MOD}01.191 Process installment schedule generation after disbursement]]

## 📊 Appears In (16 diagrams)

- Custom: Annuity calculations
- Custom: CBL-25867 (CSI-3602) Removal of fee after contract service termination
- Custom: CBL-9759 (CLM-3088) Loan restructuring offer calculation update
- Custom: Evaluation of Basic Financial Parameters of Product Offer
- Custom: Offer Calculation algorithm - STANDARD
- Custom: Offer calculation algorithms - CFR, CFR_CP, FFR_AI
- Logical: Various things
- Use Case: Calculation of early repayment amount under Grace period
- Use Case: Change Due Date processing
- Use Case: Contract supplement approval
- Use Case: Determine installment schedule processing
- Use Case: Determine installment schedule processing
- Use Case: Gift payment processing
- Use Case: Grace period processing
- Use Case: PER request creation - via GUI
- Use Case: PER request processing
