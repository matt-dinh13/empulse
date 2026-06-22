---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877470
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Debt on excluded fees calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Overdue excluded fee debt is used for calculation of percentage base amount which is used for penalty Tariff Item Types calculation

Overdue excluded fee debt is calculated for all Tariff Item Types defined in Calculated Fee attribute of Excluded Fees Base as follow:
Overdue debt on all active fee Installment Parts and tariff items of Tariff Item Types defined by Excluded Fees Base entity  with due date in the past (i.e. sum(INSTALLMENT.INSTALLMENT_PART.AMOUNT - INSTALLMENT.INSTALLMENT_PART.AMOUNT_PAID) where INSTALLMENT_PART.PART_TYPE = "F - Fee" or "FT - Fee terminated" or "P - Penalty" and INSTALLMENT_PART.TARIFF_ITEM_TYPE_CODE in (TARIFF_ITEM_TYPE_CODE found in Excluded Fees Base entity by found Calculated Fee) and INSTALLMENT.ACTIVE = 1 and INSTALLMENT.DUE_DATE < current date).

Notice: The mentioned calculation is not used for Total fee debt calculation. The calculation is performed for all types of Installment Types.

## 🔗 Connections (2)

- ← Dependency: [[Debt Catalogue]]
- → Generalization: [[Debt specific installment part type calculation]]

## 📊 Appears In (2 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
