---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/User Interface"
domain: "Analysis Model"
element_id: 1779815
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Cancellation reason

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/User Interface

## 📝 Notes

Additional information about cancellation of the service request which uses supplement.
Visible and enable only for Loan Service Request having Used Supplement not NULL.
Mandatory.

LDM source:
list of values from Contract Supplement Status Transitions Reason 
Only items which meet following condition are in the list:

	
- Role_Type = 'USER'  
AND UsedDealType= 'REL contract' / 'CEL contract' according to the contract type 
AND Transition Type = 'Canceled'


LDM destination: 
Contract Supplement-> Contract Supplement Status Transitions.Reason

Localization code:
CON_CancelReason

## 📊 Appears In (1 diagrams)

- Custom: Cancel service request
