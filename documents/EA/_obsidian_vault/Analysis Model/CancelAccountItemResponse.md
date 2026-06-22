---
type: Class
stereotype: "XSDtopLevelElement"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387648
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CancelAccountItemResponse

> **Type**: Class · **Stereotype**: «XSDtopLevelElement»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 🔗 Connections (2)

- → Dependency: [[CancelTransactionResultCodeDto]]
- ← Usage: [[AccountTransactionWS]]

## 📊 Appears In (2 diagrams)

- Logical: Account TransactionsWS - charge/cancel fee
- Logical: Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | acc:CancelTransactionResultCodeDto |  |
| errorMessage | string |  |
