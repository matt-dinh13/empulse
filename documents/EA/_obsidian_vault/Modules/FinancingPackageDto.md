---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Packages"
domain: "Modules"
element_id: 1860731
diagrams: 3
connections: 9
tags:
  - class
  - modules
---

# 🔷 FinancingPackageDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Packages

## 🔗 Connections (9)

- ← Dependency: [[FinancingPackageResponse]]
- → Dependency: [[SalesDescriptionDto]]
- → Dependency: [[Financing Package Flag]]
- → Dependency: [[FinancingPackageInitialPaymentDto]]
- → Dependency: [[{MOD}FinancingPackageCriterionDto]]
- → Dependency: [[FinancingPackageSubventionDto]]
- → Dependency: [[FinancingPackageSchemeDto]]
- ← Dependency: [[financing-packages]]
- ← Dependency: [[ProductExportDto]]

## 📊 Appears In (3 diagrams)

- Logical: Financing Packages
- Logical: FinancingPackageDto
- Logical: Product catalog export/import

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| versionNumber | integer |  |
| versionStatus | Version Status |  |
| validFrom | string |  |
| validTo | string |  |
| activationDate | string |  |
| plannedActivationDate | string |  |
| terminationDate | string |  |
| description | string |  |
| initialPayments | FinancingPackageInitialPaymentDto |  |
| descriptionSale | string |  |
| criteria | {MOD}FinancingPackageCriterionDto |  |
| schemes | FinancingPackageSchemeDto |  |
| flags | Financing Package Flag |  |
| subventions | FinancingPackageSubventionDto |  |
| salesDesriptions | SalesDescriptionDto |  |
