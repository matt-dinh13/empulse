---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877480
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 First overdue installment due date calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Function returns a due date (INSTALLMENT.DUE_DATE) of the first overdue (not fully paid) installment (INSTALLMENT) from the contract installment schedule where unpaid amount is equal or greater than value of the debt tolerance (PARAM_DEBT_TOLERANCE_AMOUNT).
{IN only} If the unpaid installment is the last installment of the contract, unpaid amount has to be equal or greater than value of the debt tolerance for the last installment (DEBT_TOLERANCE_AMOUN_LAST_INST)
{ADD IS-2652} {VN only} If feature switch useExtraOrdinaryInstallmentsInDebtCalculation = TRUE, installments of type (INSTALLMENT.INSTALLMENT_TYPE) STANDARD, TERMINATED, EARLY_REPAID and EXTRAORDINARY are taken into account. Else {/ADD} 
Only installments of type (INSTALLMENT.INSTALLMENT_TYPE) STANDARD, TERMINATED and EARLY_REPAID  are taken into account. 
Note: Usage of non-zero debt tolerance may lead to situation, when the first overdue installment <> first unpaid installment.

If no unpaid installment is found, then result is null.

Example #1:
Debt tolerance = 49.999 VND
Today: 25.09.2012
•	instalment #1 – due date: 20.07.2012, amount: 450.000 VND – paid, not due
•	instalment #2 – due date: 20.08.2012, amount: 450.000 VND – 430 000 VND paid, 20 000 VND unpaid, not due (overall debt <= debt tolerance)
•	instalment #3 – due date: 20.09.2012, amount: 450.000 VND – unpaid, due (overall debt > debt tolerance)
•	instalment #4 – due date: 20.10.2012, amount: 450.000 VND – not due yet

First overdue installment due date is 20.09.2012.

Example #2:
Debt tolerance = 49.999 VND
Today: 25.09.2012
•	instalment #1 – due date: 20.07.2012, amount: 450.000 VND – paid, not due
•	instalment #2 – due date: 20.08.2012, amount: 450.000 VND – paid, not due
•	instalment #3 – due date: 20.09.2012, amount: 450.000 VND – 430 000 VND paid, 20 000 VND unpaid, not due (overall debt <= debt tolerance)
•	instalment #4 – due date: 20.10.2012, amount: 450.000 VND – not due yet

First overdue installment due date is NULL.

{ADD IS-2652} {VN only} Example #3:
useExtraOrdinaryInstallmentsInDebtCalculation = TRUE
Debt tolerance = 49.999 VND
Today: 28.09.2025

	
- standard instalment #1 – due date: 20.07.2025, amount: 450.000 VND – paid, not due
	
- standard instalment #2 – due date: 20.08.2025, amount: 450.000 VND – paid, not due
	
- standard instalment #3 – due date: 20.09.2025, amount: 450.000 VND – 430 000 VND paid, 20 000 VND unpaid, not due (overall debt <= debt tolerance)
	
- extraordinary installment #101 (penalty)  - due date 25.09.2025, amount 40.000 VND unpaid, due (overall debt > debt tolerance)
	
- standard instalment #4 – due date: 20.10.2025, amount: 450.000 VND – not due yet


First overdue installment due date is 25.09.2025.
{/ADD}

## 🔗 Connections (2)

- ← Dependency: [[Debt Catalogue]]
- → Aggregation: [[Overdue installment calculations]]

## 📊 Appears In (2 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
