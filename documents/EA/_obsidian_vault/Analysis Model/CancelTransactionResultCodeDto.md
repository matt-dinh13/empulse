---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1160752
diagrams: 3
connections: 3
tags:
  - enumeration
  - analysis-model
---

# 📝 CancelTransactionResultCodeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 🔗 Connections (3)

- ← Dependency: [[CancelEventResponse]]
- ← Dependency: [[CancelAccountItemResponse]]
- ← Dependency: [[CancelTransactionResponse]]

## 📊 Appears In (3 diagrams)

- Logical: Account TransactionsWS - charge/cancel fee
- Logical: AccountTransactions - usage at transaction cancellation
- Logical: Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CANCELLED | string |  |
| FAILED | string |  |
