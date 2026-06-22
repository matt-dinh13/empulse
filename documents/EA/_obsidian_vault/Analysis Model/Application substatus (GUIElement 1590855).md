---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/User Interface Model"
domain: "Analysis Model"
element_id: 1590855
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Application substatus

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/User Interface Model

## 📝 Notes

LDM source:
Application_Cancellation_Configuration.Application_SubStatus

Other:

	
- Disabled for update of existing configuration.
	
- Empty by default (for creation of new configuration).
	
- For creation of new configuration, disabled until some Application Status is selected on the form.
	
- Codelist values are taken from Contract SubStatus and applicable items are filtered based on the selected Application Status.


Localization code:
APP_SubStatus

## 🔗 Connections (2)

- → Dependency: [[Contract SubStatus]]
- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Set application cancellation configuration
