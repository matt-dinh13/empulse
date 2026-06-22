---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/User interface/Tab - Unconfirmed Transactions"
domain: "Analysis Model"
element_id: 843395
diagrams: 1
connections: 0
tags:
  - object
  - analysis-model
---

# 🔸 Unconfirmed transactions

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/User interface/Tab - Unconfirmed Transactions

## 📝 Notes

The source of values in the grid is GetAuthorizationsResponse -> authorizations got via AccountManagementWS (AUT).

## 📊 Appears In (1 diagrams)

- Custom: Tab - Unconfirmed Transactions

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Date of transaction | date |  |
| Amount | number |  |
| Side | string |  |
| Transaction Type | string |  |
| Description | string |  |
