---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation"
domain: "Modules"
element_id: 1311152
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Evaluate offer for RELIP Variant Term

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation

## 📝 Notes

// Calculates financial parameters of offers for subvariant of RELIP service variant

Input: 
- RELIPVariantTerm 
- TransactionAmount
- FirstBillingDate 
- InstallmentDueDayShift 
- FirstDueDate
- FirstStartOfInterestPeriodDate 
- FirstEndOfInterestPeriodDate 

Output:
Offer parameters in structures 
- Offer RELIP Service Variant (OfferVariant)
- Offer RELIP Service Variant Installment (OfferInstallment)

InstallmentPlanMethod = RELIPVariantTerm .RELIPService.InstallmentPlanMethod
If InstallmentScheduleMethod is not in (IS_ALG_EXTEND1, IS_ALG_AN_PRINC) then raise exception (not supported) and algorithm ends.

// Annuity
Calculate Annuity according to the rule Calculate Annuity for RELIP Variant Term with parameters
- RELIPVariantTerm 
- InstallmentPlanMethod
- InstallmentDueDayShift  
- TransactionAmount
- FirstBillingDate 
- FirstStartOfInterestPeriodDate 

Create OfferVariant and set
- OfferVariant.FirstDueDate = FirstDueDate from input
- OfferVariant.FirstEndOfInterestPeriodDate = FirstEndOfInterestPeriodDate from input
- OfferVariant.TransactionAmount= TransactionAmount from input
- OfferVariant.Annuity = Annuity

// Total Monthly Payment
Set OfferVariant.TotalMonthlyPayment = Annuity 

// Installment Plan 
Generate OfferInstallments according to algorithm Generate Installment Plan for RELIP offer with parameters
- OfferVariant
- InstallmentPlanMethod 
- FirstBillingDate 
- InstallmentDueDayShift
- FirstStartOfInterestPeriodDate 

// Presented interest rate
Save OfferVariant.PresentedInterestRate = AIR

// Total amounts
Save OfferVariant.TotalPrincipal = sum of OfferInstallments.RELIPOfferInstallment.PrincipalAmount 
Save OfferVariant.TotalInterest = sum of OfferInstallments.RELIPOfferInstallment.InterestAmount 
Save OfferVariant.TotalFee = sum of OfferInstallments.RELIPOfferInstallment.FeeAmount 
Save OfferVariant.TotalPaymentPerCredit = OfferVariant.(TotalPrincipal + TotalInterest + TotalFee)

## 🔗 Connections (3)

- → Dependency: [[Calculate Annuity for RELIP Variant Term]]
- ← Dependency: [[Calculate RELIP offers for Initial Transaction]]
- → Dependency: [[Generate Installment Plan for RELIP offer]]

## 📊 Appears In (1 diagrams)

- Custom: Calculation of RELIP offers for Initial Transaction
