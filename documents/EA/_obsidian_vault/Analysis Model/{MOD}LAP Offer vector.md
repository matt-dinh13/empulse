---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model/Interface LAP"
domain: "Analysis Model"
element_id: 1537187
diagrams: 1
connections: 11
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}LAP Offer vector

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model/Interface LAP

## 📝 Notes

This entity simulates part of LAP vector structure defined by Blaze, which contains required parameters/limits for generation of one optional offer.
Names of attributes correspond with the names in vector.

## 🔗 Connections (11)

- → Dependency: [[LAP Offer Sort Attribute Type]]
- → Dependency: [[Service Type (Class 1880808)]]
- → Dependency: [[{MOD}Product]]
- → Dependency: [[LAP Offer Sort Attribute Type]]
- → Dependency: [[Definition of path to LAP Offer vector]]
- → Dependency: [[Service Type (Class 1880808)]]
- → Dependency: [[Product Type (Enumeration 1879104)]]
- → Dependency: [[LAP Offer Sort Order Type]]
- → Dependency: [[LAP Offer Sort Order Type]]
- ← Aggregation: [[LAP offer vector qualification criteria]]
- → Dependency: [[LAP Product Selection Type]]

## 📊 Appears In (1 diagrams)

- Logical: LAP Offer vector - attributes for Optional offer Generation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| prodTypeCode | string |  |
| prodCode | string |  |
| prodSelectionType | string |  |
| sameProduct | boolean |  |
| annuity_Max | number |  |
| annuity_Min | number |  |
| cashPayment_Max | number |  |
| cashPayment_Min | number |  |
| creditAmount_Max | number |  |
| creditAmount_min  | number |  |
| eir_Max | number |  |
| eir_Min | number |  |
| giftPaymentForbidden | boolean |  |
| gracePeriodForbidden | boolean |  |
| insuranceRequired | boolean |  |
| insuranceType1 | string |  |
| insuranceType2 | string |  |
| offerID | number |  |
| offerValidTo | date |  |
| paymentNum_Max | number |  |
| paymentNum_Min | number |  |
| sortAttribute1 | string |  |
| sortAttribute2 | string |  |
| sortOrder1 | string |  |
| sortOrder2 | string |  |
| numOfferDisplayed | int |  |
| isForRefinance | boolean |  |
| pricingCategory | string |  |
| {ADD}isRelToOriginalCel | int |  |
