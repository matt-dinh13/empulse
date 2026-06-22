---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Type Definition/Logical Data Model"
domain: "Modules"
element_id: 1856881
diagrams: 1
connections: 6
tags:
  - class
  - modules
---

# 🔷 Document Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Type Definition/Logical Data Model

## 📝 Notes

This entity contains definition of all types of documents used in the system.

## 🔗 Connections (6)

- ← Aggregation: [[Document Type Attribute]]
- → Dependency: [[Multi Photo Format Type]]
- → Dependency: [[Document Owner Type]]
- ← Aggregation: [[Document Type Page Specification]]
- ← Aggregation: [[Document Type Flag]]
- ← Association: [[Document (Class 1856877)]]

## 📊 Appears In (1 diagrams)

- Logical: Document Type - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Name | Text |  |
| Active Flag | boolean |  |
| Owner | Document Owner Type |  |
| Sort Order | Number |  |
| BarCodePrefix | Char[2] |  |
| Security level | number |  |
| Multi Photo Format | Multi Photo Format Type |  |
| {ADD}Retention Length | int |  |
