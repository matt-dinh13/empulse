---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_GENERAL_TYPES"
domain: "Analysis Model"
element_id: 1878256
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ProductOfferFeesAndServices

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_GENERAL_TYPES

## 📝 Notes

List of combinations of fees and services included into product offer.
For more details see description in Offer detail - Fees and services.

## 🔗 Connections (2)

- ← Dependency «use»: [[ProductOfferDetailType]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]

## 📊 Appears In (2 diagrams)

- Logical: HO_GENERAL_TYPES
- Logical: HO_PRODUCT_OFFER_DETAIL

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serviceCode | string |  |
| serviceName | string |  |
| serviceTypeCode | string |  |
| serviceTypeName | string |  |
| feeTypeCode | string |  |
| feeTypeName | string |  |
| feeAmount | MoneyType |  |
| feeFrequency | string |  |
| chargedTo | string |  |
