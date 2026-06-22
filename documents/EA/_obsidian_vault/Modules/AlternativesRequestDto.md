---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator"
domain: "Modules"
element_id: 1878410
diagrams: 2
connections: 8
tags:
  - class
  - modules
---

# 🔷 AlternativesRequestDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator

## 🔗 Connections (8)

- → Dependency: [[structuredParametersDto]]
- → Dependency: [[ChosenOfferDto]]
- ← Dependency: [[alternatives]]
- → Dependency: [[ClientDto]]
- → Dependency: [[QualificationCriteriaDto]]
- → Dependency: [[OfferCriteriaDto]]
- → Dependency: [[CommodityDto]]
- → Dependency: [[FirstDueDateParamsDto]]

## 📊 Appears In (2 diagrams)

- Logical: AlternativesRequest
- Logical: Product Calculator

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| chosenOffer | ChosenOfferDto |  |
| client | ClientDto |  |
| comodities | CommodityDto |  |
| currency | string |  |
| firstDueDateParams | FirstDueDateParamsDto |  |
| offerCriteria | OfferCriteriaDto |  |
| qualificationCriteria | QualificationCriteriaDto |  |
| requiredServiceCodes | string |  |
| salesroomCode | string |  |
| parameters | string |  |
| structuredParameters | structuredParametersDto |  |
