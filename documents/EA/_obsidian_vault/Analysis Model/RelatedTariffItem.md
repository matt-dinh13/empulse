---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Fees-back/Logical Data Model"
domain: "Analysis Model"
element_id: 901522
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 RelatedTariffItem

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Fees-back/Logical Data Model

## 📝 Notes

This part of the structure keeps information about "discounted" Tariff Items related to the OriginalTariffItems

## 🔗 Connections (1)

- → Aggregation: [[OriginalTariffItem]]

## 📊 Appears In (1 diagrams)

- Logical: DiscountResult structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | Tariff ItemType |  |
| id | Tariff Item |  |
| amount | Financial Amount |  |
