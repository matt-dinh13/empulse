---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds"
domain: "Analysis Model"
element_id: 1344898
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Generate payment

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds

## 📝 Notes

Invokes 05.515 Generate outgoing payment for refund items use case where is passed:

	
- list of RefundItems = all RefundItem from List of refund grid
	
- Identification document type   ...can be null


	
- Time to delivery   ...can be null
	
- Contact cell phone   ...can be null
	
- Comment


Enabled:
Only if RefundItem[random from passed items] has no relation on active refund order.
(i.e. there does not exist relation RefundItem->RefundOrder[where ActiveFlag=true])

Localization code:
PAY_GenRefundPayment

## 🔗 Connections (1)

- → Dependency: [[05.515 Generate outgoing payment for refund items (UseCase 1877126)]]

## 📊 Appears In (1 diagrams)

- Custom: Process outgoing payment for refunds
