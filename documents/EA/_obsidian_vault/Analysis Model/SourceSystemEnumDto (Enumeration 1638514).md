---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1638514
diagrams: 7
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 SourceSystemEnumDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 📝 Notes

A list of systems which originates the transaction

## 🔗 Connections (1)

- ← Dependency: [[TransactionSourceIdDto (Class 1638513)]]

## 📊 Appears In (7 diagrams)

- Logical: Account management structures - Initial Transaction
- Logical: Account TransactionsWS - charge/cancel fee
- Logical: AccountManagementWS - Authorization
- Logical: AccountManagementWS - Credit limit change request
- Logical: AccountTransactions - usage at transaction cancellation
- Logical: AuthorizeTransactionWithIPVariant
- Logical: COMMON for Cabus

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ACCOUNT |  |  |
| CARD |  |  |
| COLLECTION |  |  |
| IB |  |  |
| RISK |  |  |
| BSL |  |  |
| LPR |  |  |
| OBS |  |  |
| {ADD}PARTNER_NET |  |  |
| {ADD}HC_PAY |  |  |
