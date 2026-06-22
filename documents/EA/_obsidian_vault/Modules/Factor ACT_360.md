---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1814849
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Factor ACT_360

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

// Factor based on ACT/365 Fixed day count method.
Input:

	
- StartDate
	
- EndDate


Output:

	
- Factor


Factor = (EndDate - StartDate) / 360

## 🔗 Connections (1)

- ← Dependency: [[Interest factor ACT]]

## 📊 Appears In (1 diagrams)

- Custom: Interest Factor -  ACTUAL
