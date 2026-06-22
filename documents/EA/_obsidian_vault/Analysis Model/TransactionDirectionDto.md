---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/REL Account transactions"
domain: "Analysis Model"
element_id: 1098151
diagrams: 1
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 TransactionDirectionDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/REL Account transactions

## 📝 Notes

Transaction direction - if the transaction amount should be added (CREDIT) or subtracted(DEBIT) from account. It doesn't cover fees
                direction.

## 🔗 Connections (1)

- ← Dependency «use»: [[TransactionMessageDto]]

## 📊 Appears In (1 diagrams)

- Logical: Consumed JMS messages - REL Account transactions

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| DEBIT | string |  |
| CREDIT | string |  |
| IRRELEVANT | string |  |
