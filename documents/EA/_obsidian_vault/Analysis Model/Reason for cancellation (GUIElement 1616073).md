---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Cancel application (modal window)"
domain: "Analysis Model"
element_id: 1616073
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Reason for cancellation

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Cancel application (modal window)

## 📝 Notes

Reason of the application cancellation.

Enumeration values retrieved from Contract Status Transitions Reasons (ordered by .Value ASC) - only items meeting all the following conditions are incorporated in the list:

	
- .Contract_Transition_Type = 'T' (Canceled)
	
- .Role_Type = 'USER'
	
- .Used_Deal_Type = corresponding value for the relevant application type (i.e. Contract.Contract_Type + "_CONTRACT")

Example:
   - Contract.Contract_Type = 'CEL'
The applicable .Used_Deal_Type is then:
    'CEL_CONTRACT'

Note: In case Contract.Contract_Type is null, then .Used_Deal_Type in ['CEL_CONTRACT', 'REL_CONTRACT'] is used for filtering the relevant enumeration values.



LDM:
Contract->Contract_Status_Transition.Reason

Localization code:
CON_CancelReason

## 🔗 Connections (2)

- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[Contract Status Transitions Reasons]]

## 📊 Appears In (1 diagrams)

- Custom: Cancel application
