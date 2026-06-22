---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/PCG/PH/BRPH-2423 - Debt Purchase Support in HOSEL"
domain: "Requirements Model"
element_id: 1879096
diagrams: 5
connections: 5
tags:
  - class
  - requirements-model
---

# 🔷 Accounting Method

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/PH/BRPH-2423 - Debt Purchase Support in HOSEL

## 📝 Notes

Defines possible accounting methods which can be related to product
Currently there are defined all methods, but can be customized for particular country
Used in external systems (BOOK, etc.).

## 🔗 Connections (5)

- ← Dependency: [[Accounting Method]]
- ← Dependency: [[{MOD}Maintenance of financial account]]
- ← Dependency: [[{MOD}MTCACC]]
- ← Dependency: [[MTCACC service parameter validation]]
- ← Dependency: [[Product Profile (Class 1879121)]]

## 📊 Appears In (5 diagrams)

- Custom: PCG-5611 BRPH-2423 - Debt Purchase Support in HOSEL - PRC
- Custom: Validation Rules
- Logical: MTCACC
- Logical: MTCACC
- Logical: Product Profile

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Active | Boolean | true |
