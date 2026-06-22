---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1814859
diagrams: 5
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Annuity factor 30/360 definition

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

This algorithm calculates annuity factor.

Inputs:

	
- AIR - Annual interest rate (the value must be fractional number, e.g. 0.65 means 65%)


	
- TERM - number of monthly payments


Invariant:

	
- PPA - periods per annum, PPA = 12


Output:

	
- AF - Annuity factor


Steps:

	
- PPA_IR = (1+AIR)^(1/PPA) - 1
	
- X = 1/(1+PPA_IR)
	
- AF = PPA_IR/(1-X^TERM)

## 🔗 Connections (6)

- ← Dependency: [[Calculate Annuity for RELIP Variant Term]]
- ← Dependency: [[Annuity calculation]]
- ← Dependency: [[{DEL}Calculated flat rate and cash payment (CFR_CP)]]
- ← Dependency: [[{DEL}Fixed flat rate and fixed number of advance payments (FFR_AI)]]
- ← Dependency: [[{DEL}Calculated flat rate (CFR)]]
- ← Dependency: [[{ADD}Annuity without Insurance calculation]]

## 📊 Appears In (5 diagrams)

- Custom: Annuity calculations
- Custom: Calculation of RELIP offers for Initial Transaction
- Custom: Financial calculations without insurance
- Custom: Offer calculation algorithms - CFR, CFR_CP, FFR_AI
- Use Case: Contract supplement approval
