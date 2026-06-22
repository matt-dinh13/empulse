---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Interface Provided/Web Services/TransactionSupplements/TransactionSupplements_v2"
domain: "Analysis Model"
element_id: 1811227
diagrams: 4
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 TransactionSupplement_v2

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Interface Provided/Web Services/TransactionSupplements/TransactionSupplements_v2

## 📝 Notes

Transaction Supplement structure

## 🔗 Connections (7)

- ← Usage: [[TransactionSupplements_v2 (Interface 1763826)]]
- ← Usage: [[TransactionSupplements_v2 (Interface 1763826)]]
- ← Usage: [[TransactionSupplements_v2 (Interface 1763826)]]
- ← Usage: [[TransactionSupplements_v2 (Interface 1763826)]]
- → Usage: [[RequestSource]]
- → Usage: [[SalesQuote (Class 1811230)]]
- → Usage: [[ContractSupplement (Class 1811216)]]

## 📊 Appears In (4 diagrams)

- Logical: Transaction Supplement - Cancel Transaction Supplement v2
- Logical: Transaction Supplement - Create Transaction Supplement v2
- Logical: Transaction Supplement - Get Transaction Supplement v2
- Logical: TransactionSupplements - Reject Transaction Suplement v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| applicationCode | string |  |
| contractSupplement | ContractSupplement |  |
| requestSource | RequestSource |  |
| salesQuotes | SalesQuote |  |
| loanType | string |  |
| marketingOfferId | string |  |
