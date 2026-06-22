---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Schemes"
domain: "Modules"
element_id: 1831445
diagrams: 2
connections: 11
tags:
  - class
  - modules
---

# 🔷 financing-schemes

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Schemes

## 📝 Notes

{DEL PCG-3094} https://prcwl.{environment}/product-catalog/openapi/v1/financing-schemes {/DEL}

{ADD PCG-3094} https://prc.{environment}/openapi/v1/financing-schemes {/ADD}

## 🔗 Connections (11)

- → Dependency: [[{MOD}FinancingSchemeDto]]
- → Realisation: [[PUT financing schemes]]
- → Realisation: [[POST financing schemes]]
- → Realisation: [[DELETE financing schemes]]
- → Realisation: [[GET financing schemes]]
- → Dependency: [[{MOD}Financing scheme Dependencies]]
- → Dependency: [[FinancingSchemeInputDto]]
- → Dependency: [[FinancingSchemeResponse]]
- → Dependency: [[FinancingSchemeSearchParametersDto]]
- ← Dependency «path»: [[Product catalog API (Class 1873281)]]
- ← Dependency: [[FinancingSchemeType]]

## 📊 Appears In (2 diagrams)

- Logical: Financing Schemes
- Logical: Financing Schemes API
