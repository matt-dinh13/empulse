---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1708945
diagrams: 0
connections: 4
tags:
  - requirement
  - _uncategorized
---

# 📋 Cash payment calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Rule for calculation and synchronization of 
Maximal cash payment in Product Calculator form.
It is applied only if  ProductCalculatorParameters.CashPaymentCalculation = True.


	
- After the DownPaymentAmount is entered then value of DownPaymentPercentage is calculated as 
100 * DownPaymentAmount / Price,
rounded according to Rounding rule using (MATH, 1) as parameters and refreshed in the form.
	
- After the DownPaymentPercentage is entered then Value of DownPaymentAmount is calculated as 
DownPaymentPercentage * Price / 100,
rounded according to Rounding rule using (MATH, 1) as parameters and refreshed in the form.


System remembers what value of DownPaymentAmount or DownPaymentPercentage was entered as the last.

After the TotalPrice is changed then the values are recalculated according to formulas mentioned above:
- if DownPaymentAmount was entered as the last then DownPaymentPercentage is recalculated
- if DownPaymentPercentage was entered as the last then DownPaymentAmount is recalculated.

If both DownPaymentAmount and OriginationFee are filled in, system executes rule Maximal Cash Payment Entering with these conditions:


	
- After the DownPaymentAmount is entered then value of MaximalCashPaymentAmount is calculated as 
DownPaymentAmount + OriginationFee
	
- After the OriginationFee is entered then value of MaximalCashPaymentAmount is calculated as 
DownPaymentAmount + OriginationFee


System allows user to edit any calculated value.

## 🔗 Connections (4)

- ← Dependency: [[Down payment percentage]]
- ← Dependency: [[Down payment amount]]
- ← Dependency: [[Origination fee]]
- ← Dependency: [[Total price]]
