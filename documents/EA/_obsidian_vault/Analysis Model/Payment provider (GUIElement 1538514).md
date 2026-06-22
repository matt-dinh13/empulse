---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model"
domain: "Analysis Model"
element_id: 1538514
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Payment provider

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model

## 📝 Notes

Filter for selection of payments which went through a partner bank.

Field is editable only when Payment channel is Payment provider bank account (PBA) and offers list of partners which are of type "Partner bank (Bank)".

Note for search: In case of outgoing payments with channel PBA is payment provider the partner to which were transferred money through this outgoing payment (OUTGOING_PAYMENT.PARTNER.NAME or OUTGOING_PAYMENT.SALESROOM.PARTNER.NAME)

Localization code:
PAY_PartnerBankName

## 📊 Appears In (1 diagrams)

- Custom: Search criteria - STANDARD
