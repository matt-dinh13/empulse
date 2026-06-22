---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds"
domain: "Analysis Model"
element_id: 1344899
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Primary phone number

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds

## 📝 Notes

Client's primary mobile obtained from CIF (there should be obtained at most one primary mobile).

LDM:
Composed string from 
Contact.ContactExt and Contact.ContactValue where Customer.CustomerContact.Role = PRIMARY_MOBILE
or 
 Active RefundOrder.ContactCellPhone
(see related use case and description of the panel for more details) 

Localization code:
GEN_PhoneMobile1

## 📊 Appears In (1 diagrams)

- Custom: Process outgoing payment for refunds
