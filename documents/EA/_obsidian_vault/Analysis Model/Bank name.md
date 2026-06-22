---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/ID/Employment information ID/Bank account ID"
domain: "Analysis Model"
element_id: 1005672
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Bank name

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/ID/Employment information ID/Bank account ID

## 📝 Notes

It contains all names of all banks and addition the value "No bank".
If the user selects "No bank" , the system sets Temporary_Application.Finance_Bank_Account_Ownership = No (otherwise sets Yes).

Default: not filled

Localization code:  CLI_BankAccountOwnership

## 🔗 Connections (2)

- → Generalization: [[Bank name (GUIElement 1237933)]]
- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Bank account ID
