---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877457
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Debt on other installments calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Debt on other installments is calculated as sum of all currently unpaid installment parts which are of other type than principal, interest, fee and penalty.

In case of Total debt on other installments are used all unpaid parts of other types:
sum(INSTALLMENT.INSTALLMENT_PART.AMOUNT - INSTALLMENT.INSTALLMENT_PART.AMOUNT_PAID) where INSTALLMENT_PART.PART_TYPE is not in ("S - Principal", "ST - Principal terminated", "I - Interest", "IT - Interest terminated", "F - Fee", "FT - Fee terminated", "P - Penalty", "IF - Future interest"{ADD PAYM-1885 CBL-4285}, "PP - Prepayment"{/ADD PAYM-1885 CBL-4285}
)

In case of Overdue debt on other installments  are used only those parts, which belong to the installments with due date in the past:
sum(INSTALLMENT.INSTALLMENT_PART.AMOUNT - INSTALLMENT.INSTALLMENT_PART.AMOUNT_PAID) where INSTALLMENT_PART.PART_TYPE is not in ("S - Principal", "ST - Principal terminated", "I - Interest", "IT - Interest terminated", "F - Fee", "FT - Fee terminated", "P - Penalty","IF - Future interest"{ADD PAYM-1885 CBL-4285}, "PP - Prepayment"{/ADD PAYM-1885 CBL-4285}) and INSTALLMENT.DUE_DATE < current date.

If contract status is Paid-Off or Written-Off, outstanding debt is treated as overdue - Overdue debt on other installments is calculated in the same way as Total debt on other installments.

Only active installments (INSTALLMENT.ACTIVE = "True") are used for calculation.

## 🔗 Connections (3)

- ← Dependency: [[Debt Catalogue]]
- ← Dependency: [[Debt Catalogue]]
- → Generalization: [[Debt specific installment part type calculation]]

## 📊 Appears In (3 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
- Custom: PAYM-1520 (CBL-4166) FER - separation of interest and future interest
