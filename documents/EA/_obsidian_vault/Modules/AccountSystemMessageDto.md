---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Communication Model"
domain: "Modules"
element_id: 816011
diagrams: 4
connections: 6
tags:
  - class
  - modules
---

# 🔷 AccountSystemMessageDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Communication Model

## 🔗 Connections (5)

- → Dependency: [[Processing AccountSystemMessageDto]]
- → Dependency «transformation»: [[EVENT189]]
- → Generalization «XSDextension»: [[MessageBaseTypeDto]]
- → Association: [[SystemEventTypeDto]]
- ← Association: [[ModelGroup1]]

## 📊 Appears In (4 diagrams)

- Logical: COMMON for comm. with CaBus - Communication Model
- Logical: COMMON for consumed JMS messages from CaBus
- Logical: System Messages - Communication model
- Logical: System Messages - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| businessDate | date |  |
| currentDate | date |  |
