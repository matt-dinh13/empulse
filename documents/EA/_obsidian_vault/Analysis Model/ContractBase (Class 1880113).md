---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification"
domain: "Analysis Model"
element_id: 1880113
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ContractBase

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification

## 📝 Notes

Basic contract data

## 🔗 Connections (3)

- ← Generalization «XSDextension»: [[ContractFullInfo]]
- → Dependency: [[ContractEvent (Class 1880118)]]
- → Dependency: [[ContractStatusType (Enumeration 1880126)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractEvents | ContractEvent |  |
| contractOwnerCode | string |  |
| currentStatus | ContractStatusType |  |
| salesroomCode | string |  |
