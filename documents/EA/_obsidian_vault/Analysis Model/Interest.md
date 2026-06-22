---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/User interface/Tab - Interests"
domain: "Analysis Model"
element_id: 825616
diagrams: 1
connections: 0
tags:
  - object
  - analysis-model
---

# 🔸 Interest

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/User interface/Tab - Interests

## 📝 Notes

Values in this grid are filtered by value in checkbox Period (items.AccountItemDto.billingPeriodStartDate). If user selects any record in the grid, values in grid Interest detail are refreshed.

Source: result of calling WS - GetAccountItemsResponse (R)

Localization:GEN_Interest

## 📊 Appears In (1 diagrams)

- Custom: Tab - Interests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Interest type | string |  |
| Interest description | string |  |
| Amount | money |  |
| Calculation date | date |  |
