---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - IN only"
domain: "Analysis Model"
element_id: 1881566
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 BankAccount

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - IN only

## 📝 Notes

Structure of bank account
Data is obtained from Contract -> Contract Bank Account ->Bank Account where Contract Bank Account.Active Flag = 1

## 🔗 Connections (3)

- → Dependency: [[BankAccountRoleType (Enumeration 1881551)]]
- ← Dependency: [[{MOD}ContractParameter (Class 1881547)]]
- ← Dependency: [[ContractFullInfo (Class 1881559)]]

## 📊 Appears In (1 diagrams)

- Logical: v8 - IN only

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountNumber | string |  |
| bankCode | string |  |
| bankAccountRole | BankAccountRoleType |  |
| bankName | string |  |
