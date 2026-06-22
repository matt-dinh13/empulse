---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)"
domain: "Analysis Model"
element_id: 1820260
diagrams: 2
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {ADD}Target type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)

## 📝 Notes

{ADD LOR-9704/}
Target type of the disbursement method (i.e. party receiving the money disbursement).

Other:

	
- Enumeration values are taken from setting on salesroom (according to the rule Get allowed disbursement methods for application).
	
- Based on setting:
- if there is no value, the field is hidden
- If there is only one value available for selected disbursement method, then its value is automatically pre-selected and field is disabled
- If there are more than one value available for selected disbursement method, then field is empty by default (when no value is available on the respective payment channel yet).
Note: displayed if parameter enableDisbursementTargetTypeOnApplicationDetail = TRUE


LDM:

	
- //LDM source for field pre-filling
API get.paymentChannels[.purpose='DI'].type
	
- //LDM for value saving
API createDraft[.purpose='DI'].targetType/ 
patchDraft[.purpose='DI'].targetType


Localization code:
CON_TargetType

## 📊 Appears In (2 diagrams)

- Custom: Change disbursement channel
- Custom: LOR-9704 Application detail: select target type for disbursement
