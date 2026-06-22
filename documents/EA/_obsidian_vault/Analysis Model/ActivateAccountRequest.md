---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1575843
diagrams: 4
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 ActivateAccountRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Activate account request message

## 🔗 Connections (6)

- → Dependency: [[AuthorizationTxDto (Class 1819451)]]
- → Dependency: [[ConfirmationTxAndIPTransferDto (Class 1819469)]]
- → Dependency: [[AuthorizationTxAndIPTransferDto (Class 1819465)]]
- → Dependency: [[{MOD}ConfirmationTxDto]]
- → Dependency: [[FeeDto (Class 1819488)]]
- ← Dependency: [[AccountManagementWS]]

## 📊 Appears In (4 diagrams)

- Logical: Account Management - Activate account
- Logical: Account Management - Messages - Interface diagram
- Logical: AccountManagementWS - Contract signing
- Logical: AccountManagementWS - Service overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | ContractCodeType |  |
| initialTransaction | {MOD}ConfirmationTxDto |  |
| initialAuthorization | AuthorizationTxDto |  |
| initialFee | FeeDto |  |
| initialTransactionWithIP | ConfirmationTxAndIPTransferDto |  |
| initialAuthorizationWithIP | AuthorizationTxAndIPTransferDto |  |
