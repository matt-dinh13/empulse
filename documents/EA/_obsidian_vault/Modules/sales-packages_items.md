---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages"
domain: "Modules"
element_id: 1634386
diagrams: 2
connections: 6
tags:
  - class
  - modules
---

# 🔷 sales-packages/items

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages

## 📝 Notes

{DEL PCG-3094} https://prcwl.{environment}/product-catalog/openapi/v1/sales-packages/items {/DEL}

{ADD PCG-3094} https://prc.{environment}/openapi/v1/sales-packages/items {/ADD}

## 🔗 Connections (6)

- → Realisation: [[GET sales package items]]
- → Realisation: [[DELETE sales package items]]
- → Dependency: [[SalesPackageItemIdDto]]
- → Realisation: [[POST sales package items]]
- → Dependency: [[SalesPackageResponse]]
- ← Dependency «path»: [[Product catalog API (Class 1873281)]]

## 📊 Appears In (2 diagrams)

- Logical: Sales Packages
- Logical: Sales Packages API
