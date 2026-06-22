---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model"
domain: "Analysis Model"
element_id: 1538454
diagrams: 5
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Is Online disbursement

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model

## 📝 Notes

Says whether the system searchs payments which are disbursements of "online" contracts or not (i.e. contract was created externally). 

Logical data model: Boolean values (true/false) with null value.
Null value is default.

If null is select, a value of Outgoing Payment.isOnlineDisbursement is not take into account.

Localization:
PAY_IsOnlineDisbursement

## 📊 Appears In (5 diagrams)

- Custom: Search criteria - CUSTOM
- Custom: Search criteria - Items
- Custom: Search criteria - PAID
- Custom: Search criteria - STANDARD
- Custom: Search criteria - UNPAID
