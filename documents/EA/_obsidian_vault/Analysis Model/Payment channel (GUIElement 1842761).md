---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Show contract refunds"
domain: "Analysis Model"
element_id: 1842761
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Payment channel

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Show contract refunds

## 📝 Notes

Type of payment channel to refund payments for the contract.

LDM source: 
Contract->Payment_channel[where Purpose = 'Refund disbursement' (DR)]->Payment_Channel_Type  
(this payment channel may not be found - in this case is the filed empty)

Localization code:
PAY_RefundPayChannel

## 📊 Appears In (1 diagrams)

- Custom: Show contract refunds
