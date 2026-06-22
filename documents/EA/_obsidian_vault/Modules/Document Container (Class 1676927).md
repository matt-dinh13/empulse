---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Container/Logical Data Model"
domain: "Modules"
element_id: 1676927
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Document Container

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Container/Logical Data Model

## 📝 Notes

This entity represents so called document container. The container groups documents in order to assign them to a product.

## 🔗 Connections (2)

- → Dependency: [[Document Container Type (Class 1676929)]]
- ← Aggregation: [[Document Container to Document Type (Class 1676928)]]

## 📊 Appears In (1 diagrams)

- Logical: Document Container

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Name | Text |  |
| Active | boolean | true |
| Type | Document Container Type |  |
