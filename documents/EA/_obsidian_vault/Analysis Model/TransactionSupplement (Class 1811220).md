---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Interface Provided/Web Services/TransactionSupplements/TransactionSupplements_v1"
domain: "Analysis Model"
element_id: 1811220
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 TransactionSupplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Interface Provided/Web Services/TransactionSupplements/TransactionSupplements_v1

## 📝 Notes

Transaction Supplement structure

## 🔗 Connections (4)

- ← Usage: [[TransactionSupplements]]
- ← Usage: [[TransactionSupplements]]
- ← Dependency: [[TransactionSupplements]]
- → Usage: [[ContractSupplement (Class 1811216)]]

## 📊 Appears In (3 diagrams)

- Logical: Transaction Supplement - Cancel Transaction Supplement
- Logical: Transaction Supplement - Create Transaction Supplement
- Logical: Transaction Supplement - Get Transaction Supplement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesquoteCode | string |  |
| transactionType | string |  |
| applicationCode | string |  |
| loanAmount | Money |  |
| disbursementPaymentChannelId | string |  |
| contractSupplement | ContractSupplement |  |
| loanType | string |  |
| marketingOfferId | string |  |
