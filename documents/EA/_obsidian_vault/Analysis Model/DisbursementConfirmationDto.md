---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Outgoing Payments"
domain: "Analysis Model"
element_id: 1587865
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 DisbursementConfirmationDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Outgoing Payments

## 📝 Notes

{ADD CBL-86 /}

## 🔗 Connections (2)

- ← Dependency: [[DisbursementConfirmation]]
- → Dependency: [[TransactionSourceIdDto (Class 1638513)]]

## 📊 Appears In (1 diagrams)

- Logical: Disbursement result messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | PositiveMoneyDto |  |
| sourceTransactionID | TransactionSourceCodeType |  |
| disbursementID | int |  |
| transactionDate | Date |  |
