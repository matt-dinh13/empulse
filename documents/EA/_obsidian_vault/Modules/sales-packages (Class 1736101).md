---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom"
domain: "Modules"
element_id: 1736101
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 sales-packages

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom

## 📝 Notes

{DEL PCG-3094} https://prcwl.{environment}/product-catalog/openapi/v1/salesrooms/{codes}/sales-packages {/DEL}

{ADD PCG-3094} https://prc.{environment}/openapi/v1/salesrooms/{codes}/sales-packages {/ADD}

## 🔗 Connections (4)

- → Realisation: [[POST salesrooms sales packages]]
- → Realisation: [[DELETE salesrooms sales packages]]
- ← Dependency «path»: [[salesrooms (Class 1736103)]]
- → Dependency: [[SalesroomItemResponse]]

## 📊 Appears In (2 diagrams)

- Logical: Salesroom
- Logical: Salesroom API
