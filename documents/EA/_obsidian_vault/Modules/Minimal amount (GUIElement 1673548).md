---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface/Browse incoming payments"
domain: "Modules"
element_id: 1673548
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Minimal amount

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface/Browse incoming payments

## 📝 Notes

Minimal amount of searched payments. Payment amount has to be equal or greater than entered value.

If value is entered, currency becomes mandatory and if currency is empty system sets currency according to global parameter Currency.Is_Default = TRUE
(INCOMING_PAYMENT.AMOUNT.VALUE)

Mandatory: No
Editable: Yes
Localization code: GEN_AmountMinimal

## 📊 Appears In (1 diagrams)

- Custom: Incoming payments search criteria - Standard
