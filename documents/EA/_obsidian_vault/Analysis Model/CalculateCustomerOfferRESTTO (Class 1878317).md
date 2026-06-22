---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1"
domain: "Analysis Model"
element_id: 1878317
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 CalculateCustomerOfferRESTTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1

## 📝 Notes

Object containing the inputs for the calculation of customer offers.

## 🔗 Connections (4)

- → Dependency: [[CalculationOptionsTO (Class 1878321)]]
- → Dependency: [[ServiceTypePreferenceTO (Class 1878320)]]
- → Dependency: [[QualificationCriteriaTO (Class 1878304)]]
- ← Dependency: [[Calculate (Class 1878291)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferRestV1 - CalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| currencyCode | string |  |
| salesroomCode | string |  |
| calculationOptions | CalculationOptionsTO |  |
| allInsuranceServiceCombinations | boolean |  |
| insuranceVariantsRequired | boolean |  |
| clientDocumentTypes | string |  |
| serviceTypePreferences | ServiceTypePreferenceTO |  |
| qualificationCriteria | QualificationCriterionTO |  |
| cuid | string |  |
| campaignId | string |  |
| boundOfferCode | string |  |
| offerId | string |  |
| businessChannel | string |  |
