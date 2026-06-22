---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/IncomingPayments"
domain: "Analysis Model"
element_id: 1440424
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 MoneyDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/IncomingPayments

## 📝 Notes

It represents information about amount of a incoming payment (i.e. an amount and a currency).

## 🔗 Connections (1)

- ← Dependency: [[IncomingPaymentRequest (Class 1561651)]]

## 📊 Appears In (1 diagrams)

- Logical: Consumed JMS messages - Set incoming payment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | decimal |  |
| currency | string |  |
