---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds"
domain: "Analysis Model"
element_id: 1344915
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Time to delivery - from (hours)

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds

## 📝 Notes

Time (in hours) of delivery specified by the client - start of interval

LDM:
Active RefundOrder.TimeOfDeliveryFrom
(see related use case and description of the panel for more details) 
If the Active RefundOrder is not found, then is preset NULL value.

Editable:
Only if the Active RefundOrder is not found - in this case the combobox contains values from workingHoursStart to workingHoursEnd (global parameters) and NULL value.  
For example, if workingHoursStart = 7 and workingHoursEnd = 23, the combobox contains values from 07 to 23 and NULL value.

Localization code:
PAY_REFUND_TIME_OF_DELIVERY_FROM_HOURS

## 🔗 Connections (1)

- → Dependency: [[Interval of time of refund delivery (Action 619532)]]

## 📊 Appears In (1 diagrams)

- Custom: Process outgoing payment for refunds
