---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Web Services/ContractSupplements"
domain: "Analysis Model"
element_id: 1811230
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 SalesQuote

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Web Services/ContractSupplements

## 📝 Notes

Sales Quotes applied on Transaction Supplement

## 🔗 Connections (3)

- ← Usage: [[TransactionSupplement_v2]]
- → Usage: [[AccountTransaction_v2]]
- ← Usage: [[TransactionSupplement_v4]]

## 📊 Appears In (3 diagrams)

- Logical: Contract Supplements - Get Contract Supplement by CUID v4
- Logical: Transaction Supplement - Create Transaction Supplement v2
- Logical: Transaction Supplement - Get Transaction Supplement v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesquoteCode | string |  |
| serviceExternalId | string |  |
| dealCode | string |  |
| masterTransaction | boolean |  |
| transactions | AccountTransaction |  |
