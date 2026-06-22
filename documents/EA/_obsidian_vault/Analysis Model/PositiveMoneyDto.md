---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1638521
diagrams: 8
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 PositiveMoneyDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Positive money definition - amount >= 0 and currency.

## 🔗 Connections (9)

- → Dependency: [[CurrencyCodeType (Class 1638518)]]
- → Generalization «XSDrestriction»: [[MoneyDto (Class 1638510)]]
- ← Dependency: [[AccountDto (Class 1660373)]]
- ← Dependency: [[ConfirmationTxDto]]
- ← Dependency: [[AuthorizationTxAndIPTransferDto]]
- ← Dependency: [[ConfirmationTxAndIPTransferDto]]
- ← Dependency: [[AuthorizationTxDto]]
- ← Dependency: [[AuthorizationTxDto (Class 1819451)]]
- ← Dependency: [[AccountDto (Class 1819446)]]

## 📊 Appears In (8 diagrams)

- Logical: AccountManagementWS - GetAccount
- Logical: AccountManagementWS - GetAccountList
- Logical: AccountManagementWS (v6) - ActivateAccount
- Logical: AccountManagementWS (v6) - CreateAccount
- Logical: AccountManagementWS (v6) - GetAccount
- Logical: AccountManagementWS (v6) - GetAccountList
- Logical: AuthorizeTransactionWithIPVariant
- Logical: COMMON for Cabus

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| value | decimal |  |
| currency | CurrencyCodeType |  |
