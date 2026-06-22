---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOfferWS_v20"
domain: "Analysis Model"
element_id: 1815088
diagrams: 1
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}CalculateCustomerOfferRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOfferWS_v20

## 📝 Notes

{DEL LOR-8678/}
Request for product selection.

## 🔗 Connections (7)

- → Dependency: [[{DEL}Currency (Class 1815113)]]
- → Dependency: [[{DEL}Commodity]]
- → Dependency: [[{DEL}LoanOption]]
- → Dependency: [[{DEL}ServiceTypePreference]]
- → Dependency: [[{DEL}Qualification Criteria]]
- ← Dependency: [[{DEL}CustomerOfferWS_20]]
- → Dependency: [[{DEL}ProductSets]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS_v20 - CalculateCustomerOffer

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
| productSets | {DEL}ProductSets |  |
