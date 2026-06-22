---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model"
domain: "Analysis Model"
element_id: 1750943
diagrams: 4
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 Employer

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model

## 📝 Notes

Contains all information about employer or university such as name or industry

## 🔗 Connections (5)

- ← Aggregation: [[Address]]
- ← Association: [[{MOD}Employment]]
- → Dependency: [[Industry (Enumeration 1758720)]]
- ← Aggregation: [[Contact (Class 1647755)]]
- ← Aggregation: [[Address (Boundary 1595608)]]

## 📊 Appears In (4 diagrams)

- Logical: Address - CORE
- Logical: Client management
- Logical: Common - Person
- Logical: Enumerations

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Name | KeyOrValue Type |  |
| Employer ID | Text |  |
| Identification | String |  |
| Industry | Industry |  |
