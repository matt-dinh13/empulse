---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Browse refunds"
domain: "Analysis Model"
element_id: 1845223
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Contract number

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Browse refunds

## 📝 Notes

Contract number. 
If it is filled, other fields of the form are disabled, erased and not taken into account. 
If a contract with the inserted number exists, the system invokes 05.502 Show contract refunds use case instead of display result in the grid bellow. 
No wildcards are allowed. 

LDM:
RefundItem.ContractCode 

Localization code:
CON_Number

## 🔗 Connections (1)

- → Dependency: [[Refunds search criteria restrictions (Action 619531)]]

## 📊 Appears In (1 diagrams)

- Custom: Browse refunds
