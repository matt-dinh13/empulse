---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Bundles"
domain: "Modules"
element_id: 1843562
diagrams: 2
connections: 8
tags:
  - class
  - modules
---

# 🔷 {ADD}bundles

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Bundles

## 📝 Notes

{ADD PCG-4926/}
https://prc.{environment}/openapi/v1/bundles

## 🔗 Connections (8)

- → Realisation: [[{ADD}POST bundle search]]
- → Dependency: [[{ADD}BundleResponse]]
- → Realisation: [[{ADD}GET bundle by code]]
- → Realisation: [[{ADD}PUT bundle]]
- → Dependency «path»: [[{ADD}search]]
- → Realisation: [[{ADD}POST bundle]]
- → Dependency: [[{ADD}BundleInputDto]]
- ← Dependency «path»: [[Product catalog API (Class 1873281)]]

## 📊 Appears In (2 diagrams)

- Logical: Bundles
- Logical: Bundles API
