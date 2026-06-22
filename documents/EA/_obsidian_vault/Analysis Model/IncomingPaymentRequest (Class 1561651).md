---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/IncomingPayments"
domain: "Analysis Model"
element_id: 1561651
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 IncomingPaymentRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/IncomingPayments

## 📝 Notes

It represents one incoming payment to set (i.e. to create and pair / cancel and unpair) in the BSL.

LDM:
IncomingPayment

## 🔗 Connections (4)

- → Dependency: [[IncomingPaymentSourceSystemDto (Enumeration 1440426)]]
- → Dependency: [[IncomingPaymentTypeDto (Enumeration 1440423)]]
- → Dependency: [[IncomingPaymentOperationTypeDto (Enumeration 1440425)]]
- → Dependency: [[MoneyDto (Class 1440424)]]

## 📊 Appears In (1 diagrams)

- Logical: Consumed JMS messages - Set incoming payment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| paymentDataExchangeID | string |  |
| sourceSystem | IncomingPaymentSourceSystemDto |  |
| typeOfOperation | IncomingPaymentOperationTypeDto |  |
| paymentType | IncomingPaymentTypeDto |  |
| paymentChannel | string |  |
| amount | MoneyDto |  |
| depositDate | date |  |
| messageID | string |  |
| PartnerCode | string |  |
