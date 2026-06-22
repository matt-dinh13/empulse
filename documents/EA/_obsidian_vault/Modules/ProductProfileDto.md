---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product catalog export/import"
domain: "Modules"
element_id: 1715104
diagrams: 3
connections: 3
tags:
  - class
  - modules
---

# 🔷 ProductProfileDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product catalog export/import

## 🔗 Connections (3)

- ← Dependency: [[ProductProfileResponse]]
- ← Dependency: [[product-profiles]]
- ← Dependency: [[ProductExportDto]]

## 📊 Appears In (3 diagrams)

- Logical: Product catalog export/import
- Logical: Product Profile
- Logical: ProductProfileDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| active | boolean |  |
| productType | string |  |
| initialTransactionType | string |  |
| isDebit | boolean |  |
| accountingMethod | string |  |
| contractNegotiationProcess | string |  |
| firstDueDateAlgorithm | string |  |
| firstDayOfBillingPeriodAlgorithm | string |  |
| installmentScheduleMethodDefault | string |  |
| installmentScheduleMethodAlternative | string |  |
| maxDuration | integer |  |
| businessCategory | string |  |
| dayCountMethod | string |  |
| maxValidityOfPreparedDocuments | integer |  |
| maxDocumentsPreparationPeriod | integer |  |
| applicationFormConfigurations | string |  |
| documentationConfigurations | string |  |
| {ADD}documentationConfiguration | string |  |
