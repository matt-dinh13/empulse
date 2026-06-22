---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1160760
diagrams: 2
connections: 2
tags:
  - enumeration
  - analysis-model
---

# 📝 AuthorizeTransactionResultCodeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 🔗 Connections (2)

- ← Dependency: [[AuthorizeTransactionResponse]]
- ← Dependency: [[AuthorizeTransactionWithIPOfferResponse]]

## 📊 Appears In (2 diagrams)

- Logical: AuthorizeTransactionWithIPVariant
- Logical: Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ACCEPTED | string |  |
| REJECTED_INSUFFICIENT_BALANCE | string |  |
| FAILED | string |  |
| REJECTED_INELIGIBLE_ACCOUNT | string |  |
| REJECTED_CASH_LIMIT |  |  |
| REJECTED_TOO_MANY_REQUESTS |  |  |
