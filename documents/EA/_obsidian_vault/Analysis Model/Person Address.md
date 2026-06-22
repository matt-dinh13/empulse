---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model"
domain: "Analysis Model"
element_id: 1686143
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 Person Address

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model

## 📝 Notes

Contains all information about assignment of Address to Person.
There should be attributes needed to store concrete information about person's address. It means attributes, which shouldn't be on general entity Address.

## 🔗 Connections (5)

- ← Aggregation: [[Address]]
- → Dependency: [[RelatedPersonAddress]]
- ← Aggregation: [[Address (Boundary 1595608)]]
- → Dependency: [[Person Address Role]]
- → Aggregation: [[Person (Class 1686140)]]

## 📊 Appears In (2 diagrams)

- Logical: Address - CORE
- Logical: Common - Person

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | Boolean |  |
| Registered date | Date |  |
| Role | Person Address Role |  |
