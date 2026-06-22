---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/DisbursementMessage"
domain: "Analysis Model"
element_id: 1243243
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 DisbursementMessageDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/DisbursementMessage

## 📝 Notes

{ADD CBL-86 /}

## 🔗 Connections (3)

- ← Dependency: [[DisbursementMessage]]
- → Dependency: [[TransactionSourceIdDto (Class 1638513)]]
- → Dependency: [[AttributesDto (Class 1098165)]]

## 📊 Appears In (1 diagrams)

- Logical: Consumed JMS messages - DisbursementMessage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | AccountNumberType |  |
| amount | PositiveMoneyDto |  |
| attributes | AttributesDto |  |
| cancel | boolean |  |
| sourceTransactionID | TransactionSourceIdDto |  |
| tariffItemTypeCode | TariffItemTypeCodeType |  |
