---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications"
domain: "Analysis Model"
element_id: 1159296
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 TransactionNotificationDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications

## 📝 Notes

Data structure of transaction notification for TransactionNotificationRequest

## 🔗 Connections (3)

- ← Dependency: [[FirstTransactionNotificationRequest]]
- → Dependency: [[TransactionSourceIdDto (Class 1638513)]]
- → Dependency: [[TransactionTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: AccountNotificationWS - Transactions

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | long |  |
| transactionType | TransactionTypeDto |  |
| transactionSourceSystem | TransactionSourceIdDto |  |
| transactionAmount | MoneyDto |  |
| billingDate | date |  |
