---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only"
domain: "Analysis Model"
element_id: 1881185
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 BankAccount

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only

## 📝 Notes

Structure of bank account
Data is obtained from Contract -> Contract Bank Account ->Bank Account where Contract Bank Account.Active Flag = 1

## 🔗 Connections (3)

- → Dependency: [[BankAccountRoleType (Enumeration 1881180)]]
- ← Dependency: [[{MOD}ContractParameter (Class 1881173)]]
- ← Dependency: [[ContractFullInfo (Class 1881167)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification v8 (PH only)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountNumber | string |  |
| bankCode | string |  |
| bankAccountRole | BankAccountRoleType |  |
| bankName | string |  |
