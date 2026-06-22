---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Show contract refunds"
domain: "Analysis Model"
element_id: 1842769
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {ADD}Created By

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Show contract refunds

## 📝 Notes

{ADD PAYM-5188}
Display name of the user who created refund item

LDM source: 
User.Fullname of the user who created Contract->Payment_channel[where Purpose = 'Refund disbursement' (DR)]
(this payment channel can be not found - in this case is the filed empty)

## 📊 Appears In (1 diagrams)

- Custom: Show contract refunds
