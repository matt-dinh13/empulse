---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387642
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CancelTransactionRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Cancel Transaction request.

## 🔗 Connections (3)

- → Dependency: [[TransactionSourceIdDto (Class 1638513)]]
- → Dependency: [[CancellationReasonDto (Class 1160769)]]
- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (2 diagrams)

- Logical: AccountTransactions - usage at transaction cancellation
- Logical: Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transaction | TransactionSourceIdDto |  |
| reason | CancellationReasonDto |  |
