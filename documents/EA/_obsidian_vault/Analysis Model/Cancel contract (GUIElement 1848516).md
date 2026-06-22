---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons"
domain: "Analysis Model"
element_id: 1848516
diagrams: 1
connections: 7
tags:
  - guielement
  - analysis-model
---

# 🖥️ Cancel contract

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons

## 📝 Notes

The button is displayed if a user has appropriate access rights for given UC; preconditions of particular UC has to be fulfilled as well. 

For draft contract in FO or BO queue:
The button is displayed if the user meets conditions in Process contracts in 2BoD queue (from contract detail) as well

Localization code: CON_Cancel

## 🔗 Connections (6)

- → Dependency: [[01.325 Cancel In Pre-Process or In Process contract manually (UseCase 1850515)]]
- → Dependency: [[01.330 Cancel signed contract manually (UseCase 1850502)]]
- → Dependency: [[01.340 Cancel contract with generated offers manually (UseCase 1850505)]]
- → Dependency: [[01.592 Cancel paid-off contract manually (UseCase 1850504)]]
- → Dependency: [[01.320 Cancel approved contract manually (UseCase 1850514)]]
- → Dependency: [[01.590 Cancel active contract manually (UseCase 1850510)]]

## 📊 Appears In (1 diagrams)

- Custom: Panel of buttons
