---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification"
domain: "Analysis Model"
element_id: 1880106
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ContractPerson

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification

## 📝 Notes

Persons related to the contract

## 🔗 Connections (2)

- → Dependency: [[PersonRoleType (Enumeration 1880115)]]
- ← Dependency: [[ContractFullInfo]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cuid | long |  |
| personRole | PersonRoleType |  |
