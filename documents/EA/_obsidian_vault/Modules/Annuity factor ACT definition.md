---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1814856
diagrams: 4
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Annuity factor ACT definition

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

This algorithm calculates annuity factor according to method for interest calculation Actualfor CELs, which means that each interest bearing period is calculated with respect to the real number of days and real length of the year. 

Inputs:
- StartDate
- FirstDueDate
- DayCountMethod
- AIR - Annual interest rate (the value must be fractional number, e.g. 0.65 means 65%)
- TERM - number of monthly payments

Invariant:

	
- PPA - periods per annum, PPA = 12


Output:

	
- AF - Annuity factor


Steps:

DueDay is the day of FirstDueDate (e.g. 20 in case FirstDueDate = 20.11.2014)

2. Create list of interest bearing periods according to structure defined in Annuity factor ACT schedule (each period is hereafter referenced as Period[i]) and calculate relative rate coefficient (relativeIRCoef) for each period as follows:
For i = 1 to TERM
loop

	
- -- Start date of period
If i = 1 then Period[1].startDate = StartDate
Else Period[i].startDate = Period[i - 1].endDate
	
- -- End date
If i = 1 then Period[1].endDate = FirstDueDate
Else Period[i].endDate = Last day in month of (Period[i].startDate) + DueDay
	
- Relative rate coefficient is calculated according to algorithm Interest factor ACT with parameters:
- DayCountMethod
- Period[i].startDate
- Period[i].endDate
- AIR
Result is saved into Period[i].relativeIRCoef

end loop

3. Calculate interest rate coefficient (IRCoef) for each period as follows:
--last IRCoef is set to 1 and the previous coeffs are calculated in descending order
Period[TERM].IRCoef = 1 
For i = TERM - 1 to 1 step -1
loop

	
- Period[i].IRCoef = Period[i+1].IRCoef * Period[i+1].relativeIRCoef

end loop

SumIRCoef = Sum (Period[i].IRCoef) where i = 1..TERM

AnnuityFactor = Period[1].IRCoef * Period[1].relativeIRCoef / SumIRCoef
(no rounding)

## 🔗 Connections (4)

- → Dependency: [[Annuity factor ACT schedule]]
- ← Dependency: [[Annuity calculation]]
- → Dependency: [[Interest factor ACT]]
- ← Dependency: [[{ADD}Annuity without Insurance calculation]]

## 📊 Appears In (4 diagrams)

- Custom: Annuity calculations
- Custom: Financial calculations without insurance
- Use Case: Contract supplement approval
- Use Case: ISG - Generate installment schedule
