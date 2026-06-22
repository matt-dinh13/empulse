---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Logical Data Model"
domain: "Modules"
element_id: 1744501
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 Commodity Validation Rule

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Logical Data Model

## 📝 Notes

Set of rules for validation of particular offer/contract commodity.

## 🔗 Connections (4)

- → Dependency: [[{MOD}Commodity Validation Type]]
- → Dependency: [[Commodity Validation External Type (Class 1744497)]]
- ← Aggregation: [[Commodity Validation Rule Criteria]]
- ← Dependency: [[Commodity duplication validation]]

## 📊 Appears In (2 diagrams)

- Logical: Commodity validation log
- Logical: Commodity Validation Rules

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Order | int |  |
| Valid From  | Date |  |
| Valid To | Date |  |
| Type | {MOD}Commodity Validation Type |  |
| External Type | {MOD}Commodity Validation Type |  |
| Archived | boolean | false |
