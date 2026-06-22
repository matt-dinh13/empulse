---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Interface Consumed/RabbitMQ/COS/Contract Service Notification"
domain: "Modules"
element_id: 1808029
diagrams: 3
connections: 1
tags:
  - class
  - modules
---

# 🔷 ContractServiceReplacedNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Interface Consumed/RabbitMQ/COS/Contract Service Notification

## 📝 Notes

A notification message about replace of a service on a loan contract
System event: ContractServiceReplacedSE

## 🔗 Connections (1)

- → Generalization «XSDextension»: [[ContractServiceNotification]]

## 📊 Appears In (3 diagrams)

- Logical: Contract Service Notification
- Logical: Contract Service Notifications
- Logical: ContractServiceNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| replacedServiceCode | string |  |
| replacedServiceVersion | string |  |
