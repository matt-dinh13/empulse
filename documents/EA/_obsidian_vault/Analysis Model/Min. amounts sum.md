---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/User Interface/Browse Outgoing Payments"
domain: "Analysis Model"
element_id: 827179
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Min. amounts sum

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/User Interface/Browse Outgoing Payments

## 📝 Notes

Min sum of payment orders amounts. Found files have sum of amounts of specified currency >= entered value


	
- If is filled and currency is empty, system sets currency according to global parameter Currency.Is_Default = TRUE.


Logical data type: number (10,2)
Mandatory: no
Localization code: PAY_OutgoingPaymentAmountSumMin

## 📊 Appears In (1 diagrams)

- Custom: Browse outgoing payment files screen
