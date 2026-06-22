---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_GENERAL_TYPES"
domain: "Analysis Model"
element_id: 1878235
diagrams: 2
connections: 17
tags:
  - class
  - analysis-model
---

# 🔷 ProductOfferDetailType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_GENERAL_TYPES

## 📝 Notes

Root of product offer detail.
Offer in description of particular attribute means reference to current product offer on display which can be both persistent or also not saved yet (TA or contract does not exist yet).  
OfferEntry means set of parameter (client's preferences) entered as an input to product calculator for offer calculation.

## 🔗 Connections (17)

- ← Generalization: [[productOfferDetail]]
- → Dependency «use»: [[ProductOfferFeesAndServices]]
- → Dependency «use»: [[ServiceDetail]]
- → Dependency «use»: [[{MOD} PresentedInterestRateTypeItems]]
- → Dependency «use»: [[ServiceDetailType]]
- → Dependency «use»: [[InstallmentType (Class 1878219)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]

## 📊 Appears In (2 diagrams)

- Logical: HO_GENERAL_TYPES
- Logical: HO_PRODUCT_OFFER_DETAIL

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| currentDateTime | dateTime |  |
| salesroomName | string |  |
| salesroomCode | string |  |
| userName | string |  |
| userCode | string |  |
| productName | string |  |
| productCode | string |  |
| productTypeCode | string |  |
| productTypeName | string |  |
| initialTransactionTypeCode | string |  |
| initialTransactionTypeName | string |  |
| productDescription | string |  |
| goodsPrice | MoneyType |  |
| netCreditAmount | MoneyType |  |
| providedCreditAmount | MoneyType |  |
| cashPayment | MoneyType |  |
| downPayment | MoneyType |  |
| terms | int |  |
| advancePaymentsNumber | int |  |
| preferredDay | int |  |
| firstInstallmentAmount | MoneyType |  |
| firstInstallmentDueDate | date |  |
| totalMonthlyPayments | MoneyType |  |
| creditLimit | MoneyType |  |
| minimalInstallmentAmount | MoneyType |  |
| subventionDiscount | MoneyType |  |
| installmentScheduleMethod | string |  |
| productOfferFeesAndServices | ProductOfferFeesAndServices |  |
| installment | InstallmentType |  |
| presentedInterestRates | PresentedInterestRateTypeItems |  |
| type | string |  |
| scoringPhase | string |  |
| annuity | MoneyType |  |
| serviceDetail | ServiceDetailType |  |
