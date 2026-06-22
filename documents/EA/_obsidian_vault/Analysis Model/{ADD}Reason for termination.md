---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract finishing/User Interface Model"
domain: "Analysis Model"
element_id: 1514229
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {ADD}Reason for termination

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract finishing/User Interface Model

## 📝 Notes

{ADD CLM-2730 /}
Additional information about contract termination.

LDM source:
Contract Status Transitions Reasons. 
Only items which meet following condition are in the list:

	
- Role_Type = 'USER'
AND UsedDealType = 'REL contract'
AND ContractTransitionType = K (Finished).


Visible only if some item is found.
If visible then it is mandatory.

Localization code: CON_TerminationReason

## 📊 Appears In (1 diagrams)

- Custom: Create REL contract termination request - UI
