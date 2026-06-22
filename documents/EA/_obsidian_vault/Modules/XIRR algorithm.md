---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877787
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 XIRR algorithm

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

Algorithm for XIRR calculation (interest rate per year)
Input: 
- Cash flow (date, financial amount)
- IRGuess

Output: 
- Annual interest rate (percentage)

Iterative calculation of XIRR is described in linked file.
Additive conditions:

	
- Iterations are repeated until the difference between two subsequent results is less then 0.000001 (0.0001 %)
	
- Maximum number of iteration is 100, otherwise XIRR function returns Null.
	
- IRGuess is taken as the initial rate
	
- The result is rounded using MATH rounding method with scale  0.000001 (0.0001 %).

## 🔗 Connections (3)

- ← Dependency: [[XIREL Calculation]]
- ← Dependency: [[{MOD}08.210 Check and process Gift payment]]
- ← Dependency: [[Calculation of XIRR (XIRR)]]

## 📊 Appears In (3 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates
- Custom: XIREL calculation
- Use Case: Gift payment processing
