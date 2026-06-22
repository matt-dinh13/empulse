---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/User interface model"
domain: "Modules"
element_id: 1688927
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Days past due

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/User interface model

## 📝 Notes

Shows for how many days is client late with payments.

Localization code:
INS_DPD

Class:
In case of historical (not currently valid) debt catalogues is used value stored in DebtCatalogue.DaysPastDue 
In case of current debt catalogue is displayed value calculated as difference between current date and due date of the First overdue installment (DebtCatalogue.FirstOverdueInstallmentDueDate). If the First overdue installment is not set (its value is null), then value 0 will be displayed. Value stored in DB is not used in case of currently valid debt catalogue.

## 📊 Appears In (1 diagrams)

- Custom: Debt catalogue detail
