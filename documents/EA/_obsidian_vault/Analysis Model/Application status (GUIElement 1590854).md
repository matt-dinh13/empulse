---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/User Interface Model"
domain: "Analysis Model"
element_id: 1590854
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Application status

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/User Interface Model

## 📝 Notes

LDM source:
Application_Cancellation_Configuration.Application_Status

Other:

	
- Disabled for update of existing configuration.
	
- Empty by default (for creation of new configuration).
	
- Codelist values are taken from Contract Status Type and filtered to following items:
  - In pre-process ('P')
  - In process ('R')
  - Approved ('S')


Localization code:
APP_Status

## 🔗 Connections (2)

- → Dependency: [[Contract Status Type (Class 1880196)]]
- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Set application cancellation configuration
