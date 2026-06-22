---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments"
domain: "Analysis Model"
element_id: 1629663
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 ArtificialIncomingPaymentRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments

## 📝 Notes

Via this message the BSL requests creation / cancellation of an incoming payment.
It is used only for artificial payments, e.g. Small underpayment etc.

## 🔗 Connections (4)

- → Dependency: [[ArtificialIncomingPaymentSourceSystemDto]]
- → Dependency: [[ArtificialIncomingPaymentTypeDto]]
- → Dependency: [[ArtificialIncomingPaymentOperationTypeDto]]
- → Dependency: [[ArtificialIncomingPaymentPurposeTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: Generated JSM messages - Request payment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| amount | MoneyDto |  |
| paymentDataExchangeId | string |  |
| sourceSystem | ArtificialIncomingPaymentSourceSystemDto |  |
| paymentType | ArtificialIncomingPaymentTypeDto |  |
| purpose | ArtificialIncomingPaymentPurposeTypeDto |  |
| typeOfOperation | ArtificialIncomingPaymentOperationTypeDto |  |
| {ADD}depositDate | dateTime |  |
