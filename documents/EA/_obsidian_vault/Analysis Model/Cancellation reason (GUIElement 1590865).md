---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/User Interface Model"
domain: "Analysis Model"
element_id: 1590865
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Cancellation reason

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/User Interface Model

## 📝 Notes

LDM source:
Application_Cancellation_Configuration.Cancellation_Reason

Other:

	
- Empty by default (for creation of new configuration).
	
- Disabled until some Application Type is selected on the form.
	
- Codelist values are taken from Contract Status Transitions Reasons and applicable items are filtered based on the following criteria (Contract_Status_Transitions_Reasons.*):
  - Role_Type = 'SYSTEM'
  - Contract_Transition_Type = Canceled ('T')
  - Used_Deal_Type is matching the selected Application Type


Localization code:
APP_CancellationReason

## 🔗 Connections (2)

- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[Contract Status Transitions Reasons]]

## 📊 Appears In (1 diagrams)

- Custom: Set application cancellation configuration
