---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI"
domain: "Analysis Model"
element_id: 1638510
diagrams: 5
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 MoneyDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI

## 📝 Notes

Money definition - amount and currency.

## 🔗 Connections (9)

- ← Dependency: [[InstalmentDto]]
- ← Dependency: [[InstalmentDto]]
- ← Dependency: [[PairedInstalmentDto (Class 1309264)]]
- ← Dependency: [[BasicAccountItemDto]]
- ← Dependency: [[BillingPeriodBalanceDto]]
- → Dependency: [[CurrencyCodeType (Class 1638518)]]
- ← Generalization «XSDrestriction»: [[PositiveMoneyDto]]
- ← Dependency: [[TransactionAuthorizationDto]]
- ← Dependency: [[TransactionAuthorizationDto]]

## 📊 Appears In (5 diagrams)

- Logical: Account UI - Interface diagram - Balances
- Logical: Account UI - Interface diagram - Installment schedule
- Logical: AccountManagementWS - Authorization
- Logical: AccountManagementWS - GetAccountList
- Logical: COMMON for Cabus

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| value | decimal |  |
| currency | CurrencyCodeType |  |
