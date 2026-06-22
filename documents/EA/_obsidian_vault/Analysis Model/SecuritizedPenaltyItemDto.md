---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Securitization"
domain: "Analysis Model"
element_id: 1713691
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 SecuritizedPenaltyItemDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Securitization

## 📝 Notes

Securitized penalty item

## 🔗 Connections (1)

- ← Dependency: [[SecuritizedContractDto (Class 1713694)]]

## 📊 Appears In (1 diagrams)

- Logical: Generated JMS messages - Contract Securitization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| tariffItemCode | string |  |
| {ADD}tariffItemTypeCode | string |  |
| totalPaidPenalty | MoneyDto |  |
| totalPrescribedPenalty | MoneyDto |  |
