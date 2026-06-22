---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877489
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Sum of paid penalties calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

System finds all the penalties paid by customer (partially and fully paid) from the beginning of the contract and takes its sum as a result.

sum(INSTALLMENT.INSTALLMENT_PART.AMOUNT_PAID) where INSTALLMENT_PART.PART_TYPE = "P - Penalty" and INSTALLMENT.CONTRACT = required contract.

If there is no penalty on the contract, the result is null.

## 🔗 Connections (2)

- ← Dependency: [[Debt Catalogue]]
- → Aggregation: [[Incoming payment calculations]]

## 📊 Appears In (2 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
