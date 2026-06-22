---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877474
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Next penalty amount calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

{ADD CBL-14004 IS-1403}

	
- System find next installment due date by Due date of next installment calculation - if due date is not found, result is null and calculation ends.
	
- System finds all not fully paid  installments with type EXTRAORDINARY and installment due date <= next installment due date. If no such a installment exists, calculation result is null and calculation ends.
	
- System finds all not fully paid  installment parts type penalty for installments found in previous step.  If no such a installment part exists, calculation result is null and calculation ends.
	
- System calculates next penalty amount as sum of unpaid amount of all installment parts found in previous step.

## 🔗 Connections (2)

- ← Dependency: [[Debt Catalogue]]
- → Aggregation: [[Next installment calculations]]

## 📊 Appears In (2 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
