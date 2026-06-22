---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only"
domain: "Analysis Model"
element_id: 1881186
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ContractFullInfoRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only

## 📝 Notes

A message for notification about any change Contract. Nowadays, start of submitting the message is initiated by contract signature event.

## 🔗 Connections (2)

- → Dependency: [[ContractSystemEventType (Enumeration 1881190)]]
- → Dependency: [[ContractFullInfo (Class 1881167)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification v8 (PH only)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| systemEvent | string |  |
| data | ContractFullInfo |  |
