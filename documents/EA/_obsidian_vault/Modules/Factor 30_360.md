---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1814855
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Factor 30_360

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

// Factor based on M30_360 day count method.
Input:

	
- StartDate
	
- EndDate


Output:

	
- Factor


Calculate Days360(start_date; end_date) according Calculate number of days for 30/360 day count convention 

Factor = Days360  / 360

## 🔗 Connections (1)

- ← Dependency: [[Interest factor ACT]]

## 📊 Appears In (1 diagrams)

- Custom: Interest Factor -  ACTUAL
