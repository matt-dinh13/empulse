---
type: Class
stereotype: "output"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/RESULT tables/Communication Model/Communication tables"
domain: "Modules"
element_id: 815980
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 RESULT190

> **Type**: Class · **Stereotype**: «output»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/RESULT tables/Communication Model/Communication tables

## 📝 Notes

Confirmation of communication message (OBS -> HoSel)

## 🔗 Connections (4)

- → Dependency «use»: [[CommResult]]
- → Dependency «transformation»: [[{DEL}SaleContractResponse]]
- → Dependency: [[Process RESULT190 record]]
- → Dependency «use»: [[CommResultErrorStatusType]]

## 📊 Appears In (2 diagrams)

- Logical: COMMON - Communication tables
- Logical: Contract sale - Communication model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | string |  |
| Id record | string |  |
| Type message | string |  |
| Result | CommResult |  |
| Time stamp | Date Time |  |
| Note | string |  |
| Error | CommResultErrorStatusType |  |
