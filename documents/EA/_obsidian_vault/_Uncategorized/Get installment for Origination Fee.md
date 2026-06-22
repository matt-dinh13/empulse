---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1878733
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋  Get installment for Origination Fee

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

{ADD CBL-12130  IS-1221}
Find installment where the origination fee is charged (chargingPeriodicity = IN_FIRST_INSTALLMENT). 

Input: 
contractId 

Output: 
Installment

Find first installment from active, non-zero, standard installments ordered  by installment due date.
{/ADD CBL-12130  IS-1221}
