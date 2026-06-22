---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Interface Provided/Web Services/TransactionSupplements/TransactionSupplements_v1"
domain: "Analysis Model"
element_id: 1811224
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RefundTransactionSupplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Interface Provided/Web Services/TransactionSupplements/TransactionSupplements_v1

## 📝 Notes

Refund Transaction Supplement request structure

## 🔗 Connections (1)

- ← Usage: [[TransactionSupplements]]

## 📊 Appears In (1 diagrams)

- Logical: Transaction Supplement - Update Transaction Supplement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transactionSupplementId | string |  |
| reasonCode | string |  |
| refundedAmount | MoneyType |  |
| customerCancellationDate | date |  |
| partnerRefundRequestId | string |  |
| reasonDescription | string |  |
