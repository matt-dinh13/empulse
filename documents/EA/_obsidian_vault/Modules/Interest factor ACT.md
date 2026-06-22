---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1814847
diagrams: 8
connections: 14
tags:
  - requirement
  - modules
---

# 📋 Interest factor ACT

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

// Calculation of relative interest coefficient based on chosen ACTUAL day count method

Input:

	
- DayCountMethod
	
- StartOfInterestPeriodDate
	
- EndOfInterestPeriodDate
	
- AIR (annual interest rate)


Output:

	
- InterestFactor


If EndOfInterestPeriodDate < StartOfInterestPeriodDate then Factor = 0
If DayCountMethod = ACT_ACT then calculate Factor according to algorithm Factor ACT_ACT.
If DayCountMethod = ACT_365F then calculate Factor according to algorithm Factor ACT_365F.
If DayCountMethod = ACT_360 then calculate Factor according to algorithm Factor ACT_360.
If DayCountMethod = M30_360 then calculate Factor according to algorithm {ADD}Factor 30_360.


InterestFactor = 1 + Factor * AIR

## 🔗 Connections (14)

- ← Dependency: [[Generate Installment Plan for RELIP offer (IS_ALG_AN_PRINC)]]
- ← Dependency: [[Annuity factor ACT_365 for RELIP offer]]
- → Dependency: [[Factor 30_360]]
- ← Dependency: [[Deferred Interest calculation]]
- ← Dependency: [[Annuity calculation]]
- ← Dependency: [[Annuity factor ACT definition]]
- → Dependency: [[Factor ACT_360]]
- → Dependency: [[Factor ACT_365F]]
- → Dependency: [[{MOD}Factor ACT_ACT]]
- ← Dependency: [[New annuity calculation for 'Lower annuity' PER type]]
- ← Dependency: [[{MOD}Generate installment schedule - Equal principal]]
- ← Dependency: [[{ADD}Generate installment schedule - Equal Annuity algorithm]]
- ← Dependency: [[Generate installment schedule - Annuity principal]]
- ← Dependency: [[{ADD}Annuity without Insurance calculation]]

## 📊 Appears In (8 diagrams)

- Custom: Annuity calculations
- Custom: Calculation of RELIP offers for Initial Transaction
- Custom: Financial calculations without insurance
- Custom: Interest Factor -  ACTUAL
- Use Case: Generate installment schedule
- Use Case: ISG - Generate installment schedule
- Use Case: PER request creation - via GUI
- Use Case: PER request processing
