---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages"
domain: "Modules"
element_id: 1634389
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 SalesPackageDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages

## 📝 Notes

{ADD PCG-2464/}

## 🔗 Connections (2)

- → Dependency: [[SalesPackageItemDto]]
- ← Dependency: [[SalesPackageResponse]]

## 📊 Appears In (2 diagrams)

- Logical: Sales Packages
- Logical: SalesPackageDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| description | string |  |
| active | boolean |  |
| items | SalesPackageItemDto |  |
