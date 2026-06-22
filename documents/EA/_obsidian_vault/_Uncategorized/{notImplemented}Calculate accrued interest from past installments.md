---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1623487
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 {notImplemented}Calculate accrued interest from past installments

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

{not implemented yet}
This algorithm calculates accrued interest form all installments with due date lower then the passed calculation date. 

Input:

	
- calculationDate
	
- Contract


Output:

	
- accruedInterest     ...FinancialAmount


Algorithm:

	
- System sets accruedInterest = 0.

	
- System finds all Contact->Installment[active = true AND dueDate < calculationDate]->InstallmentPart[where partType is in (I, IT)]. 
If no record is found, the algorithm returns accruedInterest and ends. 

	
- System sets accruedInterest = sum (InstallmentPart.amount) form all found InstallmentParts in the previous step.

	
- System rounds accruedInterest according to the rule Rounding (method = MATH, scale = 0.01). ...java.math.RoundingMode.HALF_UP

	
- Algorithm returns accruedInterest and ends.
