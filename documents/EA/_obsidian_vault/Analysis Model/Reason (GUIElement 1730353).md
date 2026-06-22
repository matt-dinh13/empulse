---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/User Interface Model"
domain: "Analysis Model"
element_id: 1730353
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Reason

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/User Interface Model

## 📝 Notes

Reason of pay-off contract.

LDM source:
Contract Status Transitions Reasons. 
Only items which meet following condition are in the list:

	
- Role_Type = 'USER'  
AND UsedDealType is appropriate value to Contract.ContractType (i.e. it is 'CEL contract' or 'REL contract')
AND ContractTransitionType = L - 'Paid off'


Localization code: GEN_Reason

## 🔗 Connections (1)

- → Dependency: [[Contract Status Transitions Reasons]]

## 📊 Appears In (1 diagrams)

- Custom: Pay off contracts
