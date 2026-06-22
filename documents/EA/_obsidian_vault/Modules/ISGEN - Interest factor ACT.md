---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1878907
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 ISGEN - Interest factor ACT

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model

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

## 🔗 Connections (4)

- ← Dependency: [[ISGEN - Generate installment schedule - Annuity principal]]
- ← Dependency: [[ISGEN - Generate installment schedule - Equal principal]]
- ← Dependency: [[ISGEN - Deferred interest calculation]]
- ← Dependency: [[ISGEN - Generate installment schedule - Equal annuity]]

## 📊 Appears In (1 diagrams)

- Use Case: ISGEN Generate installment schedule
