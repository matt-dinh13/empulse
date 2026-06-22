---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1750950
diagrams: 2
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 Financial Data

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model

## 📝 Notes

Set of information about real client finacial situation (income, expenses)

## 🔗 Connections (8)

- → Dependency: [[CustomerFinancialData]]
- → Aggregation: [[{MOD}Client Snapshot]]
- → Dependency: [[Financial Services]]
- → Dependency: [[CustomerFinancialData]]
- → Dependency: [[CustomerFinancialData]]
- → Dependency: [[Estimated Net Worth Type]]
- → Dependency: [[CustomerFinancialData]]
- → Dependency: [[CustomerFinancialData]]

## 📊 Appears In (2 diagrams)

- Logical: Client management
- Logical: Enumerations

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Main source of income | Source Of Income |  |
| Amount of other debts | Number (9,0) |  |
| By-work income | Number (9,0) |  |
| Financial situation | Text |  |
| Household expenses | Number (9,0) |  |
| Household income | Number (9,0) |  |
| Estimated Net Worth | Estimated Net Worth Type |  |
| Occupation income | Number (9,0) |  |
