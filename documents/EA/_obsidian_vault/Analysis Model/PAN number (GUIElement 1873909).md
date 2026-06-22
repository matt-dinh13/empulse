---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/User Interface Model"
domain: "Analysis Model"
element_id: 1873909
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ PAN number

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/User Interface Model

## 📝 Notes

PAN number of the external payment card.

Input field only - never pre-filled.

Other:

	
- Once the focus leaves this field, system masks all entered characters except the first four and the last four characters - replaces them with the star symbol ('*'). //Is this really implemented?


Localization code:
GEN_PANNumber

## 🔗 Connections (1)

- → Dependency: [[{ADD}Card number]]

## 📊 Appears In (1 diagrams)

- Custom: External Card account selection - change disb. channel
