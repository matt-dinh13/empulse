---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons"
domain: "Analysis Model"
element_id: 1848507
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Remove from package

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons

## 📝 Notes

It runs 01.240 remove from contract package use case.
Localization code: CON_PackageRemoveFrom

Visible:
- only if Contract->Contract_Package is not null
       and Contract->Contract_Package.Status = 'Active' 
Enable:
- only if Contract->Contract_Package.Location = 'POS'

## 🔗 Connections (1)

- → Dependency: [[01.240 Remove from contract package (UseCase 1759989)]]

## 📊 Appears In (1 diagrams)

- Custom: Panel of buttons
