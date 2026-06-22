---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model"
domain: "Analysis Model"
element_id: 1771452
diagrams: 3
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 TempAppl Person

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model

## 📝 Notes

Related person as entered on application form.

## 🔗 Connections (8)

- → Aggregation: [[{MOD}Temporary Application]]
- → Dependency: [[Person Relation Type]]
- ← Aggregation: [[TempAppl Document]]
- ← Aggregation: [[{MOD}TempAppl Remittance]]
- ← Aggregation: [[{MOD}TempAppl Employment]]
- ← Aggregation: [[TempAppl Person Address]]
- ← Aggregation: [[TempAppl Contact]]
- → Dependency: [[Gender (Enumeration 1686141)]]

## 📊 Appears In (3 diagrams)

- Logical: Temporary Application - detail
- Logical: Temporary Application - overview
- Logical: Temporary Application - Person and Employment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Additional Person Relation Type | Person Relation Type |  |
| Birth Date | Date |  |
| Gender | Gender |  |
| Name 1 | Text (90) |  |
| Name 2 | Text (30) |  |
| Name 3 | Text (30) |  |
| Name 4 | Text (30) |  |
| Name 5 | Text (30) |  |
| Name 6 | Text (30) |  |
| Birth Place | Text (90) |  |
| National Identification number | Text (20) |  |
| Remitter | boolean |  |
| Full name | Text |  |
| Order | integer |  |
| External ID | string |  |
