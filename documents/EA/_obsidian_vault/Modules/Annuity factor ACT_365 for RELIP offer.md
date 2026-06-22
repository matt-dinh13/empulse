---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation"
domain: "Modules"
element_id: 1311148
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Annuity factor ACT/365 for RELIP offer

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation

## 📝 Notes

This algorithm calculates annuity factor according to method for interest calculation Actual365 for RELs, which means that each interest bearing period is calculates with respect to the real number of days and real length of the year. 

Inputs:
- RELIPServiceVariantTerm
- StartDate
- BillingDate
- InstallmentDueDayShift 

Output:

	
- AF - Annuity factor


Steps:

DayCountMethod = RELIPServiceVariantTerm.RELIPServiceVariant.RELIPService.DayCountMethod

1. Create list of interest bearing periods according to structure defined in Annuity factor ACT/365 schedule (each period is hereafter referenced as Period[i]) and calculate relative rate coefficient (relativeIRCoef) for each period as follows:
For i = 1 to TERM
loop

	
- -- Start date of period
If i = 1 then Period[1].startDate = StartDate
Else Period[i].startDate = Period[i - 1].endDate


	
- -- Due date
Calculate DueDate according to rule Calculate Due Date for RELIP Variant with parameters
- RELIPServiceVariant.RELIPService
- BillingDate
- InstallmentDueDayShift 
for i = 1 the BillingDate = FirstBillingDate; for each next installment the BillingDate is the previous BillingDate incremented by one month
	
- -- End date of period
Calculate Period[i].endDate according to rule Calculate End of Interest Period Date for RELIP Variant with parameters:
- RELIPService
- DueDate


	
- Relative rate coefficient is calculated according to algorithm Interest factor ACT with parameters:
- DayCountMethod
- Period[i].startDate
- Period[i].endDate
- AIR - evaluate according to rule AIR for RELIP offer with parameters (RELIPServiceVariantTerm, i)
Result is saved into Period[i].relativeIRCoef

end loop

2. Calculate interest rate coefficient (IRCoef) for each period as follows:
--last IRCoef is set to 1 and the previous coeffs are calculated in descending order
Period[TERM].IRCoef = 1 
For i = TERM - 1 to 1 step -1
loop

	
- Period[i].IRCoef = Period[i+1].IRCoef * Period[i+1].relativeIRCoef

end loop

SumIRCoef = Sum (Period[i].IRCoef) where i = 1..TERM

AnnuityFactor = Period[1].IRCoef * Period[1].relativeIRCoef / SumIRCoef
(no rounding)

## 🔗 Connections (3)

- → Dependency: [[Interest factor ACT]]
- ← Dependency: [[Calculate Annuity for RELIP Variant Term]]
- → Dependency: [[AIR for RELIP offer]]

## 📊 Appears In (1 diagrams)

- Custom: Calculation of RELIP offers for Initial Transaction
