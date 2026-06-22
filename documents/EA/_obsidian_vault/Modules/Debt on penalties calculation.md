---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877477
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Debt on penalties calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Debt on penalties is calculated as sum of all currently unpaid installment parts which are of type penalty.

In case of Total penalty debt {DEL PBR-882}and Overdue penalty debt calculated in the same way, because penalties are considered as past due automatically.{/DEL} all active unpaid penalty parts are used:

	
- sum(INSTALLMENT.INSTALLMENT_PART.AMOUNT - INSTALLMENT.INSTALLMENT_PART.AMOUNT_PAID) where INSTALLMENT_PART.PART_TYPE = "P - Penalty" and INSTALLMENT.ACTIVE_FLAG = 1

{ADD PBR-882}In case of Overdue penalty debt are used only parts belonging to the installments with due date in the past of currently due:

	
- sum(INSTALLMENT.INSTALLMENT_PART.AMOUNT - INSTALLMENT.INSTALLMENT_PART.AMOUNT_PAID) where INSTALLMENT_PART.PART_TYPE = "P - Penalty" and INSTALLMENT.ACTIVE_FLAG = 1 and INSTALLMENT.DUE_DATE <= current date.


If contract status is Paid-Off or Written-Off, outstanding debt is treated as overdue - Overdue fee debt is calculated in the same way as Total penalty debt.{/ADD}

## 🔗 Connections (3)

- ← Dependency: [[Debt Catalogue]]
- ← Dependency: [[Debt Catalogue]]
- → Generalization: [[Debt specific installment part type calculation]]

## 📊 Appears In (2 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
