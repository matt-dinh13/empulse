---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877494
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Debt on fees calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Debt on fees is calculated as sum of all currently unpaid installment parts which are of type fee.

In case of Total fee debt are used all unpaid fee parts:
sum(INSTALLMENT.INSTALLMENT_PART.AMOUNT - INSTALLMENT.INSTALLMENT_PART.AMOUNT_PAID) where INSTALLMENT_PART.PART_TYPE = "F - Fee" or "FT - Fee terminated"

In case of Overdue fee debt are used only those parts, which belong to the installments with due date in the past:
sum(INSTALLMENT.INSTALLMENT_PART.AMOUNT - INSTALLMENT.INSTALLMENT_PART.AMOUNT_PAID) where INSTALLMENT_PART.PART_TYPE = "F - Fee" or "FT - Fee terminated" and INSTALLMENT.DUE_DATE < current date.

If contract status is Paid-Off or Written-Off, outstanding debt is treated as overdue - Overdue fee debt is calculated in the same way as Total fee debt.

Only active installments (INSTALLMENT.ACTIVE = "True") are used for calculation.

## 🔗 Connections (3)

- ← Dependency: [[Debt Catalogue]]
- ← Dependency: [[Debt Catalogue]]
- → Generalization: [[Debt specific installment part type calculation]]

## 📊 Appears In (2 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
