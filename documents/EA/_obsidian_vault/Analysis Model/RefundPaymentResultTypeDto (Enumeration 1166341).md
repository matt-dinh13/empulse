---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/{DEL}Refunds"
domain: "Analysis Model"
element_id: 1166341
diagrams: 1
connections: 2
tags:
  - enumeration
  - analysis-model
---

# 📝 RefundPaymentResultTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/{DEL}Refunds

## 📝 Notes

Enumeration with possible results of processing a request for setting one refund payment.

## 🔗 Connections (2)

- → NoteLink: [[External Reference]]
- ← Dependency: [[RefundPaymentResponse (Class 1166345)]]

## 📊 Appears In (1 diagrams)

- Logical: Generated messages - Refunds

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| OK |  |  |
| CONTRACT_NOT_FOUND |  |  |
| REFUND_TO_CANCEL_NOT_FOUND |  |  |
| REFUND_TO_CREATE_ALREADY_EXIST |  |  |
| UNDEFINED_ERROR |  |  |
