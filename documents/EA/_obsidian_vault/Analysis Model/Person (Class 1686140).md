---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1686140
diagrams: 6
connections: 22
tags:
  - class
  - analysis-model
---

# 🔷 Person

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model

## 📝 Notes

This entity keeps personal data of persons except name of client (see Client Snapshot entity)

## 🔗 Connections (21)

- ← Dependency: [[Contact Person Type]]
- ← Dependency: [[Contact Person Type]]
- ← Dependency: [[Contact Person Type]]
- ← Dependency: [[Contact Person]]
- ← Association: [[Salesman (Class 1556402)]]
- → Aggregation: [[Salesroom Person]]
- ← Association: [[Partner Person]]
- ← Dependency: [[Salesman Type]]
- ← Dependency: [[Salesman Type]]
- ← Dependency: [[Salesman Type]]
- → Dependency: [[PersonName]]
- → Dependency: [[PersonName]]
- ← Aggregation: [[PersonContact]]
- → Dependency: [[PersonName]]
- → Dependency: [[PersonName]]
- ← Aggregation: [[Person Address]]
- → Dependency: [[Gender (Enumeration 1686141)]]
- → Dependency: [[PersonName]]
- → Association: [[Person Document]]
- → Dependency: [[PersonName]]
- → Aggregation: [[Additional Person]]

## 📊 Appears In (6 diagrams)

- Logical: Client management
- Logical: Common - Person
- Logical: Partner
- Logical: Salesroom
- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Birth Date | Date |  |
| Full Name | Text |  |
| Gender | Gender |  |
| Name 1 | Text |  |
| Name 2 | Text (30) |  |
| Name 3 | Text (30) |  |
| Name 4 | Text (30) |  |
| Name 5 | Text (30) |  |
| Name 6 | Text (30) |  |
| Birth Place | Text (90) |  |
| National Identification Number | Text (20) |  |
