---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments"
domain: "Analysis Model"
element_id: 1629659
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ManualIncomingPaymentPairngInfoRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments

## 📝 Notes

{ADD PBR-911 /}

## 🔗 Connections (2)

- → Dependency: [[MoneyDto (Class 1210890)]]
- → Dependency: [[IncomingPaymentSourceSystemDto (Enumeration 1440426)]]

## 📊 Appears In (1 diagrams)

- Logical: Generated JMS messages - Manual payment pairing

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| depositDate | Date |  |
| pairingDate | Date |  |
| pairingReason | string |  |
| paymentAmount | MoneyDto |  |
| paymentDataExchangeID | string |  |
| paymentSourceSystem | IncomingPaymentSourceSystemDto |  |
