---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom"
domain: "Modules"
element_id: 1736103
diagrams: 2
connections: 6
tags:
  - class
  - modules
---

# 🔷 salesrooms

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom

## 📝 Notes

{DEL PCG-3094} https://prcwl.{environment}/product-catalog/openapi/v1/salesrooms {/DEL}

{ADD PCG-3094} https://prc.{environment}/openapi/v1/salesrooms {/ADD}

## 🔗 Connections (6)

- → Realisation: [[GET salesrooms]]
- → Dependency: [[SalesroomRespose]]
- → Dependency «path»: [[products]]
- → Dependency: [[SalesroomSearchParameters]]
- → Dependency «path»: [[sales-packages (Class 1736101)]]
- ← Dependency «path»: [[Product catalog API (Class 1873281)]]

## 📊 Appears In (2 diagrams)

- Logical: Salesroom
- Logical: Salesroom API
