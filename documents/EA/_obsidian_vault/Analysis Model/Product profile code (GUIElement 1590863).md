---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/User Interface Model"
domain: "Analysis Model"
element_id: 1590863
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Product profile code

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/User Interface Model

## 📝 Notes

LDM source:
Application_Cancellation_Configuration.Product_Profile_Code

Other:

	
- Disabled for update of existing configuration.
	
- Empty by default (for creation of new configuration).
	
- For creation of new configuration, disabled until some Application Type is selected on the form.
	
- Codelist values are represented by the codes of all (active and inactive) product profiles filtered based on the selected Application Type (i.e. Product_Profile[.Product_Type = Application Type].Code).


Localization code:
APP_ProductProfileCode

## 🔗 Connections (1)

- → Dependency: [[Optional (Action 1789801)]]

## 📊 Appears In (1 diagrams)

- Custom: Set application cancellation configuration
