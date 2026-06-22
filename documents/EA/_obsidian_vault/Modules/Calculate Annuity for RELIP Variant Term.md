---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation"
domain: "Modules"
element_id: 1311153
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Calculate Annuity for RELIP Variant Term

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation

## 📝 Notes

// Calculates annuity for subvariant of RELIP service variant

Input: 
- RELIPServiceVariantTerm 
- InstallmentPlanMethod
- InstallmentDueDayShift  
- TransactionAmount
- FirstBillingDate 
- FirstStartOfInterestPeriodDate 

Output:
- Annuity

AIR = RELIPVariantTerm.AIR
Term = RELIPVariantTerm.Term
If AIR = 0 then Annuity = TransactionAmount / Term and continue in step :ROUNDING

If InstallmentPlanMethod = IS_ALG_EXTEND1:
Annuity factor is calculated according to Annuity factor 30/360 definition with parameters
- RELIPServiceVariantTerm.AIR
- RELIPServiceVariantTerm.Term

If InstallmentPlanMethod = IS_ALG_AN_PRINC:
Annuity factor is calculated according to 
Annuity factor ACT/365 for RELIP offer with parameters
- RELIPServiceVariantTerm
- StartDate = FirstStartOfInterestPeriodDate
- FirstBillingDate 
- InstallmentDueDayShift 

If InstallmentPlanMethod has another value then raise exception (not supported) and algorithm ends.

Annuity = Annuity factor * TransactionAmount

:ROUNDING
Round Annuity according to the rule Rounding with parameters of RELIPVariantTerm.RELIPService:
- Installment Rounding Method
- Installment Rounding Scale

Return Annuity.

## 🔗 Connections (3)

- → Dependency: [[Annuity factor 30_360 definition]]
- ← Dependency: [[Evaluate offer for RELIP Variant Term]]
- → Dependency: [[Annuity factor ACT_365 for RELIP offer]]

## 📊 Appears In (1 diagrams)

- Custom: Calculation of RELIP offers for Initial Transaction
