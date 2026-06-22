---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons"
domain: "Analysis Model"
element_id: 1848518
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Release contract

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons

## 📝 Notes

Releases contract from current user 2BoD queue.
Visible only if :

	
- contract is in substatus Draft


	
- the user can process contract in 2BoD queue (meets conditions in Process contracts in 2BoD queue (from contract detail)) and 
	
- pre-conditions of 01.031 Release assigned contract are met


Localization code: CON_Release

## 🔗 Connections (1)

- → Dependency: [[01.031 Release assigned contract (UseCase 1736431)]]

## 📊 Appears In (1 diagrams)

- Custom: Panel of buttons
