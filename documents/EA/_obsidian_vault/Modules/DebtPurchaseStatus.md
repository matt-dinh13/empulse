---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Interface Consumed/RabbitMQ/Zeebe/Debt Purchase Notification"
domain: "Modules"
element_id: 1881612
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 DebtPurchaseStatus

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Interface Consumed/RabbitMQ/Zeebe/Debt Purchase Notification

## 📝 Notes

A message generated for DebtPurchase request (received by Zeebe process)

## 🔗 Connections (1)

- → Dependency: [[AdditionalInfo]]

## 📊 Appears In (1 diagrams)

- Logical: Debt Purchase Notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| correlationId | string |  |
| result | string |  |
| processStatus | string |  |
| additionalInfo | AdditionalInfo |  |
| message | string |  |
