---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877468
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Debt on interest calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Debt on interest is calculated as sum of all currently unpaid installment parts which are of type interest.

In case of Total interest debt are used all unpaid interest parts:
sum(INSTALLMENT.INSTALLMENT_PART.AMOUNT - INSTALLMENT.INSTALLMENT_PART.AMOUNT_PAID) where INSTALLMENT_PART.PART_TYPE = "I - Interest" or "IT - Interest terminated" or "IF - Future interest"

In case of Overdue interest debt are used only those parts, which belong to the installments with due date in the past:
sum(INSTALLMENT.INSTALLMENT_PART.AMOUNT - INSTALLMENT.INSTALLMENT_PART.AMOUNT_PAID) where INSTALLMENT_PART.PART_TYPE = "I - Interest" or "IT - Interest terminated" and INSTALLMENT.DUE_DATE < current date.

If contract status is Paid-Off or Written-Off, outstanding debt is treated as overdue - Overdue interest debt is calculated in the same way as Total interest debt.

Only active installments (INSTALLMENT.ACTIVE = "True") are used for calculation.

## 🔗 Connections (3)

- ← Dependency: [[Debt Catalogue]]
- ← Dependency: [[Debt Catalogue]]
- → Generalization: [[Debt specific installment part type calculation]]

## 📊 Appears In (3 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
- Custom: PAYM-1520 (CBL-4166) FER - separation of interest and future interest
