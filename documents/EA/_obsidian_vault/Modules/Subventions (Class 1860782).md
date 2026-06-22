---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/User Interface"
domain: "Modules"
element_id: 1860782
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 Subventions

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/User Interface

## 📝 Notes

Displays list of FPSubventions
Ordered by FPSubvention.(subventionScheme, commodityType) asc
If any column is empty then is hidden.
No title.

## 📊 Appears In (2 diagrams)

- Custom: Set Financing Package
- Custom: Show Financing Package

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Subvention Scheme Code | string |  |
| Subvention Scheme Name | string |  |
| Commodity Type | string |  |
| Fixed Amount | decimal |  |
| Percentage | decimal |  |
| Update | icon |  |
| Delete | icon |  |
| Percentage based on | string |  |
| Allocation to client | decimal |  |
| Purpose | string |  |
