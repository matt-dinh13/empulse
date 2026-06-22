---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model"
domain: "Analysis Model"
element_id: 1595606
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Partner Address

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model

## 📝 Notes

Contains all information about assignment of a partner to address.

## 🔗 Connections (4)

- ← Dependency: [[Address Type]]
- → Association: [[Address]]
- → Dependency: [[SN Address Role]]
- → Aggregation: [[{MOD}Partner]]

## 📊 Appears In (3 diagrams)

- Logical: Address - CORE
- Logical: Partner
- Logical: SNM Partner Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | Boolean |  |
| Role | SN Address Role |  |
