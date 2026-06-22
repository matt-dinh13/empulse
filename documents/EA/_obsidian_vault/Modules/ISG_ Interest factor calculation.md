---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Installment Schedule/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1303993
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 ISG: Interest factor calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule/Analytical Model/Use Case Model

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

InterestFactor = 1 + Factor * AIR

## 🔗 Connections (1)

- ← Dependency: [[ISG_ Generate installment schedule algorithm]]

## 📊 Appears In (1 diagrams)

- Use Case: ISG - Generate installment schedule
