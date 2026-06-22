---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/User Interface Model"
domain: "Analysis Model"
element_id: 1703705
diagrams: 2
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 Debit Card Accounts

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/User Interface Model

## 📝 Notes

List of client's active debit card accounts.

LDM source:
Data from GetAccountListResponse.accounts.* structure retrieved in superior UC and respective contract related structures. See the attributes' description for more detail.

Localization code:
none (no label is displayed for the grid)

Other:
Records in the grid are initially sorted by Contract signature date (ascending). The grid is not sortable by user.
No record is initially selected.

## 📊 Appears In (2 diagrams)

- Custom: HC Debit card account selection - choose HC debit card
- Custom: PAYM-1973 (CBL-5228) CEL Reward - Disbursement channel changes

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Choose | button |  |
| IBAN | string |  |
| Account number | long |  |
| Product name | string |  |
| Contract number | string |  |
| Contract status | string |  |
| Contract signature date | dateTime |  |
| {ADD}Card number | string |  |
