---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Client notifications about Contract events"
domain: "Analysis Model"
element_id: 1303928
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ContractActivatedByProductNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Client notifications about Contract events

## 📝 Notes

{ADD CLM-1060 /}
A structure of the message which notifies client about the contract activation. The notification is generated for defined products only.

## 🔗 Connections (1)

- → Dependency: [[RequestSourceIdDto]]

## 📊 Appears In (1 diagrams)

- Logical: Client notifications about Contract registration

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| cuid | string |  |
| requestSourceId | RequestSourceIdDto |  |
