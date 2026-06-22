---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds"
domain: "Analysis Model"
element_id: 1344909
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Additional information for PBA pamyent channel

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds

## 📝 Notes

Panel with addition information for disbursement via PBA payment channel.

Values in this panel is taken from:

	
- Customer obtained from CIF in related use case in case that refund items have no relation on Active RefundOrder 
	
- Active RefundOrder which is found in related use case (in this case the values are not editable)

...for more details see related use case

Visible:
Only if Contract->Payment_channel[where Purpose = 'Refund disbursement' (DR)]->Payment_Channel_Type = PBA

## 📊 Appears In (1 diagrams)

- Custom: Process outgoing payment for refunds
