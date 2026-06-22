---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Outgoing Payments"
domain: "Analysis Model"
element_id: 1230860
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 PaymentOrderRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Outgoing Payments

## 📝 Notes

It represents one or more paid outgoing payments (payments allocated to the payment order )

## 🔗 Connections (1)

- → Association: [[OutgoingPaymentDto]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing payments request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentOrderDataExchangeId | string |  |
| outgoingPayments | OutgoingPaymentDto |  |
