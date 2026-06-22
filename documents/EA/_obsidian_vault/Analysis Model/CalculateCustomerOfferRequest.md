---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/CustomerOfferWS_v21"
domain: "Analysis Model"
element_id: 1816654
diagrams: 1
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 CalculateCustomerOfferRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/CustomerOfferWS_v21

## 📝 Notes

Request for product selection.

## 🔗 Connections (7)

- → Dependency: [[LoanOption]]
- → Dependency: [[Qualification Criteria]]
- → Dependency: [[Currency (Class 1816680)]]
- → Dependency: [[ServiceTypePreference]]
- → Dependency: [[Commodity (Class 1816693)]]
- → Dependency: [[ProductSets]]
- ← Dependency: [[CustomerOfferWS_21]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS_v21 - CalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroomCode | string |  |
| loanOptionCode | LoanOption |  |
| currencyCode | Currency |  |
| requiredLoanAmount | decimal |  |
| requiredExtraLimit | decimal |  |
| maximalMonthlyPayment | decimal |  |
| maximalCashPayment | decimal |  |
| commodities | Commodity |  |
| clientDocumentTypes | string |  |
| serviceTypePreferences | ServiceTypePreference |  |
| campaignID | string |  |
| CUID | string |  |
| boundOfferCode | string |  |
| businessChannel | string |  |
| serviceTypeCode | string |  |
| qualificationCriteria | Qualification criteria |  |
| salesAgentCode | string |  |
| allInsuranceCombinations | boolean |  |
| offerID | string |  |
| insuranceVariantsRequired | boolean |  |
| cardType | string |  |
| requiredAnnnualInterestRate | decimal |  |
| requiredTerms | int |  |
| productSets | ProductSets |  |
| maxNumberOfInstallments | int |  |
