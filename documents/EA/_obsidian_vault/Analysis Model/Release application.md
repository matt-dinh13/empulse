---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)"
domain: "Analysis Model"
element_id: 1871780
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Release application

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)

## 📝 Notes

Activates the 01.031 Release assigned contract use case.


Visible only if all the following conditions are met:

	
- Application is in status In Pre-process and sub-status Draft (i.e. Contract.Status='P' and Contract.SubStatus='PDRAFT').


	
- User can process the respective application according to the rule Process contracts in 2BoD queue (from contract detail).



Localization code:
APP_Release

## 🔗 Connections (2)

- → Dependency: [[Process contracts in 2BoD queue (from contract detail)]]
- → Dependency: [[01.031 Release assigned contract (UseCase 1736431)]]

## 📊 Appears In (1 diagrams)

- Custom: Operational buttons - application operations
