---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Interface Consumed/RabbitMQ/COS/Contract Service Notification"
domain: "Modules"
element_id: 1808038
diagrams: 3
connections: 1
tags:
  - class
  - modules
---

# 🔷 ContractServiceReplacedRollbackNotification 

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Interface Consumed/RabbitMQ/COS/Contract Service Notification

## 📝 Notes

A notification message about replace rollback of a service on a loan contract (REL services only)
System event: ContractServiceReplacedRollbackSE

## 🔗 Connections (1)

- → Generalization: [[ContractServiceNotification]]

## 📊 Appears In (3 diagrams)

- Logical: Contract Service Notification
- Logical: Contract Service Notifications
- Logical: ContractServiceNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| replacedServiceCode | string |  |
| replacedServiceVersion | string |  |
