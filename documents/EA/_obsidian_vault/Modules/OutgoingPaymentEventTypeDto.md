---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model"
domain: "Modules"
element_id: 1671298
diagrams: 3
connections: 3
tags:
  - enumeration
  - modules
---

# 📝 OutgoingPaymentEventTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model

## 📝 Notes

{MOD CBL-16385 PAYM-4592}
Enumeration of delivery statuses of outgoing payment

## 🔗 Connections (3)

- ← Dependency: [[DisbursementConfirmationRequest]]
- ← Dependency: [[OutgoingPaymentNotification]]
- ← Dependency: [[DisbursementConfirmationRequest (Class 1870791)]]

## 📊 Appears In (3 diagrams)

- Logical: Outgoing payments - Communication Model
- Logical: Outgoing payments - JMS messages
- Logical: RabbitMQ messages - OutgoingPaymentNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Delivered |  |  |
| Not delivered |  |  |
| Paid |  |  |
| Cancelled |  |  |
