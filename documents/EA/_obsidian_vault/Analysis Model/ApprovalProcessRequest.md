---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract approval"
domain: "Analysis Model"
element_id: 1501983
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ApprovalProcessRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract approval

## 📝 Notes

Message requesting contract approval

## 🔗 Connections (1)

- → Dependency: [[Pair]]

## 📊 Appears In (1 diagrams)

- Logical: Generated JMS messages - ApprovalProcessInvocationService

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestId | long |  |
| data | Pair |  |
| sourceSystem | string |  |
