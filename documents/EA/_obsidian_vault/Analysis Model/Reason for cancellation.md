---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract cancellation/User Interface Model"
domain: "Analysis Model"
element_id: 1015380
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Reason for cancellation

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract cancellation/User Interface Model

## 📝 Notes

Additional information about contract cancellation.
Mandatory
LDM source:
Contract Status Transitions Reasons. 
Only items which meet following condition are in the list:

	
- Role_Type = 'USER'
AND UsedDealType is appropriate value to Contract.ContractType (i.e. it is 'CEL contract' or 'REL contract'; in case that the ContractType = null, there is used union of 'CEL contract' and 'REL contract' deal types)
AND ContractTransitionType = T - 'Cancelled'.


Saved to:
Contract->Contract_Status_Transitions->Contract_Status_Transitions Reasons

Example: Customer decided to buy this product in another store.

Localization code: CON_CancelReason

## 🔗 Connections (1)

- → Dependency: [[Contract Status Transitions Reasons]]

## 📊 Appears In (1 diagrams)

- Custom: Contract cancellation
