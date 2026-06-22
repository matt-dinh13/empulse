---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Pairing Notification/Notifications"
domain: "Analysis Model"
element_id: 1869890
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}PairedPaymentNotificationEventTypeDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Pairing Notification/Notifications

## 📝 Notes

Event type of payment pairing (NTF decides which template to use based on this value)

## 🔗 Connections (1)

- ← Dependency: [[PairedPaymentNotification (Class 1869891)]]

## 📊 Appears In (1 diagrams)

- Logical: Paired Payment Notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| DPD_INSTALLMENT_PAID_AND_INCLUDE_NEXT |  |  |
| INSTALLMENT_FULLY_PAID_WITH_PENALTY |  |  |
| INSTALLMENT_PARTIALLY_PAID |  |  |
| INSTALLMENT_FULLY_PAID |  |  |
| DPD_INSTALLMENT_PAID |  |  |
| LAST_INSTALLMENT_FULLY_PAID |  |  |
| {ADD}REWARD_PAYMENT_PAIRED |  |  |
| {ADD}INTEREST_BACK_PAYMENT_PAIRED |  |  |
