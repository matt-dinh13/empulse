---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds"
domain: "Analysis Model"
element_id: 1344917
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Primary document number

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds

## 📝 Notes

Number of identification document which is used for client identification for refund delivery.

LDM:
Customer->Document.Number where Document.Type = selected type in Primary document type combobox 
(it is dynamically prefilled on appropriate value every when the value in Primary document type combobox is changed)
or 
Active RefundOrder.IdentificationDocumentNumber
(see related use case and description of the panel for more details) 

Localization code:
PAY_PRIM_DOC_NUMBER

## 📊 Appears In (1 diagrams)

- Custom: Process outgoing payment for refunds
