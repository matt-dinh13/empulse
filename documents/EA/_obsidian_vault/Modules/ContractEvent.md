---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages"
domain: "Modules"
element_id: 1750194
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 ContractEvent

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages

## 📝 Notes

Contract business event (lifecycle) log

## 🔗 Connections (2)

- ← Dependency: [[ContractBase]]
- → Dependency: [[ContractEventType]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}Contract full info notification - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| eventType | ContractEventType |  |
| eventDate | dateTime |  |
