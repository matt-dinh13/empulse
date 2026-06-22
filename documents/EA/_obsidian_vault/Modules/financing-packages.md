---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Packages"
domain: "Modules"
element_id: 1860728
diagrams: 2
connections: 11
tags:
  - class
  - modules
---

# 🔷 financing-packages

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Packages

## 📝 Notes

{DEL PCG-3094} https://prcwl.{environment}/product-catalog/openapi/v1/financing-packages {/DEL}

{ADD PCG-3094} https://prc.{environment}/openapi/v1/financing-packages {/ADD}

## 🔗 Connections (11)

- → Realisation: [[PUT financing package]]
- → Dependency: [[{MOD}FinancingPackageDependencyDto]]
- → Realisation: [[POST financing package]]
- → Dependency: [[FinancingPackageInputDto]]
- → Dependency: [[FinancingPackageSearchParametersDto]]
- → Dependency: [[FinancingPackageResponse]]
- → Realisation: [[GET financing package]]
- → Dependency: [[FinancingPackageDto]]
- → Realisation: [[DELETE financing package]]
- ← Dependency «path»: [[Product catalog API (Class 1873281)]]
- ← Dependency: [[FinancingPackageType]]

## 📊 Appears In (2 diagrams)

- Logical: Financing Packages
- Logical: Financing Packages API
