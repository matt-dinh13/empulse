---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Profile"
domain: "Modules"
element_id: 1715102
diagrams: 2
connections: 8
tags:
  - class
  - modules
---

# 🔷 ProductProfileInputDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Profile

## 🔗 Connections (8)

- → Dependency: [[InstallmentScheduleMethodTypeDto (Enumeration 1715108)]]
- → Dependency: [[ProductTypeDto (Enumeration 1873247)]]
- ← Dependency: [[product-profiles]]
- → Dependency: [[InstallmentScheduleMethodTypeDto (Enumeration 1715108)]]
- → Dependency: [[First Day of Billing Period Algorithm Type]]
- → Dependency: [[InitialTransactionTypeDto]]
- → Dependency: [[Day Count Method Type]]
- → Dependency: [[First Due Date Algorithm Type]]

## 📊 Appears In (2 diagrams)

- Logical: Product Profile
- Logical: ProductProfileDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| active | boolean |  |
| productType | ProductTypeDto |  |
| initialTransactionType | InitialTransactionTypeDto |  |
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
