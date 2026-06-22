---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product"
domain: "Modules"
element_id: 1850263
diagrams: 2
connections: 11
tags:
  - class
  - modules
---

# 🔷 products

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product

## 📝 Notes

{DEL PCG-3094} https://prcwl.{environment}/product-catalog/openapi/v1/products {/DEL}

{ADD PCG-3094} https://prc.{environment}/openapi/v1/products {/ADD}

## 🔗 Connections (11)

- ← Dependency: [[Save Lender from offer to application]]
- → Dependency: [[ProductInputDto]]
- → Realisation: [[{MOD}POST products]]
- → Realisation: [[GET products]]
- → Realisation: [[{MOD}PUT products]]
- → Realisation: [[DELETE products]]
- → Dependency: [[ProductResponse]]
- → Dependency: [[ProductSearchParametersDto]]
- → Dependency: [[{ADD}Dependencies]]
- → Dependency: [[{MOD}ProductDto]]
- ← Dependency «path»: [[Product catalog API (Class 1873281)]]

## 📊 Appears In (2 diagrams)

- Logical: Product
- Logical: Product API
