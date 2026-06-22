---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation"
domain: "Modules"
element_id: 1311144
diagrams: 2
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Generate Installment Plan for RELIP offer

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation

## 📝 Notes

// Generates Installment Plan for presentation of RELIP offer 
// Data are saved in virtual structure (not saved in DB)

Input:
- Offer RELIP Service Variant (OfferVariant)
- InstallmentPlanMethod 
- FirstBillingDate 
- InstallmentDueDayShift
- FirstStartOfInterestPeriodDate 

Term = OfferVariant.RELIPServiceVariantTerm.Term
RELIPService = OfferVariant.RELIPServiceVariantTerm.RELIPServiceVariant.RELIPService  

System creates set of installments[i] in Offer RELIP Service Variant Installment (OfferInstallment) where i = [1..Term] with attributes:

	
- OfferInstallment[i].Number = i
	
- Calculate OfferInstallment[i].DueDate according to rule Calculate Due Date for RELIP Variant with parameters
- OfferVariant.RELIPService
- BillingDate
- InstallmentDueDayShift 
for i = 1 the BillingDate = FirstBillingDate; for each next installment the BillingDate is the previous BillingDate incremented by one month
	
- Calculate OfferInstallment[i].EndOfInterestPeriodDate according to rule Calculate End of Interest Period Date for RELIP Variant with parameters:
- OfferVariant.RELIPService
- DueDate = OfferInstallment[i].DueDate


If  InstallmentPlanMethod = IS_ALG_EXTEND1 then
- Execute algorithm Generate Installment Plan for RELIP offer (IS_ALG_EXTEND1) with parameters
--- Offer RELIP Service Variant (OfferVariant)
--- OfferInstallment
--- FirstStartOfInterestPeriodDate 

If  InstallmentPlanMethod = IS_ALG_AN_PRINC then
- Execute algorithm Generate Installment Plan for RELIP offer (IS_ALG_AN_PRINC) with parameters
--- Offer RELIP Service Variant (OfferVariant)
--- OfferInstallment
--- FirstStartOfInterestPeriodDate 

If InstallmentPlanMethod has another value then raise exception (not supported).

## 🔗 Connections (6)

- → Dependency: [[Generate Installment Plan for RELIP offer (IS_ALG_AN_PRINC)]]
- → Dependency: [[Generate Installment Plan for RELIP offer (IS_ALG_EXTEND1)]]
- → Dependency: [[Calculate Due Date for RELIP Variant]]
- → Dependency: [[Calculate End of Interest Period Date for RELIP Variant]]
- ← Dependency: [[Evaluate offer for RELIP Variant Term]]
- ← Dependency: [[{MOD}Offer recalculation]]

## 📊 Appears In (2 diagrams)

- Custom: Calculation of RELIP offers for Initial Transaction
- Custom: Offer recalculation
