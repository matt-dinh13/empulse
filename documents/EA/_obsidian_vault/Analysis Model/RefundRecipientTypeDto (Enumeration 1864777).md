---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/Refunds"
domain: "Analysis Model"
element_id: 1864777
diagrams: 1
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 RefundRecipientTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/Refunds

## 📝 Notes

Enumeration with possible refund payment recipient types (it should not be a real recipient, e.g. in case of transfer to the technical HC account)..

## 🔗 Connections (1)

- ← Dependency: [[CreateRefundRequest]]

## 📊 Appears In (1 diagrams)

- Logical: Create Refund Request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ANOTHER_CONTRACT |  |  |
| BANK_INCOME |  |  |
| CLIENT |  |  |
| FRAUD |  |  |
| PARTNER |  |  |
