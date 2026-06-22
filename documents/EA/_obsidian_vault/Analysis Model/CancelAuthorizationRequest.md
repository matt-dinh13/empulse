---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387649
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CancelAuthorizationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Cancel Authorization request (not confirmed transaction).

## 🔗 Connections (2)

- → Dependency: [[TransactionSourceIdDto (Class 1638513)]]
- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (3 diagrams)

- Logical: AccountTransactions - usage at transaction cancellation
- Logical: AccountTransactionWS
- Logical: Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transaction | TransactionSourceIdDto |  |
| reason | CancellationReasonDto |  |
