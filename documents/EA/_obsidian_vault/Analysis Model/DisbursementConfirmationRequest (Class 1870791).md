---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/OutgoingPayments"
domain: "Analysis Model"
element_id: 1870791
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 DisbursementConfirmationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/OutgoingPayments

## 📝 Notes

Informs HoSel about result of payment transfer requested by ORDERPAY140 message.

## 🔗 Connections (3)

- → Dependency: [[OutgoingPaymentEventTypeDto]]
- → Dependency: [[OutgoingPaymentDeliveryStatusDto]]
- → Dependency: [[{ADD}ExtendedProperty (Class 1870790)]]

## 📊 Appears In (1 diagrams)

- Logical: Disbursement confirmation request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentID | string |  |
| messageID | number |  |
| disbursementDate | date |  |
| deliveryStatus | OutgoingPaymentEventTypeDto |  |
| orderNumber | number |  |
| extendedProperty | {ADD}ExtendedProperty |  |
