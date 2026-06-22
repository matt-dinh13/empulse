---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)"
domain: "Analysis Model"
element_id: 1871784
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Change client

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Operational buttons - application operations (panel)

## 📝 Notes

Activates {DEL CLM-4094}one of the following use cases based on the value of global parameter UseChangeClientOnContractV2

	
- If TRUE, then {/DEL}the 01.910 Change Client on Contract use case {DEL CLM-4094}is activated.
	
- Otherwise the 01.910 Change Client on Contract use case is activated instead.{/DEL}


Localization code:
CON_CHANGE_CLIENT

## 🔗 Connections (1)

- → Dependency: [[01.910 Change Client on Contract v2]]

## 📊 Appears In (1 diagrams)

- Custom: Operational buttons - application operations
