---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1819446
diagrams: 4
connections: 17
tags:
  - class
  - analysis-model
---

# 🔷 AccountDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 📝 Notes

Account.

## 🔗 Connections (17)

- ← Dependency: [[BlockAccountResponse]]
- ← Dependency: [[CreateAccountResponse (Class 1575822)]]
- ← Dependency: [[GetAccountResponse (Class 1575821)]]
- ← Dependency: [[GetAccountListResponse (Class 1575815)]]
- ← Dependency: [[ActivateAccountResponse]]
- ← Dependency: [[UnblockAccountResponse]]
- → Dependency: [[PositiveMoneyDto]]
- ← Association: [[AccountListDto]]
- → Dependency: [[AccountStatusDto]]
- → Dependency: [[CashLimitType]]
- → Dependency: [[ContractCodeType (Class 1611745)]]
- ← Generalization «XSDextension»: [[AccountHistoryDto]]
- → Dependency: [[AccountTypeDto (Enumeration 1638516)]]
- → Dependency: [[CurrencyCodeType (Class 1638518)]]
- ← Generalization «XSDextension»: [[AccountDetailsDto (Class 1819492)]]
- → Dependency: [[AccountNumberType (Class 1611749)]]
- → Dependency: [[IbanType]]

## 📊 Appears In (4 diagrams)

- Logical: Account management structures
- Logical: AccountManagementWS - Contract signing
- Logical: AccountManagementWS - GetAccount
- Logical: AccountManagementWS - GetAccountList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountType | AccountTypeDto |  |
| contractCode | ContractCodeType |  |
| number | AccountNumberType |  |
| status | AccountStatusDto |  |
| creditLimit | PositiveMoneyDto |  |
| billingDay | int |  |
| blocked | boolean |  |
| iban | IbanType |  |
| payoff | boolean |  |
| termination | boolean |  |
| accountOwnerCode | string |  |
| accountCurrency | CurrencyCodeType |  |
| cashLimit | CashLimitType |  |
| {ADD}dueDay | int |  |
