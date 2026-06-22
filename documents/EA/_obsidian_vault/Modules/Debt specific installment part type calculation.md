---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877492
diagrams: 1
connections: 7
tags:
  - requirement
  - modules
---

# 📋 Debt specific installment part type calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

This is a general calculation method which can be used for implementation of calculation of debts on specific installment parts. The same calculation formula is used for all inherited calculations and only list of used installment part types is changed.

## 🔗 Connections (7)

- ← Generalization: [[Debt on other installments calculation]]
- ← Generalization: [[Debt on fees calculation]]
- → Aggregation: [[Debt catalogue calculation formula]]
- ← Generalization: [[Debt on penalties calculation]]
- ← Generalization: [[Debt on excluded fees calculation]]
- ← Generalization: [[Debt on interest calculation]]
- ← Generalization: [[Debt on principal calculation]]

## 📊 Appears In (1 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
