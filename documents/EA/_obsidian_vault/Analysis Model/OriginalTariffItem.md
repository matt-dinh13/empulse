---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Fees-back/Logical Data Model"
domain: "Analysis Model"
element_id: 901520
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 OriginalTariffItem

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Fees-back/Logical Data Model

## 📝 Notes

This part keeps a list of Tariff Items originally charged as "monthly fees" to the processed contract. The items are taken from Financial Parameters.FP Tariff Items of the contract.

## 🔗 Connections (2)

- ← Aggregation: [[RelatedTariffItem]]
- → Aggregation: [[DiscountResult]]

## 📊 Appears In (1 diagrams)

- Logical: DiscountResult structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| financial ParameterItemId | int |  |
| type | Tariff ItemType |  |
| id | Tariff Item |  |
| amount | Financial Amount |  |
| newAmount | Financial Amount |  |
