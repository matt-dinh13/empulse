---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/User Interface Model"
domain: "Modules"
element_id: 1596813
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Search results

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/User Interface Model

## 📝 Notes

All column of the grid are sortable
Default sorting: Code asc.
Paging: Yes (number of rows is defined by system parameter)

## 🔗 Connections (2)

- → Realisation: [[08.560 Show Insurance Program version detail (UseCase 1517628)]]
- → Realisation: [[{DEL}08.160 Show Service version detail]]

## 📊 Appears In (1 diagrams)

- Custom: Search for Insurance Program

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | char |  |
| Name | char |  |
| Version number | int |  |
| Version status | char |  |
| Valid from | date |  |
| Valid to | date |  |
| Detail | icon |  |
