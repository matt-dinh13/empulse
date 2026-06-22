---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/Communication tables"
domain: "Modules"
element_id: 1309487
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 SECCREDIT170

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/Communication tables

## 📝 Notes

Timestamp of inserting into comm table (when the HoSel inserted the record in the table).

## 🔗 Connections (2)

- → Dependency «use»: [[CommResult]]
- ← Dependency «transformation»: [[{DEL}SaleContractRequest (Class 1713638)]]

## 📊 Appears In (2 diagrams)

- Logical: Contract - Communication tables
- Logical: Contract sale - Communication model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | number |  |
| IdCredit | number |  |
| Evid srv | number |  |
| Date sale | date |  |
| Owner | string |  |
| Total debt | decimal |  |
| Sale price | decimal |  |
| Time stamp | datetime |  |
| Id result 190 | number |  |
| Result code | CommResult |  |
