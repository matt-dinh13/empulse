---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Pairing Notification/Notifications"
domain: "Analysis Model"
element_id: 1869891
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 PairedPaymentNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Pairing Notification/Notifications

## 📝 Notes

RMQ message that triggers sending SMS notification about pairing a payment to a contract using Notifier application

## 🔗 Connections (4)

- → Dependency: [[MoneyDto (Class 1349330)]]
- → Dependency: [[MoneyDto (Class 1349330)]]
- → Dependency: [[MoneyDto (Class 1349330)]]
- → Dependency: [[{ADD}PairedPaymentNotificationEventTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: Paired Payment Notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| cuid | string |  |
| remainingInstallmentNumber | int |  |
| paymentAmount | MoneyDto |  |
| paymentDataExchangeId | string |  |
| remainingOverdueDebt | MoneyDto |  |
| eventType | PairedPaymentNotificationEventTypeDto |  |
| totalInstallmentNumber | int |  |
| nextInstallmentAmount | MoneyDto |  |
| nextDueDate | date |  |
| totalRemainingDebt | MoneyDto |  |
