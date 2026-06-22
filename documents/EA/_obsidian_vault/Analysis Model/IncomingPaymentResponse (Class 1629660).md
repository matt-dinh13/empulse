---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments"
domain: "Analysis Model"
element_id: 1629660
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 IncomingPaymentResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments

## 📝 Notes

It represents a notification about processing of request of setting one incoming payment.

## 🔗 Connections (1)

- → Dependency: [[IncomingPaymentResultTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: Generated JMS messages - Set incoming payment (response)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| messageID | string |  |
| resultCode | IncomingPaymentResultTypeDto |  |
