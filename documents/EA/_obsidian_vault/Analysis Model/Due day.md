---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/User interface"
domain: "Analysis Model"
element_id: 1878055
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Due day

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/User interface

## 📝 Notes

Day of installment repayment

LDM source: account.dueDay

In case:

	
- account.dueDay != NULL -> show value provided
	
- account.dueDay = NULL -> show ACC_VariableDueDay (localized string in this field, e.g. 'Variable')


Localization code: ACC_DueDay

## 📊 Appears In (1 diagrams)

- Custom: Show account detail
