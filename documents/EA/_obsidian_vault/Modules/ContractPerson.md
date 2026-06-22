---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages"
domain: "Modules"
element_id: 1750209
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 ContractPerson

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages

## 📝 Notes

Persons related to the contract

## 🔗 Connections (2)

- → Dependency: [[PersonRoleType]]
- ← Dependency: [[{DEL}ContractFullInfo]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}Contract full info notification - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cuid | long |  |
| personRole | PersonRoleType |  |
