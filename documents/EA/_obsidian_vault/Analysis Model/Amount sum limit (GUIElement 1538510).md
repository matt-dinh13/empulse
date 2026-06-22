---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model"
domain: "Analysis Model"
element_id: 1538510
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Amount sum limit

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model

## 📝 Notes

Maximum of found payment amounts sum 


	
- If is filled, currency becomes mandatory and if currency is empty, system sets currency according to global parameter Currency.Is_Default = TRUE
	
- If is filled and Status field is empty, system sets status as “unpaid”


Logical data type: Number
Mandatory: No
Localization code: PAY_OutgoingPaymentAmountLimit

## 📊 Appears In (1 diagrams)

- Custom: Search criteria - STANDARD
