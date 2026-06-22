---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Cabus AM REST/Get instalmentPlanOffersV3"
domain: "Analysis Model"
element_id: 1495047
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 InstalmentPlanSetupDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Cabus AM REST/Get instalmentPlanOffersV3

## 🔗 Connections (5)

- → Dependency: [[TransactionRestrictionsDto]]
- → Dependency: [[MoneyDto (Class 1495052)]]
- ← Dependency: [[InstalmentPlanOfferDto]]
- → Dependency: [[MoneyDto (Class 1495052)]]
- → Dependency: [[IPCalculationParamsDto]]

## 📊 Appears In (1 diagrams)

- Logical: Get instalmentPlanOffersV3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| calculationParams | IPCalculationParamsDto |  |
| ConversionFee | MoneyDto |  |
| coolingOffPeriodName | string |  |
| financingSchemeCode | string |  |
| financingSchemeName | string |  |
| group | string |  |
| instalmentPlanType | string |  |
| ipOfferDefinitionCode | string |  |
| ipOfferDefinitionName | string |  |
| ipOfferDefinitionVersion | string |  |
| ipVariantCode | string |  |
| loanCode | string |  |
| {ADD}numberOfGiftPayments | int |  |
| offerCode | string |  |
| originationFee | MoneyDto |  |
| transactionRestrictions | TransactionRestrictionsDto |  |
