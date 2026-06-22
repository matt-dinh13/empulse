---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1708937
diagrams: 0
connections: 4
tags:
  - requirement
  - _uncategorized
---

# 📋 Maximal Cash Payment Entering

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Rule for calculation and synchronization of Maximal Cash Payment in Product Calculator form.
It is applied only if  ProductCalculatorParameters.MaxCashPaymentPercentage = True.
 

	
- After the MaximalCashPaymentAmount is entered then value of MaximalCashPaymentPercentage is calculated as 
100 * MaximalCashPaymentAmount / Price,
rounded according to Rounding rule using (MATH, 1) as parameters and refreshed in the form.
	
- After the MaximalCashPaymentPercentage is entered then Value of MaximalCashPaymentAmount is calculated as 
MaximalCashPaymentPercentage * Price / 100,
rounded according to Rounding rule using ProductCalculatorParameters.(MaxCashPaymentRounding, MaxCashPaymentRoundingScale) as parameters and refreshed in the form.


System remembers what value of MaximalCashPaymentAmount or MaximalCashPaymentPercentage was entered as the last.
 

	
- After the TotalPrice is changed then the values are recalculated according to formulas mentioned above:
- if MaximalCashPaymentAmount  was entered as the last then MaximalCashPaymentPercentage is recalculated
- if MaximalCashPaymentPercentage  was entered as the last then MaximalCashPaymentAmount is recalculated.

## 🔗 Connections (4)

- → Dependency: [[Rounding (Requirement 1166384)]]
- ← Dependency: [[Maximal cash payment amount]]
- ← Dependency: [[Maximal cash payment percentage]]
- ← Dependency: [[Total price]]
