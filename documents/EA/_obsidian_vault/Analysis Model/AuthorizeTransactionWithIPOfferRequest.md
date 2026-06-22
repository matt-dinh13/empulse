---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387644
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 AuthorizeTransactionWithIPOfferRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Execute Unconfirmed Transaction with IP variant request

## 🔗 Connections (2)

- → Dependency: [[AuthorizationTxDto (Class 1819451)]]
- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (1 diagrams)

- Logical: AuthorizeTransactionWithIPVariant

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transaction | AuthorizationTxDto |  |
| offerCode | string |  |
| loanCode | LoanCodeType |  |
