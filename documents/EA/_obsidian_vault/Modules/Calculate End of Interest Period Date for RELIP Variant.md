---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation"
domain: "Modules"
element_id: 1311147
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Calculate End of Interest Period Date for RELIP Variant 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation

## 📝 Notes

// calculates End date of interest period for Installment plan for initial REL transaction

Input: 
- RELIPService
- DueDate
Output: 
- EndOfInterestPeriodDate

InterestPeriodMethod = RELIPService.InterestPeriodMethod 
If InterestPeriodMethod = ACCOUNT_DUE_DAY: 
EndOfInterestPeriodDate = DueDate - 1

If InterestPeriodMethod has another value then raise exception (not supported)

## 🔗 Connections (2)

- ← Dependency: [[Evaluate dates for RELIP calculation]]
- ← Dependency: [[Generate Installment Plan for RELIP offer]]

## 📊 Appears In (1 diagrams)

- Custom: Calculation of RELIP offers for Initial Transaction
