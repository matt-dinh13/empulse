---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877466
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Count of overdue installments calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

System finds all unpaid overdue installments (INSTALLMENT.DUE_DATE < current date and at least one INSTALLMENT_PART.AMOUNT <> INSTALLMENT_PART.AMOUNT_PAID) in accordance to value of the debt tolerance (PARAM_DEBT_TOLERANCE_AMOUNT).
{ADD IS-2528} {IN only} For the last installment of the contract, unpaid amount is compared with the debt tolerance for the last installment (DEBT_TOLERANCE_AMOUN_LAST_INST).{/ADD}
System takes the count of found installments as the result.
If no unpaid installment is found, the result is 0.

Only installments of type (INSTALLMENT.INSTALLMENT_TYPE) STANDARD, TERMINATED and EARLY_REPAID are taken into account.


Example:
Debt toleration = 50.000 VND
Today: 22.11.2012
•              instalment #1 – due date: 20.07.2012, amount: 400.000 VND – paid
•              instalment #2 – due date: 20.08.2012, amount: 400.000 VND – paid
•              instalment #3 – due date: 20.09.2012, amount: 400.000 VND – 380.000 VND paid, 20.000 VND not paid (overall debt <= debt toleration)
•              instalment #4 – due date: 20.10.2012, amount: 400.000 VND – unpaid, overdue (overall debt 420 000 VND > debt toleration 50 000 VND)
•              instalment #5 – due date: 20.11.2012, amount: 400.000 VND – unpaid, overdue (820 000 VND > 50 000 VND)
•              instalment #6 – due date: 20.12.2012, amount: 400.000 VND – unpaid

The number of overdue installments is 2.

## 🔗 Connections (2)

- ← Dependency: [[Debt Catalogue]]
- → Aggregation: [[Overdue installment calculations]]

## 📊 Appears In (2 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
