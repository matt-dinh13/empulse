---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services"
domain: "Modules"
element_id: 1881052
diagrams: 2
connections: 5
tags:
  - class
  - modules
---

# 🔷 service-relations

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services

## 📝 Notes

{DEL PCG-3094} https://prcwl.{environment}/product-catalog/openapi/v1/service-relations {/DEL}

{ADD PCG-3094} https://prc.{environment}/openapi/v1/service-relations {/ADD}

## 🔗 Connections (5)

- ← Dependency «path»: [[Product catalog API (Class 1873281)]]
- → Dependency: [[ServiceResponse]]
- → Realisation: [[PUT service-relations]]
- → Dependency: [[{MOD}ServiceRelationsInputDto]]
- → Realisation: [[GET service-relations]]

## 📊 Appears In (2 diagrams)

- Logical: Service
- Logical: Service API
