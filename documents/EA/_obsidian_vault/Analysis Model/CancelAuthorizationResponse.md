---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387655
diagrams: 3
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 CancelAuthorizationResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Cancel Authorization response  (not confirmed transaction).

## 🔗 Connections (1)

- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (3 diagrams)

- Logical: AccountTransactions - usage at transaction cancellation
- Logical: AccountTransactionWS
- Logical: Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | CancelTransactionResultCodeDto |  |
| errorMessage | string |  |
| error | ErrorTypeDto |  |
