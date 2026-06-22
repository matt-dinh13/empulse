---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Business Rules"
domain: "Analysis Model"
element_id: 1836327
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Evaluate Period for Penalty limit

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Business Rules

## 📝 Notes

Input:
- contract
- penaltyLimitPeriodType

Output:
- startDate
- endDate

Steps:
If penaltyLimitPeriodType = YEAR_BY_CONTRACT_SIGNATURE:

	
- Evaluate contractSignDate (date of the last transition of contract to status Signed(N))
	
- Find the startDate where
- startDate.Day = contractSignDate.Day
- startDate.Month = contractSignDate.Month
- difference between startDate and current date is less then one year
	
- Set endDate = current date
	
- Return startDate, endDate

## 🔗 Connections (2)

- ← Dependency: [[Adjust penalty amount by limit]]
- ← Dependency: [[04.150 Charge Penalty Registered Over Limit (UseCase 1836318)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: Charging Penalty Over Limit
- Use Case: Fee services used by external system (Collection)
