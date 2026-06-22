---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387645
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CancelTransactionResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Cancel Transaction response (confirmed transaction only)

## 🔗 Connections (2)

- → Dependency: [[CancelTransactionResultCodeDto]]
- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (2 diagrams)

- Logical: AccountTransactions - usage at transaction cancellation
- Logical: Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | CancelTransactionResultCodeDto |  |
| errorMessage | string |  |
| error | ErrorTypeDto |  |
