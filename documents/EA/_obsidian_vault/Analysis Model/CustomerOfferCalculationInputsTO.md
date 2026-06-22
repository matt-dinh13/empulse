---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2"
domain: "Analysis Model"
element_id: 1878355
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 CustomerOfferCalculationInputsTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2

## 📝 Notes

Object containing the inputs for the calculation of customer offers.

## 🔗 Connections (4)

- → Dependency: [[ServiceTypePreferenceTO]]
- → Dependency: [[QualificationCriteriaTO]]
- → Dependency: [[ProductSetTO]]
- → Dependency: [[InsurableCommodityTO]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferRestV2 - CalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroomCode | string |  |
| loanOptionCode | string |  |
| boundOfferCode | string |  |
| currencyCode | string |  |
| requiredLoanAmount | decimal |  |
| requiredExtraLimit | decimal |  |
| requiredTerms | int |  |
| requiredAnnualInterestRate | decimal |  |
| maximalMonthlyPayment | decimal |  |
| maximalCashPayment | decimal |  |
| maxNumberOfInstallments | int |  |
| commodities | InsurableCommodityTO |  |
| clientDocumentTypes | string |  |
| serviceTypePreferences | ServiceTypePreferenceTO |  |
| campaignId | string |  |
| offerId | string |  |
| cuid | string |  |
| businessChannel | string |  |
| serviceTypeCode | string |  |
| qualificationCriteria | QualificationCriterionTO |  |
| salesAgentCode | string |  |
| allInsuranceServiceCombinations | boolean |  |
| insuranceVariantsRequired | boolean |  |
| cardType | string |  |
| productSets | ProductSetTO |  |
