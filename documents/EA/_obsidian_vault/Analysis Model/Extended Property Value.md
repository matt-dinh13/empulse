---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Extended properties/Logical Data Model"
domain: "Analysis Model"
element_id: 1607794
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 Extended Property Value

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Extended properties/Logical Data Model

## 📝 Notes

Holds specific values of extended properties for each specific object (e.g. contract or client). Has a direct link to the object itself and to an extended property item that the value belongs to.

## 🔗 Connections (5)

- → Dependency: [[{MOD}Contract (Class 1879596)]]
- → Dependency: [[Client (Class 1750952)]]
- → Dependency: [[{MOD}Partner]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Association: [[Extended Property Item]]

## 📊 Appears In (1 diagrams)

- Logical: Common - Extended Properties

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | Boolean |  |
| Created By | User |  |
| Creation Date | Datetime |  |
| Parent ID | Number (18,0) |  |
| Value | Text |  |
| Version | Number (18,0) |  |
