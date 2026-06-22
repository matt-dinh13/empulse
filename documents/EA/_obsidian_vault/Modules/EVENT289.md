---
type: Class
stereotype: "output"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/System Messages/Communication model/Communication tables"
domain: "Modules"
element_id: 821056
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 EVENT289

> **Type**: Class · **Stereotype**: «output»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/System Messages/Communication model/Communication tables

## 📝 Notes

OBS informs HoSel about a significant event (e.g. 'End of a banking day' etc.).

This events has currently no processing in the CBS Adapter.

## 🔗 Connections (2)

- → Dependency «use»: [[CommResult]]
- → Dependency «use»: [[EVENT289 EventType]]

## 📊 Appears In (1 diagrams)

- Logical: REL System Messages - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | string |  |
| EventType | EVENT289 EventType |  |
| EventDate | date |  |
| EventValue1 | string |  |
| EventValue2 | string |  |
| EventValue3 | string |  |
| FailReason | CommResult |  |
| Processed | boolean |  |
| TimeStamp | dateTime |  |
