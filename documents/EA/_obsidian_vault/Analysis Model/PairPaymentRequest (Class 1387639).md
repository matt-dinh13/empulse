---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387639
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 PairPaymentRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Pair incoming payment request.

## 🔗 Connections (2)

- → Dependency: [[PaymentDto (Class 1160766)]]
- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (2 diagrams)

- Logical: AccountTransactionsWS - usage in incoming payment management
- Logical: AccountTransactionWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| payment | PaymentDto |  |
