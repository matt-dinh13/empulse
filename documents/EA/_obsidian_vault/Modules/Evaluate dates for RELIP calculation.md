---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation"
domain: "Modules"
element_id: 1311145
diagrams: 2
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Evaluate dates for RELIP calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation

## 📝 Notes

// Calculates dates necessary for evaluation of offer for RELIP Variant Term 
Input:
- REL Product sub-variant
- RELIPService
- FixedDueDay (optional)

Output:
- FirstBillingDate 
- InstallmentDueDayShift 
- FirstDueDate
- FirstStartOfInterestPeriodDate 
- FirstEndOfInterestPeriodDate 

Set InstallmentDueDateShift = REL Product sub-variant.Product.InstallmentDueDateShift

calculate BillingDay using algorithm Billing day determination with parameter:
- Product to which the RELIPService is assigned
- FixedDueDay from input

FirstBillingDate is the first date following after current date where day of date = BillingDay.

Calculate FirstDueDate according to the rule Calculate Due Date for RELIP Variant with parameters:
- RELIPService
- FirstBillingDate 
- InstallmentDueDayShift

Calculate FirstStartOfInterestPeriodDate as DLP - 1 where DLP = Loan Providing Date from Financial parameters of product sub-variant

Calculate FirstEndOfInterestPeriodDate according to the rule Calculate End of Interest Period Date for RELIP Variant with parameters:
- RELIPService
- FirstDueDate

## 🔗 Connections (4)

- → Dependency: [[Calculate End of Interest Period Date for RELIP Variant]]
- → Dependency: [[Calculate Due Date for RELIP Variant]]
- ← Dependency: [[Calculate RELIP offers for Initial Transaction]]
- ← Dependency: [[{MOD}Offer recalculation]]

## 📊 Appears In (2 diagrams)

- Custom: Calculation of RELIP offers for Initial Transaction
- Custom: Offer recalculation
