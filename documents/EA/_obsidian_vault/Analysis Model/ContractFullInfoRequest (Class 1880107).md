---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification"
domain: "Analysis Model"
element_id: 1880107
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ContractFullInfoRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification

## 📝 Notes

A message for notification about any change Contract. Nowadays, start of submitting the message is initiated by contract signature event.

## 🔗 Connections (2)

- → Dependency: [[ContractSystemEventType (Enumeration 1880123)]]
- → Dependency: [[ContractFullInfo]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| systemEvent | string |  |
| data | ContractFullInfo |  |
