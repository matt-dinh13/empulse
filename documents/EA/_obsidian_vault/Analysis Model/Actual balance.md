---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/User interface/Tab - Balances"
domain: "Analysis Model"
element_id: 1575776
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Actual balance

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/User interface/Tab - Balances

## 📝 Notes

Displayed data: 
balances according to rule Filling Actual balance

Default order by: Billing period,  desc.

Paging: yes, on 1 page display 10 records

Localization code: ACC_ActualBalances

## 🔗 Connections (2)

- → Dependency: [[Filling Actual balance]]
- → Dependency: [[12.603 Print or send statement]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Balances

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Billing period | string |  |
| Credit transactions | string |  |
| Debit transactions | string |  |
| Ending balance | string |  |
| Opening balance | string |  |
| Print | icon |  |
| Sum of fees | string |  |
| Sum of interests | string |  |
| Sum of penalties | string |  |
