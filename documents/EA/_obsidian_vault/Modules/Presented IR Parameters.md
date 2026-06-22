---
type: Class
stereotype: "interface"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Logical Data Model"
domain: "Modules"
element_id: 1796336
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Presented IR Parameters

> **Type**: Class · **Stereotype**: «interface»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Logical Data Model

## 📝 Notes

Universal set of parameters, which are necessary for calculation of PIR for CEL products.

## 🔗 Connections (2)

- ← Aggregation: [[Presented IR Cash Flow]]
- ← Aggregation: [[Presented IR Fee]]

## 📊 Appears In (1 diagrams)

- Logical: Presented interest rate - Interface

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Loan Providing Date | date |  |
| Provided Loan Amount | Financial Amount |  |
| Nominal Interest Rate | Percentage |  |
| Terms | int |  |
| Annuity | Financial Amount |  |
| Withdrawal Amount | Financial Amount |  |
| Total Monthly Repayment Amount | Financial Amount |  |
