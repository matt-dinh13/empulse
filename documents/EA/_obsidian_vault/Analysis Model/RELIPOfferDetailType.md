---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_PRODUCT_OFFER_DETAIL"
domain: "Analysis Model"
element_id: 1736173
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 RELIPOfferDetailType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_PRODUCT_OFFER_DETAIL

## 📝 Notes

Contains detailed information about offer for RELIP Service (Initial Card Transaction Installment Plan).

## 🔗 Connections (1)

- ← Dependency: [[ServiceDetail]]

## 📊 Appears In (1 diagrams)

- Logical: HO_PRODUCT_OFFER_DETAIL

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serviceCode | string |  |
| serviceName | string |  |
| transactionAmount | MoneyType |  |
| firstDueDate | Date |  |
| firstEndOfInterestPeriodDate | Date |  |
| term | int |  |
| AIR | decimal |  |
| initTerm | int |  |
| initAIR | decimal |  |
| annuity | MoneyType |  |
| presentedInterestRate | decimal |  |
| totalMonthlyPayment | moneyType |  |
| totalPaymentPerCredit | moneyType |  |
| totalPrincipal | MoneyType |  |
| totalInterest | MoneyType |  |
| totalFee | MoneyType |  |
