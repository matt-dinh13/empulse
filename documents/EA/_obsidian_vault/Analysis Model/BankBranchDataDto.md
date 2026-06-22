---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Bank management/BankBranchDataNotification"
domain: "Analysis Model"
element_id: 1304022
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 BankBranchDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Bank management/BankBranchDataNotification

## 📝 Notes

{ADD CBL-2794 PAYM-1309 /}

## 🔗 Connections (2)

- ← Dependency: [[BankBranchNotification]]
- → Dependency: [[BankDataStatusDto]]

## 📊 Appears In (1 diagrams)

- Logical: BankBranchNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| name | string |  |
| code | string |  |
| MICR | string |  |
| synchronizationCode | string |  |
| region | string |  |
| district | string |  |
| isHeadquaters | boolean |  |
| status | BankDataStatusDto |  |
| creationDate | dateTime |  |
| updatedDate | dateTime |  |
| createdBy | string |  |
| updatedBy | string |  |
| bankSynchronizationCode | string |  |
| bankCode | string |  |
| bankName | string |  |
