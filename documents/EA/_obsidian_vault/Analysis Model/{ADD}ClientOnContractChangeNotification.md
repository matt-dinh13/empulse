---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v1/ClientOnContractChangeNotification"
domain: "Analysis Model"
element_id: 1692115
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}ClientOnContractChangeNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v1/ClientOnContractChangeNotification

## 📝 Notes

{ADD CLM-4784/}

Notification generated when client on contract is changed.

## 📊 Appears In (1 diagrams)

- Logical: ClientOnContractChangeNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| newPerson | ContractPerson |  |
| originalPerson | ContractPerson |  |
| changeDate | date |  |
