---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment to pay/Use case"
domain: "Analysis Model"
element_id: 1813844
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Installment to pay calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment to pay/Use case

## 📝 Notes

{ADD IS-2213}
Calculation of due date and amount for Calculate Installment to pay via REST API or for RMQ notification sent from  BSL after recalculation of installment schedule or coupling/decoupling incoming payment.

Input:
- Contract code
- Date

1. Find all active installments for given contract
2. Calculate decision date = date from input + global parameter NEXT_INST_DUE_DATE_OFFSET
    If date from input is null, than date = sysdate
3. Sum unpaid amount from active installments where due date <= decision date
4. If unpaid amount > global parameter BL_SMALL_UNDERPAYMENT find min due date and customer due dtae of installment where fully paid date with tolerance is null.
    Else if unpaid amount <= global parameter BL_SMALL_UNDERPAYMENT, get all future installments where due date > decision date and group them by due date. Then system take unpaid amount from nearest due date and sum total unpaid amount. and add it to previous unpaid amount till unpaid amount > BL_SMALL_UNDERPAYMENT. Use due date/customer due date once the amount is higher.
5. If the amount is still less then SU find first unpaid installment without tolerance and use due date / customer due date if none is found dates are null

## 🔗 Connections (1)

- ← Dependency: [[Calculate Installment to pay]]

## 📊 Appears In (1 diagrams)

- Use Case: Installment to pay
