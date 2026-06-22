---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Use Case Model"
domain: "Analysis Model"
element_id: 1878732
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Day count ratio calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Use Case Model

## 📝 Notes

{ADD CBL-4815 PAYM-1787 /}

// Calculation of ratio of number of days in a single installment and number of days in respective month(s)/year(s) based on chosen ACTUAL day count method

Input:

	
- DayCountMethod
	
- StartDate
	
- EndDate
	
- AIR (annual interest rate)


Output:

	
- DayCountRatio


Steps:
1. If month of StartDate and month of EndDate are different then system divides a date range based on months and creates a triplet [startDay, endDay, daysInMonth] for each month {ADD IS-2043} (include first day of period and exclude last day of period) {/ADD} else system creates just one triplet. If DayCountMethod = ACT/365F then system considers every February 28-day-long.
// For example if DayCountMethod = ACT/ACT, StartDate = 30.1.2016 and EndDate = 4.3.2016 then create three triplets: [30, 31, 31], [1, 29, 29], [1, 4, 31]
//For example if DayCountMethod = ACT/365F, StartDate = 30.1.2016 and EndDate = 4.3.2016 then create three triplets: [30, 31, 31], [1, 28, 28], [1, 4, 31]
2. If DayCountMethod = 30/360 then system modifies all created triplets:
- if endDay = daysInMonth then set endDay = 30
- set daysInMonth = 30
3. If DayCountMethod = ACT/360 then for all created triplets system sets daysInMonth = 30.
4. System calculates DayCountRatio = sum of ((endDay - startDay + 1) / daysInMonth) for all triplets.
//For example if triplets are [30, 31, 31], [1, 28, 28], [1, 4, 31] then DayCountRatio = (31-30+1)/31 + (28-1+1)/28 + (4-1+1)/31 = 2/31 + 28/28 + 4/31 = 1,19354...
5. System returns DayCountRatio.

## 🔗 Connections (1)

- ← Dependency: [[{ADD}Interest rate recalculation]]

## 📊 Appears In (1 diagrams)

- Use Case: Generate installment schedule
