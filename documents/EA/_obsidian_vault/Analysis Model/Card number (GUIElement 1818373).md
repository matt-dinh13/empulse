---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model"
domain: "Analysis Model"
element_id: 1818373
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Card number

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model

## 📝 Notes

Field for card number (PCID).

Disabled if card number is already validated (Offer_card_service.Is_Validated = 'TRUE')

LDM: Offer_Financial_Parameters->Offer_Service->Offer_Card_Service.Card_Number

Localization code:
REL_CardNumber

## 🔗 Connections (1)

- → Dependency: [[Card number]]

## 📊 Appears In (1 diagrams)

- Custom: Contract signing
