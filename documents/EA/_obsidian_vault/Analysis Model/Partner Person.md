---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Logical Data Model"
domain: "Analysis Model"
element_id: 1595599
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Partner Person

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Logical Data Model

## 📝 Notes

Contains all information about assignment of a partner to contact person.

## 🔗 Connections (6)

- ← Dependency: [[Contact Person Type]]
- ← Dependency: [[Contact Person Type]]
- ← Association: [[Partner Contact]]
- → Association: [[Person (Class 1686140)]]
- → Dependency: [[Partner Person Type]]
- → Aggregation: [[{MOD}Partner]]

## 📊 Appears In (2 diagrams)

- Logical: Partner
- Logical: SNM Partner Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | Boolean |  |
| Registration Date | Date |  |
| Type | Partner Person Type |  |
