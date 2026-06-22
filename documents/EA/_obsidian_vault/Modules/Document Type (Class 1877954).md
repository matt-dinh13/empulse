---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Type Definition/Logical Data Model"
domain: "Modules"
element_id: 1877954
diagrams: 1
connections: 6
tags:
  - class
  - modules
---

# 🔷 Document Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Type Definition/Logical Data Model

## 📝 Notes

This entity contains definition of all types of documents used in the system.

## 🔗 Connections (6)

- → Dependency: [[Document Owner Type (Class 1877955)]]
- ← Aggregation: [[Document Type Attribute (Class 1877952)]]
- ← Aggregation: [[Document Type Flag (Class 1877951)]]
- → Dependency: [[Multi Photo Format Type (Enumeration 1877948)]]
- ← Aggregation: [[Document Type Page Specification (Class 1877947)]]
- ← Association: [[Document (Class 1880216)]]

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
