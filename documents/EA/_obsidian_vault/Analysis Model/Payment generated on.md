---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds"
domain: "Analysis Model"
element_id: 1344902
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Payment generated on

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds

## 📝 Notes

Date when the outgoing payment was generated (for passed refund items).

LDM:
RefundOrder->OutgoingPayment.CreationDate
In case any relation does not exist (i.e. no relation from RefundItem to RefundOrder) the field is empty.

Localization code:
PAY_PaymentGenOn

## 📊 Appears In (1 diagrams)

- Custom: Process outgoing payment for refunds
