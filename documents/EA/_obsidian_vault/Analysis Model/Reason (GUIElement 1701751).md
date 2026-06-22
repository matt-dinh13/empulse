---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/User Interface Model"
domain: "Analysis Model"
element_id: 1701751
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Reason

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/User Interface Model

## 📝 Notes

CET Reason 
Additional information about contract cancellation after processing of CER request.
LDM source:
Contract Status Transitions Reasons. 
Only items which meet following condition are in the list:

	
- Role_Type = 'USER' AND UsedDealType = 'CEL contract' AND ContractTransitionType = K - 'Finished'.


Localization code: GEN_Reason

## 🔗 Connections (2)

- → Dependency: [[Contract Status Transitions Reasons]]
- → Dependency: [[Mandatory (Requirement 1789779)]]

## 📊 Appears In (1 diagrams)

- Custom: CET Early repayment
