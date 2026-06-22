---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product catalog export/import"
domain: "Modules"
element_id: 1871722
diagrams: 1
connections: 8
tags:
  - class
  - modules
---

# 🔷 ProductExportDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product catalog export/import

## 🔗 Connections (8)

- → Dependency: [[{MOD}FinancingSchemeDto]]
- → Dependency: [[FinancingPackageDto]]
- ← Dependency: [[ProductExportResponse]]
- ← Dependency: [[product-export]]
- → Dependency: [[{MOD}ServiceDto]]
- → Dependency: [[ProductProfileDto]]
- → Dependency: [[{MOD}ProductDto]]
- → Dependency: [[TariffDto (Class 1867105)]]

## 📊 Appears In (1 diagrams)

- Logical: Product catalog export/import

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| tariffs | TariffDto |  |
| services | {MOD}ServiceDto |  |
| productProfiles | ProductProfileDto |  |
| financingSchemes | {MOD}FinancingSchemeDto |  |
| financingPackages | FinancingPackageDto |  |
| products | {MOD}ProductDto |  |
