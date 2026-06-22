---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator"
domain: "Modules"
element_id: 1878423
diagrams: 2
connections: 6
tags:
  - class
  - modules
---

# 🔷 OfferRecalculationRequestDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator

## 🔗 Connections (6)

- → Dependency: [[structuredParametersDto]]
- → Dependency: [[ClientDto]]
- → Dependency: [[CommodityDto]]
- → Dependency: [[FirstDueDateParamsDto]]
- → Dependency: [[OriginalOfferDto]]
- ← Dependency: [[recalculation]]

## 📊 Appears In (2 diagrams)

- Logical: OfferRecalculationRequest
- Logical: Product Calculator

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| client | ClientDto |  |
| commodities | CommodityDto |  |
| firstDueDateParams | FirstDueDateParamsDto |  |
| installmentScheduleMethod | string |  |
| jointLendingPartnerCode | string |  |
| originalOffer | int |  |
| qualificationCriteria | QualificationCriteriaDto |  |
| salesroomCode | string |  |
| serviceCodes | string |  |
| parameters | string |  |
| structuredParameters | structuredParametersDto |  |
