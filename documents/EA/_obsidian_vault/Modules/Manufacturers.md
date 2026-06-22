---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Manufacturer"
domain: "Modules"
element_id: 1718383
diagrams: 2
connections: 8
tags:
  - class
  - modules
---

# 🔷 manufacturers

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Manufacturer

## 📝 Notes

{DEL PCG-3094} https://prcwl.{environment}/product-catalog/openapi/v1/manufacturers {/DEL}

{ADD PCG-3094} https://prc.{environment}/openapi/v1/manufacturers {/ADD}

## 🔗 Connections (8)

- → Realisation: [[PUT manufacturers (UseCase 1841484)]]
- → Realisation: [[POST manufacturers]]
- → Realisation: [[GET manufacturers]]
- → Dependency: [[ManufacturerResponse]]
- → Dependency: [[search]]
- → Dependency: [[ManufacturerDto]]
- → Dependency: [[active (Class 1718379)]]
- ← Dependency «path»: [[Product catalog API (Class 1873281)]]

## 📊 Appears In (2 diagrams)

- Logical: Manufacturer
- Logical: Manufacturer API
