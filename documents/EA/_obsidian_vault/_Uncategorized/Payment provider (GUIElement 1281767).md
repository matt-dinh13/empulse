---
type: GUIElement
stereotype: "combobox"
package: ""
domain: "_Uncategorized"
element_id: 1281767
diagrams: 0
connections: 0
tags:
  - guielement
  - _uncategorized
---

# 🖥️ Payment provider

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: N/A

## 📝 Notes

Defines payment provider which will be used when disbursement channel "Payment provider bank account" will be used for this partner. Only one payment provider can be selected and it will be used for every contract of this partner (if not overridden on Salesroom level).
Only partners of type "Partner bank" (PB) will be offered.

Field is editable only in case the option "Payment provider bank account" is selected. In that case it's also mandatory.

DB Source:
PartnerDisbursementChannel.PaymentProvider
or
SalesroomDisbursementChannel.PaymentProvider

Localization code:
GEN_PaymentProvider
