---
type: GUIElement
stereotype: "list"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/User Interface"
domain: "Modules"
element_id: 1673340
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Payment channel

> **Type**: GUIElement · **Stereotype**: «list»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/User Interface

## 📝 Notes

Payment channel name

LDM  source: 
List of values from enumeration Incoming Payment Channel.
If there exists a record where code = Incoming Payment.paymentChannel, the value from the payment is pre-filled. 
If not, the filed is initialized as empty.  

LDM 
destination: Incoming Payment.paymentChannel

Editable: Yes
Localization code: PAY_Channel

## 🔗 Connections (1)

- → Dependency: [[Payment channel on pair payment (Action 1673342)]]

## 📊 Appears In (1 diagrams)

- Custom: Couple incoming payment manually - UI
