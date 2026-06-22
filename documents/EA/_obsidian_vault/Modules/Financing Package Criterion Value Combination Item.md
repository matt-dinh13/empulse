---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Logical Data Model"
domain: "Modules"
element_id: 1865393
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Financing Package Criterion Value Combination Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Logical Data Model

## 📝 Notes

One item of allowed combinations of Financing Package Criterion Values.
Combination of Type and Value must be unique in scope of superior Financing Package Criterion Value Combination.

## 🔗 Connections (2)

- → Dependency: [[{MOD}Financing Package Criterion Type]]
- → Aggregation: [[Financing Package Criterion Value Combination]]

## 📊 Appears In (1 diagrams)

- Logical: Financing Package Criterion

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type | string |  |
| Value | string |  |
