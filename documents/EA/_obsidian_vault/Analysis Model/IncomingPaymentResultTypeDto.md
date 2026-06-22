---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments"
domain: "Analysis Model"
element_id: 1210886
diagrams: 1
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 IncomingPaymentResultTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments

## 📝 Notes

Enumeration with possible results of processing a request for setting one incoming payment.

## 🔗 Connections (1)

- ← Dependency: [[IncomingPaymentResponse (Class 1629660)]]

## 📊 Appears In (1 diagrams)

- Logical: Generated JMS messages - Set incoming payment (response)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| OK |  |  |
| CONTRACT_NOT_FOUND |  |  |
| WRONG_CONTRACT_STATE |  |  |
| AMOUNT_FOR_CREATE_IS_NOT_POSITIVE  |  |  |
| PAYMENT_TO_CANCEL_NOT_FOUND |  |  |
| PAYMENT_ALREADY_EXIST |  |  |
| WRONG_AMOUNT_FOR_CANCELLATION |  |  |
| PAYMENT_HAS_BEEN_ALREADY_CANCELED |  |  |
| UNDEFINED_ERROR |  |  |
| NO_INSTALLMENTS |  |  |
