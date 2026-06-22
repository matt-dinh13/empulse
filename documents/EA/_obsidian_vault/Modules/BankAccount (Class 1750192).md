---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages"
domain: "Modules"
element_id: 1750192
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 BankAccount

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages

## 📝 Notes

A structure of the bank account

## 🔗 Connections (3)

- → Dependency: [[BankAccountRoleType]]
- ← Dependency: [[{DEL}ContractFullInfo]]
- ← Dependency: [[ContractParameter]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}Contract full info notification - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountNumber | string |  |
| bankCode | string |  |
| bankAccountRole | BankAccountRoleType |  |
