---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product catalog export/import"
domain: "Modules"
element_id: 1867105
diagrams: 3
connections: 5
tags:
  - class
  - modules
---

# 🔷 TariffDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product catalog export/import

## 🔗 Connections (5)

- → Dependency: [[LocalizedString (Class 1873246)]]
- → Dependency: [[SalesDescriptionDto]]
- → Dependency: [[{MOD}TariffItemDto]]
- ← Dependency: [[tariffs]]
- ← Dependency: [[ProductExportDto]]

## 📊 Appears In (3 diagrams)

- Logical: Product catalog export/import
- Logical: Tariff
- Logical: TariffDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| currency | string |  |
| name | string |  |
| versionNumber | int |  |
| versionStatus | string |  |
| plannedActivationDate | string |  |
| tariffItems | TariffItem |  |
| activationDate | string |  |
| serviceRestriction | string |  |
| active | boolean |  |
| approvalDocument | string |  |
| textToDisplay | LocalizedString |  |
| salesDescription | SalesDescriptionDto |  |
| updatedByEmployeeNumber | string |  |
