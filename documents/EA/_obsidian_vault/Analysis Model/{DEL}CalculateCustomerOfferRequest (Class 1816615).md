---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CalculateCustomerOffer"
domain: "Analysis Model"
element_id: 1816615
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}CalculateCustomerOfferRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CalculateCustomerOffer

## 📝 Notes

{DEL LOR-8678/}
Request for product selection.

## 🔗 Connections (6)

- → Dependency: [[{DEL}Commodity (Class 1816583)]]
- → Dependency: [[{DEL}Currency (Enumeration 1816594)]]
- → Dependency: [[{DEL}LoanOption (Enumeration 1816618)]]
- → Dependency: [[{DEL}ServiceTypePreference (Class 1816604)]]
- → Dependency: [[{DEL}Qualification Criteria (Class 1816603)]]
- ← Dependency: [[{DEL}CustomerOfferWS]]

## 📊 Appears In (2 diagrams)

- Logical: CalculateCustomerOfferRequest
- Logical: CustomerOfferWS - CalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroomCode | string |  |
| loanOptionCode | {DEL}LoanOption |  |
| currencyCode | {DEL}Currency |  |
| requiredLoanAmount | decimal |  |
| requiredExtraLimit | decimal |  |
| maximalMonthlyPayment | decimal |  |
| maximalCashPayment | decimal |  |
| commodities | {DEL}Commodity |  |
| clientDocumentTypes | string |  |
| serviceTypePreferences | {DEL}ServiceTypePreference |  |
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
