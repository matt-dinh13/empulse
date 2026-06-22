---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments"
domain: "Analysis Model"
element_id: 1210890
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 MoneyDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments

## 🔗 Connections (2)

- ← Dependency: [[PairedInstallmentPartDto (Class 1210883)]]
- ← Dependency: [[ManualIncomingPaymentPairngInfoRequest]]

## 📊 Appears In (2 diagrams)

- Logical: Generated JMS messages - Incoming payments pairing
- Logical: Generated JMS messages - Manual payment pairing

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | decimal |  |
| currency | string |  |
