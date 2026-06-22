---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/System Messages/Communication model/Communication tables"
domain: "Modules"
element_id: 821057
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 EVENT189

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/System Messages/Communication model/Communication tables

## 📝 Notes

CaBus informs OBS about a significant event (e.g. 'Billing closure finished' etc.).

## 🔗 Connections (3)

- ← Dependency «transformation»: [[AccountSystemMessageDto]]
- → Dependency «use»: [[CommResult]]
- → Dependency «use»: [[EVENT189 EventType]]

## 📊 Appears In (2 diagrams)

- Logical: REL System Messages - Communication tables
- Logical: System Messages - Communication model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | string |  |
| EventType | EVENT189 EventType |  |
| EventDate | date |  |
| EventValue1 | string |  |
| EventValue2 | string |  |
| EventValue3 | string |  |
| IdCredit | string |  |
| IdResult190 | number |  |
| TimeStamp | datetime |  |
| ResultCode | CommResult |  |
