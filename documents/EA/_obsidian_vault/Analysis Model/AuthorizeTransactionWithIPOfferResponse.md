---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1734233
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 AuthorizeTransactionWithIPOfferResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Execute Unconfirmed Transaction with IP variant response

## 🔗 Connections (3)

- → Dependency: [[BalanceDto (Class 1819483)]]
- → Dependency: [[AuthorizeTransactionResultCodeDto]]
- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (1 diagrams)

- Logical: AuthorizeTransactionWithIPVariant

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | AuthorizeTransactionResultCodeDto |  |
| accountBalance | BalanceDto |  |
| errorMessage | string |  |
