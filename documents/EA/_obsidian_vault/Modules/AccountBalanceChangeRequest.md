---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Debt catalogue/Interface Consumed/RabbitMQ/AccountBalanceChange"
domain: "Modules"
element_id: 1690993
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 AccountBalanceChangeRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Consumed/RabbitMQ/AccountBalanceChange

## 📝 Notes

{ADD PBR-164 /}
A message structure for notification about changes on a loan account

## 🔗 Connections (1)

- → Dependency: [[AccountBalanceChangeDto]]

## 📊 Appears In (2 diagrams)

- Logical: Account balance change
- Logical: Consumed messages - REL Account balance change

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountBalanceChanges | AccountBalanceChangeDto |  |
