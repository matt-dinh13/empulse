---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/REL Account transactions"
domain: "Analysis Model"
element_id: 1098153
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 TransactionReconciliationDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/REL Account transactions

## 📝 Notes

Transaction reconciliation message. (TRANSAC161)

## 🔗 Connections (2)

- → Dependency: [[ReconciliationTypeDto]]
- ← Dependency: [[TransactionMessageDto]]

## 📊 Appears In (1 diagrams)

- Logical: Consumed JMS messages - REL Account transactions

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| reconciliationCode | AccountItemCodeType |  |
| amount | PositiveMoneyDto |  |
| reconciliationType | ReconciliationTypeDto |  |
