---
type: Class
stereotype: "XSDchoice"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages"
domain: "Modules"
element_id: 1750191
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 GroupChoice

> **Type**: Class · **Stereotype**: «XSDchoice»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages

## 📝 Notes

A choice of the contract parameter types

## 🔗 Connections (3)

- ← Association: [[{DEL}ContractFullInfo]]
- → Dependency: [[ClosedEndParameter]]
- → Dependency: [[RevolvingParameter]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}Contract full info notification - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractParameterCEL | ClosedEndParameter |  |
| contractParameterREL | RevolvingParameter |  |
