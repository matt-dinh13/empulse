---
type: Class
stereotype: "Customization"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1715997
diagrams: 2
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 Product Calculator Parameters

> **Type**: Class · **Stereotype**: «Customization»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

Customization of Product Calculator on program level (not saved in DB).

## 📊 Appears In (2 diagrams)

- Custom: Product Calculator
- Logical: Product Calculator Parametrization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| MaxCashPaymentPercentage | boolean | false |
| MaxCashPaymentRounding | Rounding | MATH |
| MaxCashPaymentRoundingScale | int | 1 |
| ProductSetSelection | boolean | false |
| PlusExtraLimit | boolean | false |
| CommodityDataFromManufacturer | boolean | false |
| CashPaymentCalculation | boolean | false |
| groupingResultsSortOrder | string | productVariant.preferenceType-desc{/ADD},terms-desc,productWithVariant-asc |
| SortOrder | string | productVariant.preferenceType-desc,insuranceNumber-desc,monthlyInstallment,productWithVariant |
| MobilePhone1 | boolean | false |
| splitDocumentsByIdDocFlag | boolean | false |
| NumberOfTerms | boolean | false |
| AnnualInterestRate | boolean | false |
| MaxCashPaymentAmount | string |  |
| QualificationCriteriaPanel | string |  |
