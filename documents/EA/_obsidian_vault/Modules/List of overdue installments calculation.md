---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877482
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 List of overdue installments calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Calculation of list of all overdue installments - for update of Debt Installment in UC 01.470 Update contract debt catalog  

Updating list of overdue installment just in incomming payment processing is not enough, also time can "create" new overdue installment - when installment's due date elapses and it is not paid within debt tolerance (system property PARAM_DEBT_TOLERANCE_AMOUNT {ADD IS-2528} {IN only} and DEBT_TOLERANCE_AMOUN_LAST_INST {/ADD}), then it must be added to do list of Debt Installment.

System selects all Installments [Active, Due Date < current date] for which sum(Installment Part.Amount - Amount Paid) > system property PARAM_DEBT_TOLERANCE_AMOUNT. {ADD IS-2528} {IN only} For the last installment of the contract property DEBT_TOLERANCE_AMOUN_LAST_INST is used.{/ADD})

Calculation takes into account all types of installments.

## 🔗 Connections (2)

- → Aggregation: [[Overdue installment calculations]]
- ← Dependency: [[Get list of overdue installments calculation]]

## 📊 Appears In (2 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt full info calculations
