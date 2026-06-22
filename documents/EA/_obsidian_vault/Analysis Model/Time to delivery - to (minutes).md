---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds"
domain: "Analysis Model"
element_id: 1344908
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Time to delivery - to (minutes)

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds

## 📝 Notes

Time (in minutes) of delivery specified by the client - end of interval

LDM:
Active RefundOrder.TimeOfDeliveryTo
(see related use case and description of the panel for more details) 
If the Active RefundOrder is not found, then is preset NULL value.

Editable:
Only if the Active RefundOrder is not found - in this case the vombobox contains following values NULL, 00, 15, 30, 45.

Localization code:
PAY_REFUND_TIME_OF_DELIVERY_TO_MINUTES

## 🔗 Connections (1)

- → Dependency: [[Interval of time of refund delivery (Action 619532)]]

## 📊 Appears In (1 diagrams)

- Custom: Process outgoing payment for refunds
