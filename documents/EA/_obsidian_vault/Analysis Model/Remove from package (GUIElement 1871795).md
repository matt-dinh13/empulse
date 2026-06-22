---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)"
domain: "Analysis Model"
element_id: 1871795
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Remove from package

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)

## 📝 Notes

Activates the 01.240 remove from contract package use case.


Visible only if the application is part of some active contract package (i.e. Contract->Contract_Package_Item->Contract_Package[.Status='A'] exists).

Enabled only if the respective contract package  is still located at the POS (i.e. Contract->Contract_Package_Item->Contract_Package.Location = 'POS').


Localization code:
CON_PackageRemoveFrom

## 🔗 Connections (1)

- → Dependency: [[01.240 Remove from contract package (UseCase 1759989)]]

## 📊 Appears In (1 diagrams)

- Custom: Operational buttons - application operations
