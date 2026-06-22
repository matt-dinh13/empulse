---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model"
domain: "Analysis Model"
element_id: 1538492
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Status

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model

## 📝 Notes

Status of outgoing payment.

If status = "unpaid" and either recipient bank account is not defined (see validation rule {Recipient bank account exists}) or payable date is > current date system displays status name + "(cannot be paid out)".

Localization code: GEN_Status

## 📊 Appears In (1 diagrams)

- Custom: Show outgoing payment detail
