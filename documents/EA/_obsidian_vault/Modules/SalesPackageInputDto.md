---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages"
domain: "Modules"
element_id: 1634400
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 SalesPackageInputDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages

## 🔗 Connections (2)

- → Dependency: [[SalesPackageItemInputDto]]
- ← Dependency: [[sales-packages]]

## 📊 Appears In (2 diagrams)

- Logical: Sales Packages
- Logical: SalesPackageDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| active | boolean |  |
| code | string |  |
| description | string |  |
| items | SalesPackageItemInputDto |  |
| name | string |  |
