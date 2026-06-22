---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface"
domain: "Modules"
element_id: 1880311
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Repayment channel

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface

## 📝 Notes

Mandatory
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

- Custom: Manage overpayment
