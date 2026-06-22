---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1629662
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PairPaymentBatchRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Pair incoming payments request.

## 🔗 Connections (2)

- → Dependency: [[PaymentDto (Class 1160766)]]
- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (3 diagrams)

- Logical: AccountTransactionWS
- Logical: Generated JMS messages - Pair payment batch
- Logical: Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| payment | PaymentDto |  |
