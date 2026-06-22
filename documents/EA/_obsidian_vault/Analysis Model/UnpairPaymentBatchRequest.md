---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387646
diagrams: 3
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 UnpairPaymentBatchRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Unpair incoming payments request.

## 🔗 Connections (1)

- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (3 diagrams)

- Logical: AccountTransactionsWS - usage in incoming payment management
- Logical: AccountTransactionWS
- Logical: Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceTransactionId | TransactionSourceIdDto |  |
