---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model"
domain: "Analysis Model"
element_id: 1752597
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}List of eligible ECS providers

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model

## 📝 Notes

Combobox for selection of new ECS provider

LDM: {DEL CBL-2504 PAYM-803}List of ECS providers where active_flag = 1 and if ECS provider type = ACH, then combobox display only ECS provider again with type ACH. Same condition is applied for other ECS provider types.{/DEL}
{ADD CBL-2504 PAYM-803}
List of ECS providers where all conditions are met:

	
- active_flag = 1
	
- type = DDM->ECS Provider.ECS Provider Type
	
- if DDM.eMandate = true, then only ECS Provider where ECS Provider.eMandate Weight > 0
	
- if DDM.eMandate = false, then only ECS Provider where ECS Provider.Weight > 0
	
- current DDM->ECS Provider is excluded from the list (i.e. does not display current value)

{/ADD}

Localization code: DDM_ChangeECSProvider

## 🔗 Connections (1)

- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Change ECS provider
