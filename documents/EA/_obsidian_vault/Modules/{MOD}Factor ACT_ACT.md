---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1814857
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {MOD}Factor ACT_ACT

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

// Factor based on ACT/ACT day count method.

Input:

	
- StartDate
	
- EndDate


Output:

	
- Factor


If Year(StartDate)<>Year(EndDate) then
// Interest period is in two years
// Factor of the Start Year
If (Modulo(Year(StartDate), 4)<>0 then StartYearLength = 365 else StartYearLength = 366
{DEL PCG-4206}StartYearEndDate = Date(Year(StartDate), 12, 31){/DEL}
{ADD PCG-4206}StartYearEndDate = Date(Year(EndtDate), 1, 1){/ADD}
FactorStart = (StartYearEndDate - StartDate) / StartYearLength
// Factor of the End Year
If (Modulo(Year(EndDate), 4)<>0 then EndYearLength = 365 else EndYearLength = 366
FactorEnd = (EndDate - StartYearEndDate) / EndYearLength
Factor = FactorStart  + FactorEnd

If Year(StartDate) = Year(EndDate) then
// Interest period is in one year
If (Modulo(Year(StartDate), 4)<>0 then YearLength = 365 else YearLength = 366
Factor = (EndDate - StartDate) / StartYearLength

## 🔗 Connections (1)

- ← Dependency: [[Interest factor ACT]]

## 📊 Appears In (1 diagrams)

- Custom: Interest Factor -  ACTUAL
