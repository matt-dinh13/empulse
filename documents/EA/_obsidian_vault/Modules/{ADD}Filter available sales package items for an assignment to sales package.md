---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface"
domain: "Modules"
element_id: 1280142
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Filter available sales package items for an assignment to sales package

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface

## 📝 Notes

{ADD PCG-822_6/}
Algorithm for filtering of sales package items in Available Products and Available Services grids.

User can fill search criteria (code, name, valid on date) for filtering sales package items and after pressing on Search button system filters grids according entered search criteria.
For example:
If both code and name are filled, only sales package items having both properties are displayed.

For all text fields, it does not have to be exact match (case insensitive and full text search).
For example:
For input equal to MuJProD4, output can be equal to MmUjproD48

## 🔗 Connections (2)

- ← Dependency: [[Available Services]]
- ← Dependency: [[Available Products (Object 1792917)]]

## 📊 Appears In (1 diagrams)

- Custom: Assign Sales Package Items
