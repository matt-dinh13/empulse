---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model"
domain: "Analysis Model"
element_id: 1461195
diagrams: 8
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 Country

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model

## 📝 Notes

Country

## 🔗 Connections (7)

- ← Aggregation: [[Region - IN]]
- ← Dependency «use»: [[Address]]
- → Dependency: [[{DEL}Country]]
- ← Dependency: [[Citizenship]]
- ← Dependency: [[{MOD}Client Snapshot]]
- ← Dependency: [[TempAppl Address]]
- ← Dependency: [[{MOD}Temporary Application]]

## 📊 Appears In (8 diagrams)

- Logical: Address - CORE
- Logical: Address - ID
- Logical: Address - IN
- Logical: Address - KZ
- Logical: Address - PH
- Logical: Enumerations
- Logical: Temporary Application - Attributes, Types and Enumerations
- Logical: Temporary Application - Person and Employment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Alpha2 | Text(2) |  |
| Alpha3 | Text(3) |  |
| Numeric Code | Number (3) |  |
| English Name | Text |  |
| Local Name | Text |  |
| EU Country | Boolean |  |
| Is Default | Boolean |  |
