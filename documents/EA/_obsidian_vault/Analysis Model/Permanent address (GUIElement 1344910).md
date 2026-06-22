---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds"
domain: "Analysis Model"
element_id: 1344910
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Permanent address

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds

## 📝 Notes

Client's permanent address obtained from CIF (there should be obtained at most one permanent address). Address is concatenated according to rule Concatenate address parts.

LDM:
Customer->CustomerAddress.address or Active RefundOrder.ClientAddress
(see related use case and description of the panel for more details) 

Localization code:
CLI_FullName

## 🔗 Connections (1)

- → Dependency: [[{MOD}Concatenate address parts]]

## 📊 Appears In (1 diagrams)

- Custom: Process outgoing payment for refunds
