---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - IN only"
domain: "Analysis Model"
element_id: 1881555
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ContractFullInfoRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - IN only

## 📝 Notes

A message for notification about any change Contract. Nowadays, start of submitting the message is initiated by contract signature event.

## 🔗 Connections (2)

- → Dependency: [[ContractFullInfo (Class 1881559)]]
- → Dependency: [[{MOD}ContractSystemEventType]]

## 📊 Appears In (1 diagrams)

- Logical: v8 - IN only

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| systemEvent | string |  |
| data | ContractFullInfo |  |
