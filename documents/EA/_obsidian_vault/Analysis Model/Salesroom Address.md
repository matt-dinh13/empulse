---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model"
domain: "Analysis Model"
element_id: 1556403
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Salesroom Address

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model

## 📝 Notes

Contains all information about assignment of a salesroom to address.

## 🔗 Connections (4)

- ← Dependency: [[Address Type]]
- → Association: [[Address]]
- → Dependency «uses»: [[SN Address Role]]
- → Aggregation: [[Salesroom (Class 1556394)]]

## 📊 Appears In (3 diagrams)

- Logical: Address - CORE
- Logical: Salesroom
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | Boolean |  |
| Role | SN Address Role |  |
