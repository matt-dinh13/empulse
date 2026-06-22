---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model"
domain: "Analysis Model"
element_id: 1538538
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Show all payment types

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model

## 📝 Notes

Filter for Payment type list values. The check box is unchecked in default.
If the check box is unchecked, the list contains only basic types of payments: 
- Payment to retailer (Outgoing_Payment_Type=PTR)
- Cash loan disbursement (Outgoing_Payment_Type=CL)
- Premium to insurance company (Outgoing_Payment_Type=INS)
- Refund (Outgoing_Payment_Type=RTC)
{ADD PAYM-580}- External refinance (Outgoing_Payment_Type=ERF){/ADD}
{ADD PAYM-563}- CEL reward (Outgoing_Payment_Type=REW){/ADD}

If the check box is checked, all possible outgoing payment types are showed in the list and searching works with all outgoing payments.

Localization code: PAY_OutgoingPaymentTypesShowAll

## 📊 Appears In (1 diagrams)

- Custom: Search criteria - STANDARD
