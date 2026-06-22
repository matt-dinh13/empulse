---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/{DEL}Refunds"
domain: "Analysis Model"
element_id: 1166345
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RefundPaymentResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/{DEL}Refunds

## 📝 Notes

It represents a notification about processing of request for setting of one refund payment.

LDM:
RefundItem

## 🔗 Connections (1)

- → Dependency: [[RefundPaymentResultTypeDto (Enumeration 1166341)]]

## 📊 Appears In (1 diagrams)

- Logical: Generated messages - Refunds

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| messageID | string |  |
| resultCode | RefundPaymentResultTypeDto |  |
