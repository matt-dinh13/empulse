---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877463
diagrams: 4
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Debt on principal calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Debt on principal is calculated as sum of all currently unpaid installment parts which are of type principal.

In case of Total principal debt are used all unpaid principal parts:
sum(INSTALLMENT.INSTALLMENT_PART.AMOUNT - INSTALLMENT.INSTALLMENT_PART.AMOUNT_PAID) where INSTALLMENT_PART.PART_TYPE = "S - Principal" or "ST - Principal terminated"

In case of Overdue principal debt are used only those parts, which belong to the installments with due date in the past:
sum(INSTALLMENT.INSTALLMENT_PART.AMOUNT - INSTALLMENT.INSTALLMENT_PART.AMOUNT_PAID) where INSTALLMENT_PART.PART_TYPE = "S - Principal" or "ST - Principal terminated" and INSTALLMENT.DUE_DATE < current date.

If contract status is Paid-Off or Written-Off, outstanding debt is treated as overdue - Overdue principal debt is calculated in the same way as Total principal debt.

Only active installments (INSTALLMENT.ACTIVE = "True") are used for calculation.

## 🔗 Connections (4)

- ← Dependency: [[01.863 Perform contract securitization]]
- ← Dependency: [[Debt Catalogue]]
- ← Dependency: [[Debt Catalogue]]
- → Generalization: [[Debt specific installment part type calculation]]

## 📊 Appears In (4 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
- Custom: Debt Securitization
- Use Case: Contract securitization
