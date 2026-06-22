---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages"
domain: "Modules"
element_id: 1750198
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 ContractBase

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages

## 🔗 Connections (3)

- → Dependency: [[ContractStatusType]]
- ← Generalization «XSDextension»: [[{DEL}ContractFullInfo]]
- → Dependency: [[ContractEvent]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}Contract full info notification - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractEvents | ContractEvent |  |
| contractOwnerCode | string |  |
| currentStatus | External Reference |  |
| salesroomCode | string |  |
