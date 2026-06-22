---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - IN only"
domain: "Analysis Model"
element_id: 1881558
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ContractBase

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - IN only

## 📝 Notes

Basic contract data

## 🔗 Connections (3)

- ← Generalization «XSDextension»: [[ContractFullInfo (Class 1881559)]]
- → Dependency: [[ContractEvent (Class 1881563)]]
- → Dependency: [[{MOD}ContractStatusType]]

## 📊 Appears In (1 diagrams)

- Logical: v8 - IN only

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractEvents | ContractEvent |  |
| contractOwnerCode | string |  |
| currentStatus | ContractStatusType |  |
| salesroomCode | string |  |
