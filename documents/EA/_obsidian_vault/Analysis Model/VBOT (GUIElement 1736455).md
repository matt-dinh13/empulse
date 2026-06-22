---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - List of communication"
domain: "Analysis Model"
element_id: 1736455
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ VBOT

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - List of communication

## 📝 Notes

Search input checkbox for controlling, whether the communication records originated in the VBOT system shall be displayed in the Communication records grid or they should be filtered out.

Visible only if all the following conditions are met:

	
- 'All recent' option is selected in System combobox.
	
- Global parameter CommunicationHistorySelectedSystems is not empty.
	
- Global parameter CommHistVBOTUsed = TRUE.


Checked by default if 'VBOT' value is listed within the global parameter CommunicationHistorySelectedSystems.

Localization code:
CommunicationSystem.VBOT

## 📊 Appears In (1 diagrams)

- Custom: Tab - List of communication
