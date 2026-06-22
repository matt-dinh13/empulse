---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/User Interface"
domain: "Analysis Model"
element_id: 1863563
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Cancellation reason

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/User Interface

## 📝 Notes

Additional information about transaction cancellation.

LDM source:
list of values from Contract Supplement Status Transitions Reason
Only items which meet following condition are in the list:

	
- Role_Type = 'USER'  
AND UsedDealType= 'REL contract' / 'CEL contract' according to the contract type 
AND TransitionType = 'Canceled'


LDM destination: 
Contract Supplement-> Contract Supplement Status Transitions.Reason

Localization code:
CON_CancelReason

## 🔗 Connections (1)

- → Dependency: [[Cancellation reason (Action 1863573)]]

## 📊 Appears In (1 diagrams)

- Custom: Cancel unprocessed contract supplement - UI
