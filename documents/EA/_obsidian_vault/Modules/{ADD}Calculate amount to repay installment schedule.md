---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Installment Schedule"
domain: "Modules"
element_id: 1878734
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 {ADD}Calculate amount to repay installment schedule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule

## 📝 Notes

{ADD CBL-18 IS}
Calculate value what is necessary to pay to repay whole contract in standard way(as is contract now).
Input:
installment schedule
Output:
amount


	
- Get all active installments(I)
	
- For every installment do:

2.2          get installment parts conected to installment
2.3          for every installment do:
2.3.1                 get ipAmount as INSTALLMENT_PART.AMOUNT - INSTALLMENT_PART.PAID_AMOUNT 
2.3.2                 add ipAmount to final amout
3.     Return calculated amount
{/ADD}

## 📊 Appears In (1 diagrams)

- Use Case: OVERVIEW - Installment Schedule
