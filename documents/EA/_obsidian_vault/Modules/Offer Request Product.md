---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Logical Data Model/Request"
domain: "Modules"
element_id: 1170127
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Offer Request Product

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Logical Data Model/Request

## 📝 Notes

Available Products for offer calculation.
If not defined then all valid products are used for calculation.

## 🔗 Connections (3)

- → Aggregation: [[Offer Request]]
- → Dependency: [[Version ID Type]]
- → Dependency: [[Version ID Type]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Product | Version ID Type |  |
| Product Variant | string |  |
