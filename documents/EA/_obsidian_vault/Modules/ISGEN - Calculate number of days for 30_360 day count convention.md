---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1878911
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 ISGEN - Calculate number of days for 30/360 day count convention

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model

## 📝 Notes

This function is determined to calculate the number of days between two dates based on a 360-day year (twelve 30-day months). The 30/360 day count convention is used in accounting systems to various calculations (e.g. accrued interests).

This function is used as:
Days360(start_date; end_date)
Inputs:

	
- start_date (D1.M1.Y1) - beginning of the period for calculation
	
- end_date (D2.M2.Y2) – end of period for calculation

Condition:

	
- start_date < end_date
	
- start_date as well as  end_date are mandatory and have to be in valid date format


Date adjustment rules:

	
- If start_date.day is 31, then change start_date to 30.
	
- If end_date.day is 31, then change end_date to 30.


Calculation:

	
- Days360 = 360 * (Y2 - Y1) + 30 * (M2 - M1) + (D2 - D1)


Example 1:

	
- start_date = 31.7.2013
	
- end_date = 31.8.2013

Function returns:

	
- Days360 = 360 * (2013 - 2013) + 30 * (8 - 7) + (30 - 30) = 30


Example 2:

	
- start_date = 25.12.2012
	
- end_date = 15.1.2013

Function returns:

	
- Days360 = 360 * (2013 - 2012) + 30 * (1 - 12) + (15 - 25) = 360 - 330 - 10 = 20

## 🔗 Connections (1)

- ← Dependency: [[ISGEN - Generate installment schedule - Extended]]

## 📊 Appears In (1 diagrams)

- Use Case: ISGEN Generate installment schedule
