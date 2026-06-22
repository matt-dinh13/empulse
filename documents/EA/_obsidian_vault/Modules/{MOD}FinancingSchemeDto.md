---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Schemes"
domain: "Modules"
element_id: 1831447
diagrams: 3
connections: 6
tags:
  - class
  - modules
---

# 🔷 {MOD}FinancingSchemeDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Schemes

## 🔗 Connections (6)

- → Dependency: [[SalesDescriptionDto]]
- → Dependency: [[Version Status (Enumeration 1873251)]]
- ← Dependency: [[financing-schemes]]
- → Dependency: [[FinancigSchemeVariantDto]]
- ← Dependency: [[FinancingSchemeResponse]]
- ← Dependency: [[ProductExportDto]]

## 📊 Appears In (3 diagrams)

- Logical: Financing Schemes
- Logical: FinancingSchemeDto
- Logical: Product catalog export/import

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| versionNumber | int |  |
| versionStatus | Version Status |  |
| validFrom | date |  |
| validTo | date |  |
| activationDate | string |  |
| plannedActivationDate | string |  |
| terminationDate | string |  |
| tariffCode | string |  |
| currency | string |  |
| description | string |  |
| descriptionSale | string |  |
| minimalTransactionAmount | integer |  |
| maximalTransactionAmount | integer |  |
| installmentPlanScheme | string |  |
| coolingOffPeriodScheme | string |  |
| variant | FinancigSchemeVariantDto |  |
| {ADD}salesDescriptions | SalesDescriptionDto |  |
