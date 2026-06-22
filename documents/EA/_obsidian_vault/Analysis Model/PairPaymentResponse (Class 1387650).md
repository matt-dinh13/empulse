---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387650
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PairPaymentResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Pair incoming payment response.

## 🔗 Connections (2)

- → Dependency: [[PaymentProcessingNotificationDto (Class 1160753)]]
- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (2 diagrams)

- Logical: AccountTransactionsWS - usage in incoming payment management
- Logical: AccountTransactionWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentProcessingNotification | PaymentProcessingNotificationDto |  |
