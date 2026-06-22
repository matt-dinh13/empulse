---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds"
domain: "Analysis Model"
element_id: 1344911
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Primary document type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds

## 📝 Notes

List of types of client's primary identification documents obtained from CIF of type of identification document which is used for client identification for refund delivery.

LDM:
List of Customer->Document.Type
(In case the Last used identification document type has been found in related use case and its value is in list of Customer->Document.Type, then the Last used identification document type is preselected. Otherwise is preselected random value from the list.) 
or 
Active RefundOrder.IdentificationDocumentType
(see related use case and description of the panel for more details) 

Behavior:
In case that the value is changed, the filed Primary document number is prefilled on value of Customer->Document.Number where Document.Type = selected value in the combobox 

Editable:
Only if the Active RefundOrder is not found.

Localization code:
PAY_REFUND_PRIMARY_DOC_TYPE

## 📊 Appears In (1 diagrams)

- Custom: Process outgoing payment for refunds
