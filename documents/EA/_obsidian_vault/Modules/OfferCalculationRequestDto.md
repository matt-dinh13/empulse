---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator"
domain: "Modules"
element_id: 1878405
diagrams: 2
connections: 6
tags:
  - class
  - modules
---

# 🔷 OfferCalculationRequestDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator

## 🔗 Connections (6)

- → Dependency: [[CommodityDto]]
- → Dependency: [[structuredParametersDto]]
- ← Dependency: [[calculation]]
- → Dependency: [[ClientDto]]
- → Dependency: [[QualificationCriteriaDto]]
- → Dependency: [[FirstDueDateParamsDto]]

## 📊 Appears In (2 diagrams)

- Logical: OfferCalculationRequest
- Logical: Product Calculator

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| productCodes | string |  |
| salesroomCode | string |  |
| currency | string |  |
| creditAmount | int |  |
| plusExtraLimit | int |  |
| minCashPayment | int |  |
| maxCashPayment | int |  |
| relativeMinCashPayment | int |  |
| minInstallment | int |  |
| maxInstallment | int |  |
| minTerms | int |  |
| maxTerms | int |  |
| minEffectiveInterestRate | int |  |
| maxEffectiveInterestRate | int |  |
| minCreditAmount | int |  |
| maxCreditAmount | int |  |
| giftPaymentDisallow | boolean |  |
| gracePeriodDisallow | boolean |  |
| InsuranceVariantsRequired | boolean |  |
| allInsuranceServiceCombinations | boolean |  |
| pricingCategory | int |  |
| installmentScheduleMethod | string |  |
| jointLendingPartnerCode | string |  |
| serviceTypePreferences | string |  |
| commodities | CommodityDto |  |
| productSets | int |  |
| qualificationCriteria | QualificationCriteriaDto |  |
| terms | int |  |
| annualInterestRate | int |  |
| client | ClientDto |  |
| firstDueDateParams | FirstDueDateParamsDto |  |
| parameters | string |  |
| structuredParameters | structuredParametersDto |  |
