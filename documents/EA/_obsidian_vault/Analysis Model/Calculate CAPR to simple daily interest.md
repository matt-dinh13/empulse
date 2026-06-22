---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules"
domain: "Analysis Model"
element_id: 1878877
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate CAPR to simple daily interest

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules

## 📝 Notes

Input:

	
- Compounded annual percentage rate (CAPR)
	
- Date
	
- Day count method


Output:

	
- Simple daily interest rate


Steps:

	
- System gets the DaysInMonth (number of days in month for reference date) with respect to chosen Day count method 
(eg. method ACT_365F -> fixed 28 for February, real number of days for other months
ACT_360, M30_360 -> fixed 30 days for each month
ACT_ACT -> real number of days)
	
- System computes Simple monthly interest rate as SMIR = ((1+CAPR)^(1/12))-1
i.e. calculates 12 compounding periods (12 months)
	
- System computes Simple daily interest rate as SMIR/DaysInMonth
	
- System returns the Simple daily interest rate

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
