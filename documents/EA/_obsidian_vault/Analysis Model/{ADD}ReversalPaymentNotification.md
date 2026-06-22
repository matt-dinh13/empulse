---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Pairing Notification/Notifications"
domain: "Analysis Model"
element_id: 1869892
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}ReversalPaymentNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Pairing Notification/Notifications

## 📝 Notes

{ADD PAYM-865 /}
JMS message that triggers sending SMS notification about unpairing a payment from a contract using Notifier application

## 🔗 Connections (2)

- → Dependency: [[MoneyDto (Class 1349330)]]
- → Dependency: [[MoneyDto (Class 1349330)]]

## 📊 Appears In (1 diagrams)

- Logical: Reversal Payment Notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| cuid | string |  |
| remainingInstallmentNumber | int |  |
| installmentAmount | MoneyDto |  |
| paymentDataExchangeId | string |  |
| remainingAmount | MoneyDto |  |
