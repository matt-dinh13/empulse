---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - List of communication"
domain: "Analysis Model"
element_id: 1736454
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Filter

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - List of communication

## 📝 Notes

Panel containing the search form, which allows the users to filter the individual records about the communication with the client (displayed in the Communication records grid) based on the search criteria entered into such form.

Visible only if at least one of the following conditions is met:

	
- Global parameter CommHistFilterBSL = TRUE.
AND
Parameter (parameters.properties) useClientCenterREST = FALSE.
	
- Global parameter CommHistFilterCLC = TRUE.
	
- Global parameter CommHistFilterCCH = TRUE.


Localization code:
GEN_Filter

## 📊 Appears In (1 diagrams)

- Custom: Tab - List of communication
