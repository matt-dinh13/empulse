---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/COMMON for Sales Package/Logical Data Model"
domain: "Modules"
element_id: 1285702
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 Sales Package Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/COMMON for Sales Package/Logical Data Model

## 📝 Notes

Item included into Sales Package (Product, Service, etc.)

## 🔗 Connections (4)

- → Dependency: [[{MOD}Product]]
- → Dependency: [[Service (Class 1880804)]]
- → Dependency: [[Sales Package Item Type]]
- → Aggregation: [[Sales Package]]

## 📊 Appears In (1 diagrams)

- Logical: Sales Package

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type | Sales Package Item Type |  |
| Code | string |  |
| Valid From | datetime |  |
| Valid To | datetime |  |
| Archived | boolean | false |
