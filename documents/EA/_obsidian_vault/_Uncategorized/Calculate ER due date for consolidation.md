---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1807834
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Calculate ER due date for consolidation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Requirement is used for calculation of consolidation full early repayment date. The way of how this date will be calculated is set on consolidation service: parameter TBD

Input parameters:
contract
requestDate - date of fer request
installments- listo of active installments for contract
calculationMethod - method for calclulation of consolidation FER
contractSingDate

Output parameters:
resultDate - date to which will be early repayment calculated

STEPS:

	
- Get calculation method and choose one of the cases by its value:

1.1  If calculationMethod = REDUCED_FROM_PREV_INST (interest and fee are calculated from previous installment to request date) than resultDate = requestDate
1.2  If calculationMethod = REGULAR_FROM_PREV_INST (interest and fee are calculated for previous installment) than 
            Get installment from installments where InstallmentType.STANDARD && installment.DueDate <= requestDate and set resultDate = installment.DueDate
1.3  If calculationMethod = REGULAR_FROM_NEXT_INST (interest and fee are calculated for next installment) than
            Get installment from installments where InstallmentType.STANDARD && installment.DueDate >= requestDate and set resultDate = installment.DueDate
2.   Return resultDate
