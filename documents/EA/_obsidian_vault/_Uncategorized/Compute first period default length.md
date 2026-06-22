---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1878743
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Compute first period default length

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This business rule determines the installment computation period by its end date (when the system cannot use the standard period start date to get the period length).

Input

	
- period end date


Output

	
- period start date



Steps

	
- system computes the period start date as following:
period start date = period end date - 1 month
	
- system returns the computed period start date
