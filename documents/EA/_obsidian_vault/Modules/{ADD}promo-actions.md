---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Promo Actions"
domain: "Modules"
element_id: 1824507
diagrams: 2
connections: 11
tags:
  - class
  - modules
---

# 🔷 {ADD}promo-actions

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Promo Actions

## 📝 Notes

{ADD PCG-4737/}
https://prc.{environment}/openapi/v1/promo-actions

## 🔗 Connections (11)

- → Dependency: [[{ADD}PromoActionInputDto]]
- → Dependency: [[POST promo-actions]]
- → Dependency: [[GET promo-actions by code]]
- → Dependency: [[GET promo-actions by search]]
- → Dependency: [[PUT promo-actions]]
- → Dependency: [[Paging]]
- → Dependency: [[{ADD}PromoActionResponse]]
- → Dependency: [[{ADD}PromoActionSearchParametersDto]]
- → Dependency «path»: [[{ADD}active (Class 1824504)]]
- → Dependency: [[{ADD}PromoActionDto]]
- ← Dependency «path»: [[Product catalog API (Class 1873281)]]

## 📊 Appears In (2 diagrams)

- Logical: Promo Actions
- Logical: Promo Actions API
