---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877823
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 R365_Y algorithm

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

Algorithm for R365_Y calculation (interest rate per year)
Input: 
- CreditAmount
- LoanProvidingDate
- RepaymentCashFlow (Due Date, Annuity Amount)
- IRGuess (daily IR)

Output: 
- Annual interest rate (percentage)

Iterative calculation of R365_Y is described in linked file.
Additive conditions:

	
- Iterations are repeated until the difference between two subsequent results is less then 0.000001 (0.0001 %)
	
- Maximum number of iteration is 100, otherwise XIRR function returns Null.
	
- IRGuess is taken as the initial rate
	
- The result is rounded using MATH rounding method with scale  0.000001 (0.0001 %).

## 🔗 Connections (1)

- ← Dependency: [[Calculation of interest rate derived from ACT_365 per year (R365_Y)]]

## 📊 Appears In (1 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates
