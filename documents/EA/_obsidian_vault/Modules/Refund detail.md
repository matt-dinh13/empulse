---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface"
domain: "Modules"
element_id: 1880359
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Refund detail

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface

## 📝 Notes

{ADD PAYM-4601}
It opens  refund detail in other system via URL and parameters [contractCode], where the contract code is taken from refund item. It means that a user is shown all refunds belonging to the given contract upon clicking on refund detail of a particular payment.

Disabled if a Refund Item for the Incoming Payment does not exist, or exists only in status 'CANCELLED'

The button is only visible if a user is provided with access right UC05.050 Show refund detail in INCPAY.

## 📊 Appears In (1 diagrams)

- Custom: Show incoming payment detail panel
