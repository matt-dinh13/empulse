---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator"
domain: "Analysis Model"
element_id: 1168398
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 HOM_OFFER_FIN_PARAMS_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator

## 📝 Notes

Financial parameters of the loan (before contract is signed).

## 🔗 Connections (5)

- ← Aggregation: [[HOM_OFFER_PIR_001]]
- ← Aggregation: [[HOM_OFFER_INSTALLMENT_001]]
- ← Aggregation: [[HOM_OFFER_FIN_PAR_ITEM_001]]
- ← Aggregation: [[HOM_OFFER_SERVICE_001]]
- ← Aggregation: [[HOM_OFFER_PREFERENCES_001]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Financial Parameters (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contract ID | number |  |
| credit amount | number |  |
| credit amount currency | string |  |
| chosen flag | boolean |  |
| advanced payment number | number |  |
| annuity amount | number |  |
| annuity currency | string |  |
| interest rate | number |  |
| goods price amount | number |  |
| goods price currency | string |  |
| terms | number |  |
| first due date | date |  |
| total monthly payment amount | number |  |
| total monthly payment currency | string |  |
| cash payment amount | number |  |
| cash payment currency | string |  |
| archived | boolean |  |
| status | string |  |
| type | string |  |
| valid to | date |  |
| net credit amount | number |  |
| net credit currency | string |  |
| provided credit amount | number |  |
| provided credit currency | string |  |
| TA ID | number |  |
| total payment per credit | number |  |
| total payment per credit currency | string |  |
| customer first due date | date |  |
| product offer limits ID | number |  |
| net cash payment amount | number |  |
| net cash payment currency | string |  |
| product variant ID | number |  |
| billing day | number |  |
| provided credit limit amount | number |  |
| provided credit limit amount currency | string |  |
| installment due day | number |  |
| initial transaction type | string |  |
| minimal installment amount | number |  |
| minimal installment amount currency | string |  |
| tariff ID | number |  |
| offer calculation date | date |  |
| net credit limit amount | number |  |
| net credit limit amount currency | string |  |
| offer preferences ID | number |  |
| shifted last due date | date |  |
| installment schedule method | string |  |
| preferred due day | number |  |
| first installment amount | number |  |
| first installment currency | string |  |
| subvention discount amount | number |  |
| subvention discount currency | string |  |
| IS interest rate | number |  |
| loan providing date | date |  |
| scoring phase | string |  |
| cash available limit rate | number |  |
