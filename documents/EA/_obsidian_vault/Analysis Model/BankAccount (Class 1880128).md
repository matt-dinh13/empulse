---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification"
domain: "Analysis Model"
element_id: 1880128
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 BankAccount

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification

## 📝 Notes

Structure of bank account
Data is obtained from Contract -> Contract Bank Account ->Bank Account where Contract Bank Account.Active Flag = 1

## 🔗 Connections (3)

- ← Dependency: [[ContractFullInfo]]
- ← Dependency: [[{MOD}ContractParameter]]
- → Dependency: [[BankAccountRoleType (Enumeration 1880111)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountNumber | string |  |
| bankCode | string |  |
| bankAccountRole | BankAccountRoleType |  |
| bankName | string |  |
