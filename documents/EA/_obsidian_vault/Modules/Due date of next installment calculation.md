---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877475
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Due date of next installment calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

- For each installment of type STANDARD, TERMINATED, EARLY_REPAID ordered by due date:

If sum of unpaid amount from the first installment to the current one is greater than debt tolerance amount (system property PARAM_DEBT_TOLERANCE_AMOUNT, {ADD IS-2528} {IN only} for the last installment of the contract property DEBT_TOLERANCE_AMOUN_LAST_INST is used.{/ADD}) then

- If due date of the current installment is in the past then calculation result is due date of the first installment of type STANDARD, TERMINATED, EARLY_REPAID with due date in the present or future. If no such a installment exists, calculation result is null. 
- If due date of the current installment is in the present or future then calculation result is the due date.
- Calculation ends.
	
- In all other cases the calculation result is null.

## 🔗 Connections (2)

- ← Dependency: [[Debt Catalogue]]
- → Aggregation: [[Next installment calculations]]

## 📊 Appears In (2 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
