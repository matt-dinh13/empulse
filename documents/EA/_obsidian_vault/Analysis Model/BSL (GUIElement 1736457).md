---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - List of communication"
domain: "Analysis Model"
element_id: 1736457
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ BSL

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - List of communication

## 📝 Notes

Search input checkbox for controlling, whether the communication records originated in the BSL system shall be displayed in the Communication records grid or they should be filtered out.

Visible only if all the following conditions are met:

	
- 'All recent' option is selected in System combobox.
	
- Global parameter CommunicationHistorySelectedSystems is not empty.


	
- Parameter (parameters.properties) useClientCenterREST = FALSE.


Checked by default if 'BSL' value is listed within the global parameter CommunicationHistorySelectedSystems.

Localization code:
CommunicationSystem.BSL

## 📊 Appears In (1 diagrams)

- Custom: Tab - List of communication
