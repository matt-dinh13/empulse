---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs"
domain: "Modules"
element_id: 1867104
diagrams: 2
connections: 10
tags:
  - class
  - modules
---

# 🔷 tariffs

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs

## 📝 Notes

{DEL PCG-3094} https://prcwl.{environment}/product-catalog/openapi/v1/tariffs {/DEL}

{ADD PCG-3094} https://prc.{environment}/openapi/v1/tariffs {/ADD}

## 🔗 Connections (10)

- → Realisation: [[GET tariffs]]
- → Dependency: [[TariffResponse]]
- → Realisation: [[{MOD}POST tariffs]]
- → Dependency: [[TariffDto (Class 1867105)]]
- → Dependency «path»: [[items]]
- → Realisation: [[DELETE tariffs]]
- → Dependency: [[TariffSerchParametersDto]]
- → Realisation: [[{MOD}PUT tariffs]]
- → Dependency: [[{MOD}Dependencies]]
- ← Dependency «path»: [[Product catalog API (Class 1873281)]]

## 📊 Appears In (2 diagrams)

- Logical: Tariff
- Logical: Tariff API
