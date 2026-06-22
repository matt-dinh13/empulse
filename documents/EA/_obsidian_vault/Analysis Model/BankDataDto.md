---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Bank management/BankDataNotification"
domain: "Analysis Model"
element_id: 1315024
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 BankDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Bank management/BankDataNotification

## 📝 Notes

{ADD CBL-2794 PAYM-1309 /}

## 🔗 Connections (2)

- ← Dependency: [[BankDataNotification (Class 1315026)]]
- → Dependency: [[BankDataStatusDto]]

## 📊 Appears In (1 diagrams)

- Logical: BankNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| name | string |  |
| code | string |  |
| status | BankDataStatusDto |  |
| synchronizationCode | string |  |
| DDsupport | boolean |  |
