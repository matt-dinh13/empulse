---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Profile"
domain: "Modules"
element_id: 1715103
diagrams: 2
connections: 9
tags:
  - class
  - modules
---

# 🔷 product-profiles

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Profile

## 📝 Notes

{DEL PCG-3094} https://prcwl.{environment}/product-catalog/openapi/v1/product-profiles {/DEL}

{ADD PCG-3094} https://prc.{environment}/openapi/v1/product-profiles {/ADD}

## 🔗 Connections (9)

- → Dependency: [[ProductProfileDto]]
- → Realisation: [[POST product-profiles]]
- → Realisation: [[GET product-profiles]]
- → Realisation: [[PUT product-profiles]]
- → Dependency: [[Dependencies]]
- → Dependency: [[productProfileSearchParametersDto]]
- → Dependency: [[ProductProfileResponse]]
- → Dependency: [[ProductProfileInputDto]]
- ← Dependency «path»: [[Product catalog API (Class 1873281)]]

## 📊 Appears In (2 diagrams)

- Logical: Product Profile
- Logical: Product Profile API
