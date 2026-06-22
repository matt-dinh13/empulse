---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/User interface/Tab - Interests"
domain: "Analysis Model"
element_id: 825617
diagrams: 1
connections: 0
tags:
  - object
  - analysis-model
---

# 🔸 Interest detail

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/User interface/Tab - Interests

## 📝 Notes

Values in this grid are filtered by interest type selected in grid Interests and by value in checkbox Period (IR.interestDetails.billingDate) . This grid is visible only in case that any record in grid Interest in selected.

Source: result of calling WS - GetInterestAccountItemDetailResponse (IR)

Localization:ACC_InterestDetail

## 📊 Appears In (1 diagrams)

- Custom: Tab - Interests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Transaction ID | string |  |
| Transaction date | date |  |
| Transaction type | string |  |
| Transaction description | string |  |
| Charged amount | money |  |
| Interested amount | money |  |
| Interest Rate | percentage |  |
| Accrued interest | money |  |
| Interest period begin | date |  |
| Interest period end | date |  |
| Accrued days | integer |  |
