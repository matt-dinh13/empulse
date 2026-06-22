---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387653
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 AuthorizeTransactionResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 🔗 Connections (3)

- → Dependency: [[BalanceDto (Class 1819483)]]
- → Dependency: [[AuthorizeTransactionResultCodeDto]]
- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (2 diagrams)

- Logical: AccountTransactionWS
- Logical: Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | AuthorizeTransactionResultCodeDto |  |
| accountBalance | BalanceDto |  |
| errorMessage | string |  |
