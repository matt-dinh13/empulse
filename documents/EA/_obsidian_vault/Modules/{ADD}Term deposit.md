---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1814853
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 {ADD}Term deposit

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

{ADD PCG-4625/}
This algorithm calculates interest for term deposit 
Used in Mobi

Inputs:
- AIR - Annual interest rate
- Terms - number of monthly payment
- BaseAmount
- DayCountMethod
- StartDate

Invariant:

	
- PPA - periods per annum, PPA = 12


Output:

	
- Interest


Steps:
Formula for interest calculation 
A = P*(1+r)^(tid/nod)
P - AnnuityBaseAmount
r - AIR
tid - time in days (between start date and end date)
nod - number of days in corresponding year

EndDate = StartDate + Terms
Year = StartDate.Year
Start = StartDate
End = minimum(EndDate, 31.12.Year)
Base = BaseAmount

For StartDate.Year to EndDate.Year
Loop 
  Calculate Factor by rule {MOD}Factor ACT_ACT with parameters Start and End
  Calculate annuity as
    Base = Base*(1+AIR)^Factor
  Year = Year + 1
  StartDate = 1.1.Year
  End = minimum(EndDate, 31.12.Year)
end loop

Interest =  Base - BaseAmount

Note: see linked document with example

## 📊 Appears In (1 diagrams)

- Custom: Annuity calculations
