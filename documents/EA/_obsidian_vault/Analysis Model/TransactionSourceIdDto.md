---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/REL Account transactions"
domain: "Analysis Model"
element_id: 1098150
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 TransactionSourceIdDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/REL Account transactions

## 📝 Notes

Transaction identification in the source system where the card transaction was originated.

## 🔗 Connections (2)

- ← Dependency: [[TransactionMessageDto]]
- ← Dependency: [[TransactionMessageDto]]

## 📊 Appears In (1 diagrams)

- Logical: Consumed JMS messages - REL Account transactions

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceSystem | SourceSystemEnumDto |  |
| sourceTxId | TransactionSourceCodeType |  |
