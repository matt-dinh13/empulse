---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments"
domain: "Analysis Model"
element_id: 1210885
diagrams: 1
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 ArtificialIncomingPaymentPurposeTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments

## 📝 Notes

Enumeration with purpose types of requested artificial payments (e.g. in case of "Damages and deficits" payment type there must be distinguish of which payment purpose is going on - 'Write-off' or 'Contract sale').

## 🔗 Connections (1)

- ← Dependency: [[ArtificialIncomingPaymentRequest (Class 1629663)]]

## 📊 Appears In (1 diagrams)

- Logical: Generated JSM messages - Request payment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CONTRACT_SALE |  |  |
| OTHER |  |  |
| WRITE-OFF |  |  |
