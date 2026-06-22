---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)"
domain: "Analysis Model"
element_id: 1660373
diagrams: 5
connections: 12
tags:
  - class
  - analysis-model
---

# 🔷 AccountDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)

## 📝 Notes

Account.

## 🔗 Connections (12)

- → Dependency: [[AccountTypeDto (Class 1660374)]]
- → Dependency: [[PositiveMoneyDto]]
- → Dependency: [[CurrencyCodeType (Class 1638518)]]
- → Dependency: [[ContractCodeType (Class 1660372)]]
- → Dependency: [[IbanType (Class 1660371)]]
- → Dependency: [[AccountNumberType (Class 1660370)]]
- → Dependency: [[CashLimitType (Class 1660369)]]
- → Dependency: [[AccountStatusDto (Enumeration 1660368)]]
- ← Dependency: [[GetAccountListResponse (Class 1698938)]]
- ← Dependency: [[GetAccountResponse (Class 1698934)]]
- ← Dependency: [[CreateAccountResponse (Class 1698931)]]
- ← Dependency: [[ActivateAccountResponse (Class 1698928)]]

## 📊 Appears In (5 diagrams)

- Logical: AccountManagementWS (v6) - ActivateAccount
- Logical: AccountManagementWS (v6) - CreateAccount
- Logical: AccountManagementWS (v6) - GetAccount
- Logical: AccountManagementWS (v6) - GetAccountList
- Logical: COMMON (v6)

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
