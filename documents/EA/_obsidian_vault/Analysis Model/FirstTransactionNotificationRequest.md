---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications"
domain: "Analysis Model"
element_id: 1107135
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 FirstTransactionNotificationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications

## 📝 Notes

Transaction notification request notifies about the first (initial) confirmed transaction.

## 🔗 Connections (2)

- → Dependency: [[TransactionNotificationDto]]
- ← Dependency «use»: [[AccountNotificationWS]]

## 📊 Appears In (1 diagrams)

- Logical: AccountNotificationWS - Transactions

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transactionNotification | TransactionNotificationDto |  |
