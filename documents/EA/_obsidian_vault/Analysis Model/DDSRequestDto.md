---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/DDS"
domain: "Analysis Model"
element_id: 1219284
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 DDSRequestDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/DDS

## 🔗 Connections (4)

- ← Dependency: [[DDSRequestsMessage]]
- → Dependency: [[DDSRequestTypeDto]]
- → Dependency: [[AttributeDto]]
- ← Dependency: [[DDSRequestDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Consumed JMS messages - DDS request
- Logical: DDS Requests - file structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| requestId | string |  |
| requestSourceSystem | string |  |
| type | DDSRequestTypeDto |  |
| amount | PositiveMoneyDto |  |
| requestedDueDate | date |  |
| attributes | AttributeDto |  |
