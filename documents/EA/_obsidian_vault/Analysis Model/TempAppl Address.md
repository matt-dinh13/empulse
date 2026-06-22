---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model"
domain: "Analysis Model"
element_id: 1771475
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 TempAppl Address

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model

## 📝 Notes

Address (client's or client's employer) as entered on application form.

## 🔗 Connections (4)

- → Dependency: [[Country (Class 1461195)]]
- → Aggregation: [[{MOD}TempAppl Employment]]
- → Aggregation: [[TempAppl Person Address]]
- → Aggregation: [[TempAppl Client Address]]

## 📊 Appears In (2 diagrams)

- Logical: Temporary Application - overview
- Logical: Temporary Application - Person and Employment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Block | Short text |  |
| Block set | Short text |  |
| Country | Country |  |
| District | KeyOrValue Type |  |
| Flat | Text |  |
| Floor | Text |  |
| House number | Short text |  |
| Is Utility Bill Address | Boolean | false |
| Landmark | Text |  |
| Locality | Text |  |
| Region | KeyOrValue Type |  |
| Street name | Text |  |
| Sub-district | KeyOrValue Type |  |
| Time at address | Month and year |  |
| Town | KeyOrValue Type |  |
| ZIP code | KeyOrValue Type |  |
