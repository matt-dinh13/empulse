---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Marketing Action"
domain: "Modules"
element_id: 1721380
diagrams: 2
connections: 8
tags:
  - class
  - modules
---

# 🔷 marketing-actions

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Marketing Action

## 📝 Notes

{DEL PCG-3094} https://prcwl.{environment}/product-catalog/openapi/v1/marketing-actions {/DEL}

{ADD PCG-3094} https://prc.{environment}/openapi/v1/marketing-actions {/ADD}

## 🔗 Connections (8)

- → Realisation: [[PUT manufacturers]]
- → Dependency: [[MarketingActionDto]]
- → Dependency «path»: [[search (Class 1721381)]]
- → Realisation: [[POST marketing action]]
- → Dependency: [[MarketingActionResponse]]
- → Realisation: [[GET marketing-actions]]
- → Dependency «path»: [[active (Class 1721379)]]
- ← Dependency «path»: [[Product catalog API (Class 1873281)]]

## 📊 Appears In (2 diagrams)

- Logical: Marketing Action
- Logical: Marketing Action API
