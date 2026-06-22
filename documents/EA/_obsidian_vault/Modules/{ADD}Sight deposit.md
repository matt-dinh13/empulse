---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1814854
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 {ADD}Sight deposit

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

{ADD PCG-4625/}
This algorithm calculates interest for sight deposit
used in Mobi

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
P - BaseAmount
r - AIR
tid - time in days (between start date and end date)
nod - number of days in corresponding year

EOM - end date of the month (28,29,30,31)
Start = StartDate
End = EOM of Start
Base = AnnuityBaseAmount
Part = Base / Term

For i=1 to Term
Loop
  Calculate Factor by rule {MOD}Factor ACT_ACT with parameters Start and End
  Interest[i] = (Base * (1+AIR)^Factor) - Base
  Base = Base + Interest[i] - Part
  Start = first day of next month from Start
  End = EOM of Start
end loop

Interest = Sum (Interest[i]) where i = 1..TERM

Note: see linked document with example

## 📊 Appears In (1 diagrams)

- Custom: Annuity calculations
