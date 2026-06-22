---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1819483
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 BalanceDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 📝 Notes

Account balance.

## 🔗 Connections (4)

- ← Dependency: [[AuthorizeTransactionResponse]]
- ← Dependency «use»: [[GetAccountBalanceResponse]]
- ← Dependency: [[AuthorizeTransactionWithIPOfferResponse]]
- ← Generalization «XSDextension»: [[AccountBalanceDto (Class 1819468)]]

## 📊 Appears In (3 diagrams)

- Logical: Account management structures
- Logical: AccountManagementWS - GetAccountBalance
- Logical: AuthorizeTransactionWithIPVariant

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| availableCashBalance | MoneyDto |  |
| availableBalance | MoneyDto |  |
| holdBalance | MoneyDto |  |
| ledgerBalance | MoneyDto |  |
| outstandingDebt | MoneyDto |  |
