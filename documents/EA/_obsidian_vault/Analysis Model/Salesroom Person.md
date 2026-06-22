---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Person/Logical Data Model"
domain: "Analysis Model"
element_id: 1556389
diagrams: 3
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Salesroom Person

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Person/Logical Data Model

## 📝 Notes

Contains all information about assignment of a salesroom to contact person.

## 🔗 Connections (6)

- ← Dependency: [[Contact Person Type]]
- ← Dependency: [[Contact Person Type]]
- ← Association: [[Salesroom Contact]]
- ← Aggregation: [[Person (Class 1686140)]]
- → Aggregation: [[Salesroom (Class 1556394)]]
- → Association: [[Salesroom Person Type]]

## 📊 Appears In (3 diagrams)

- Logical: Common - Person
- Logical: Salesroom
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | Boolean |  |
| Registration Date | Date |  |
| Type | Salesroom Person Type |  |
