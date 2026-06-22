---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1878219
diagrams: 3
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Contains more detailed information about installment. Used for creation of installment schedule in data source.

## 🔗 Connections (9)

- ← Dependency «use»: [[InstallmentsType (Class 1821421)]]
- ← Dependency «use»: [[ProductOfferDetailType]]
- → Dependency «use»: [[PaymentsType]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]

## 📊 Appears In (3 diagrams)

- Logical: HO_CONTRACT_DATA - financial data
- Logical: HO_GENERAL_TYPES
- Logical: HO_PRODUCT_OFFER_DETAIL

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| dueDate | dateTime |  |
| dpd | int |  |
| paymentDate | dateTime |  |
| installmentAmount | MoneyType |  |
| outstandingPrincipal | MoneyType |  |
| installmentNumber | int |  |
| installmentType | string |  |
| partPrincipal | MoneyType |  |
| partInterest | MoneyType |  |
| partFee | MoneyType |  |
| partPenalty | MoneyType |  |
| tariffItemTypeCode | string |  |
| prescribeDate | dateTime |  |
| pairedPayments | PaymentsType |  |
