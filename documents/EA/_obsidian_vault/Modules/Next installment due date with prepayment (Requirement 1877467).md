---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877467
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Next installment due date with prepayment

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

- For each installment of type STANDARD, TERMINATED, EARLY_REPAID ordered by due date:

If sum of unpaid amount from the first installment to the current one is greater than debtCatalogue.sumOfPrepayments then

- If due date of the current installment is in the past then calculation result is due date of the first installment of type STANDARD, TERMINATED, EARLY_REPAID with due date in the present or future. If no such a installment exists, calculation result is null. 
- If due date of the current installment is in the present or future then calculation result is the due date.
- Calculation ends.
	
- In all other cases the calculation result is null.

## 🔗 Connections (1)

- ← Dependency: [[Debt Catalogue]]

## 📊 Appears In (1 diagrams)

- Custom: Debt catalogue to calculation formulas
