---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877455
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 First overdue installment without tolerance calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

{ADD CBL-16778 IS-1672/}
Function returns a due date (INSTALLMENT.DUE_DATE) of the first overdue (not fully paid) installment (INSTALLMENT) from the contract installment schedule where unpaid amount is greater than 0.
Only installments of type (INSTALLMENT.INSTALLMENT_TYPE) STANDARD, TERMINATED and EARLY_REPAID are taken into account.
If no unpaid installment is found, then result is null.

## 🔗 Connections (1)

- ← Dependency: [[Debt Catalogue]]

## 📊 Appears In (2 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
