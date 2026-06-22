---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation"
domain: "Modules"
element_id: 1311146
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Generate Installment Plan for RELIP offer (IS_ALG_EXTEND1)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation

## 📝 Notes

// Generates Installment Plan for presentation of RELIP offer for Installment Plan Method = IS_ALG_EXTEND1)
// Algorithm is derived from Generate installment schedule - Extended1 algorithm.

Input:
- Offer RELIP Service Variant (OfferVariant)
- OfferInstallment
- FirstStartOfInterestPeriodDate 

Output:
- installments in Offer RELIP Service Variant Installment (OfferInstallment)

Definitions of values

	
- TransactionAmount = OfferVariant.TransactionAmount
	
- Term = OfferVariant.RELIPServiceVariantTerm.Term


	
- FirstEndOfInterestPeriodDate = OfferVariant.FirstEndOfInterestPeriodDate 


	
- Annuity = OfferVariant.Annuity
	
- AIR = OfferVariant.RELIPServiceVariantTerm.AIR


	
- StartDate, EndDate - defines interest period
	
- i - number of installment from 1 to Term
	
- RoundingMethod, RoundingScale are defined generally for the system on program level (not in DB) the same way as for CELs


Steps:
Receivable = TransactionAmount rounded by RoundingMethod, RoundingScale
StartDate = FirstStartOfInterestPeriodDate
InterestCalculatedSum = 0
InterestChargedSum = 0

// Calculation of internal rate of return (IRR) from fictitious cash flow, which simulates different length of the first installment period
If AIR = 0 then IRR = 0 
else 
calculate IRR according to rule Internal Rate of Return calculation with parameter FictitiousCashFlow is defined as follows:

	
- FirstPeriodDays = Days360(FirstStartOfInterestPeriodDate, FirstEndOfInterestPeriodDate)
For calculation Days360 see Calculate number of days for 30/360 day count convention.
	
- FictitiousProvidedLoan = Receivable * FirstPeriodDays/30
	
- FirstFictitiousPayment = Receivable - FictitiousProvidedLoan - Annuity
	
- FictitiousCashFlow is array of values as follow: (0 = FictitiousProvidedLoan, 1 =  FirstFictitiousPayment, 2 = - Annuity, 3 = - Annuity, …, N = - Annuity; where N = Term)


// Calculation of installment amounts except for the last installment
For each Installment [i] in OfferInstallment where i = [1..(Term-1)] system calculates its attributes:

	
- EndDate = Installment[i].EndOfInterestPeriodDate


	
- Interest Amount:
If IRR = 0 then set InterestAmount = 0 and continue with calculation of PrincipalAmount.
InterestAmount = Receivable * IIR * Days360(StartDate, EndDate)/30
InterestAmount is rounded by RoundingMethod, RoundingScale.
// If the first interest amount is greater than annuity (due to longer period) the calculated interest amount over annuity is charged later
InterestCalculatedSum = InterestCalculatedSum + InterestAmount
InterestAmount = MIN (Annuity, InterestCalculatedSum - InterestChargedSum)
InterestChargedSum = InterestChargedSum + InterestAmount
	
- PrincipalAmount:
PrincipalAmount = Annuity - InterestAmount
	
- FeeAmount:
FeeAmount = 0
	
- Receivable = Receivable - PrincipalAmount
StartDate = EndDate

Continue with the next installment.

// Calculation of installment amounts for the last installment
Installment[Term].PrincipalAmount = TransactionAmount - sum(Installment[1..(Term-1)].PrincipalAmount)
If IRR = 0 then 
- Installment[Term].InterestAmount = 0 
else
- Installment[Term].InterestAmount = Annuity - Installment[Term].PrincipalAmount

System returns set of installments in OfferInstallment.

## 🔗 Connections (1)

- ← Dependency: [[Generate Installment Plan for RELIP offer]]

## 📊 Appears In (1 diagrams)

- Custom: Calculation of RELIP offers for Initial Transaction
