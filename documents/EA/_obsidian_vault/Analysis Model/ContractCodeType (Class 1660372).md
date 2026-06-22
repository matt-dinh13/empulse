---
type: Class
stereotype: "XSDsimpleType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)"
domain: "Analysis Model"
element_id: 1660372
diagrams: 5
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ContractCodeType

> **Type**: Class · **Stereotype**: «XSDsimpleType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)

## 📝 Notes

Contract code. Assigned by Contract Management during contract origination process.

Restriction:
- minLength value = "1"
- maxLength value = "64"

## 🔗 Connections (3)

- ← Dependency: [[AccountSearchDto (Class 1660355)]]
- ← Dependency: [[AccountDto (Class 1660373)]]
- ← Dependency: [[ActivateAccountRequest (Class 1698933)]]

## 📊 Appears In (5 diagrams)

- Logical: AccountManagementWS (v6) - ActivateAccount
- Logical: AccountManagementWS (v6) - CreateAccount
- Logical: AccountManagementWS (v6) - GetAccount
- Logical: AccountManagementWS (v6) - GetAccountList
- Logical: COMMON (v6)
