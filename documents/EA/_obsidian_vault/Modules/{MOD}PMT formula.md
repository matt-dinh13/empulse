---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1814850
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}PMT formula

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

This algorithm calculates annuity  the same way as PMT excel function

Inputs:
- AIR - Annual interest rate
- Terms - number of monthly payment
- AnnuityBaseAmount

Invariant:

	
- PPA - periods per annum, PPA = 12


Output:

	
- Annuity


Steps:
APR = AIR/PPA
P - AnnuityBaseAmount
n - Terms
r = AIR/PPA

Annuity = P * r * (1 + r)^n / ((1 + r)^n - 1)

Rounding
Annuity is rounded according to rule Rounding with parameters:
- Annuity
- RoundingMethod = MATH
- RoundingScale = 0

{ADD PCG-4642}
for mobi bank calculation specification see attached document 
{/ADD}

## 🔗 Connections (2)

- ← Dependency: [[Annuity calculation]]
- ← Dependency: [[{ADD}Annuity without Insurance calculation]]

## 📊 Appears In (2 diagrams)

- Custom: Annuity calculations
- Custom: Financial calculations without insurance
