---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract Service notification/Contract Service Notification v5"
domain: "Analysis Model"
element_id: 1880376
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}ContractServiceReplacedRollbackNotification 

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract Service notification/Contract Service Notification v5

## 📝 Notes

{ADD CSI-2454 /}
A notification message about replace rollback of a service on a loan contract (REL services only)
System event: ContractServiceReplacedRollbackSE

## 🔗 Connections (1)

- → Generalization: [[ContractServiceNotification (Class 1880390)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Service Notification v5

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| replacedServiceCode | string |  |
| replacedServiceVersion | string |  |
