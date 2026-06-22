---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation"
domain: "Modules"
element_id: 1311151
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Generate Installment Plan for RELIP offer (IS_ALG_AN_PRINC)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation

## 📝 Notes

// Generates Installment Plan for presentation of RELIP offer for Installment Plan Method = IS_ALG_AN_PRINC)
// Algorithm is derived from Generate installment schedule - Annuity principal.

Input:
- Offer RELIP Service Variant (OfferVariant)
- OfferInstallment
- FirstStartOfInterestPeriodDate 

Output:
- installments in Offer RELIP Service Variant Installment (OfferInstallment)

Definitions of values

	
- TransactionAmount = OfferVariant.TransactionAmount
	
- Term = OfferVariant.RELIPServiceVariantTerm.Term
	
- Annuity = OfferVariant.Annuity


	
- StartDate, EndDate - defines interest period
	
- i - number of installment from 1 to Term


	
- RoundingMethod, RoundingScale are defined generally for the system on program level (not in DB) the same way as for CELs


	
- RELIPServiceVariantTerm = OfferVariant.RELIP Service Variant Term


	
- DayCountMethod = OfferVariant.RELIPService.DayCountMethod


Steps:
Receivable = TransactionAmount rounded by RoundingMethod, RoundingScale
StartDate = FirstStartOfInterestPeriodDate

For each installment[i] in OfferInstallment where i = [1..Term] system calculates its attributes:

	
- EndDate = Installment[i].EndOfInterestPeriodDate


	
- Interest Amount:
InterestAmount = Receivable * (InterestCoefficient - 1) 
InterestCoefficient is calculated by Interest factor ACT with parameters:
- DayCountMethod
- StartDate
- EndDate 
- AIR - evaluate according to rule AIR for RELIP offer with parameters (RELIPServiceVariantTerm, i)
InterestAmount is rounded by RoundingMethod, RoundingScale.


	
- PrincipalAmount and the last Annuity amount:
If i = Term (i.e. the last installment) then
- PrincipalAmount = Receivable
- LastAnnuity = PrincipalAmount + InterestAmount
- Round LastAnnuity according to the rule Rounding with parameters of RELIPVariantTerm.RELIPService:
--- Installment Rounding Method
--- Installment Rounding Scale
- InterestAmount = InterestAmount + (LastAnnuity - PrincipalAmount - InterestAmount) -- compensation of rounding difference which is added to the last interest amount
else 
- PrincipalAmount = Annuity - InterestAmount
end


	
- FeeAmount:
FeeAmount = 0
	
- Receivable = Receivable - PrincipalAmount
StartDate = EndDate


Continue with the next installment.

System returns set of installments in OfferInstallment.

## 🔗 Connections (4)

- → Dependency: [[Generate installment schedule - Annuity principal]]
- → Dependency: [[Interest factor ACT]]
- → Dependency: [[AIR for RELIP offer]]
- ← Dependency: [[Generate Installment Plan for RELIP offer]]

## 📊 Appears In (1 diagrams)

- Custom: Calculation of RELIP offers for Initial Transaction
