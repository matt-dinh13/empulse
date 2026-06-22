---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877473
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Latest overdue installment due date calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

System finds the latest unpaid overdue installment (INSTALLMENT.DUE_DATE < current date and at least one INSTALLMENT_PART.AMOUNT <> INSTALLMENT_PART.AMOUNT_PAID) in accordance to value of the debt tolerance (PARAM_DEBT_TOLERANCE_AMOUNT) in the schedule and takes its due date (INSTALLMENT.DUE_DATE) as a result.
{ADD IS-2528} {IN only} If the latest unpaid installment is the last installment of the contract, unpaid amount has to be equal or greater than value of the debt tolerance for the last installment (DEBT_TOLERANCE_AMOUN_LAST_INST){/ADD}
If no unpaid installment is found, the result is null.
Only installments of type (INSTALLMENT.INSTALLMENT_TYPE) STANDARD, TERMINATED and EARLY_REPAID are taken into account.

Example:
Debt tolerance = 50.000 VND
Today: 25.10.2012

	
- installment #1 – due date: 20.07.2012, amount: 450.000 VND – paid, not due
	
- installment #2 – due date: 20.08.2012, amount: 450.000 VND – 420.000 VND paid, 30.000 VND unpaid, not due (overall_debt <= debt tolerance)
	
- installment #3 – due date: 20.09.2012, amount: 450.000 VND – unpaid, due (overall_debt > debt tolerance)
	
- installment #4 – due date: 20.10.2012, amount: 450.000 VND – unpaid, due (overall_debt > debt tolerance)


Latest overdue installment due date is 20.10.2012.

## 🔗 Connections (2)

- ← Dependency: [[Debt Catalogue]]
- → Aggregation: [[Overdue installment calculations]]

## 📊 Appears In (2 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
