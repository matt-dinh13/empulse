---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only"
domain: "Analysis Model"
element_id: 1881181
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ContractBase

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only

## 📝 Notes

Basic contract data

## 🔗 Connections (3)

- → Dependency: [[ContractStatusType (Enumeration 1881182)]]
- → Dependency: [[ContractEvent (Class 1881184)]]
- ← Generalization «XSDextension»: [[ContractFullInfo (Class 1881167)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification v8 (PH only)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractEvents | ContractEvent |  |
| contractOwnerCode | string |  |
| currentStatus | ContractStatusType |  |
| salesroomCode | string |  |
