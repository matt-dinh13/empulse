---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Container/Logical Data Model"
domain: "Analysis Model"
element_id: 1485210
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Document Container

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Container/Logical Data Model

## 📝 Notes

This entity represents so called document container. The container groups documents in order to assign them to a product.

## 🔗 Connections (4)

- → Dependency: [[Document Container Type]]
- ← Aggregation: [[Document Container to Document Type]]
- ← Dependency: [[{MOD}Container]]
- ← Association: [[Product to Document Container]]

## 📊 Appears In (2 diagrams)

- Logical: Document Container
- Logical: Product Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Name | Text |  |
| Active | boolean | true |
| Type | Document Container Type |  |
