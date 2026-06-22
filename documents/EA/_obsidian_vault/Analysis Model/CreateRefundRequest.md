---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/Refunds"
domain: "Analysis Model"
element_id: 1879364
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 CreateRefundRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/Refunds

## 📝 Notes

It represents one refund payment to set (i.e. to create or to cancel ) in the BSL.

## 🔗 Connections (6)

- → Dependency: [[RefundRecipientTypeDto (Enumeration 1864777)]]
- → Dependency: [[MoneyDto (Class 1864776)]]
- → Dependency: [[MoneyDto (Class 1864776)]]
- → Dependency: [[Process Refund Request with external identifiers (UseCase 1877182)]]
- → Dependency: [[RefundOperationTypeDto (Enumeration 1864778)]]
- → Dependency: [[RefundSourceSystemDto]]

## 📊 Appears In (1 diagrams)

- Logical: Create Refund Request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| refundDataExchangeID | string |  |
| amountOfRefund | MoneyDto |  |
| amountOfFee | MoneyDto |  |
| typeOfRecipient | RefundRecipientTypeDto |  |
| typeOfOperation | RefundOperationTypeDto |  |
| messageID | string |  |
| refundSource | RefundSourceSystemDto |  |
| {ADD}businessUser | string |  |
