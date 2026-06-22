---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2"
domain: "Analysis Model"
element_id: 1878348
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 CalculateCustomerOfferRESTTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2

## 📝 Notes

Object containing the inputs for the calculation of customer offers.

## 🔗 Connections (5)

- → Dependency: [[CalculationOptionsTO]]
- → Dependency: [[QualificationCriteriaTO]]
- → Dependency: [[StructuredParametersTO]]
- → Dependency: [[ServiceTypePreferenceTO]]
- ← Dependency: [[Calculate (Class 1878334)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferRestV2 - CalculateCustomerOffer

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
| StructuredParametersTO | StructuredParametersTO  |  |
