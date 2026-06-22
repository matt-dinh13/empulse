---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)"
domain: "Analysis Model"
element_id: 1698933
diagrams: 1
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 ActivateAccountRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)

## 📝 Notes

Activate account request.

## 🔗 Connections (7)

- → Dependency: [[ContractCodeType (Class 1660372)]]
- → Dependency: [[AuthorizationTxDto]]
- → Dependency: [[ConfirmationTxAndIPTransferDto]]
- → Dependency: [[FeeDto]]
- → Dependency: [[AuthorizationTxAndIPTransferDto]]
- → Dependency: [[ConfirmationTxDto]]
- ← Dependency: [[AccountManagementWS (v6) (Interface 1698913)]]

## 📊 Appears In (1 diagrams)

- Logical: AccountManagementWS (v6) - ActivateAccount

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | ContractCodeType |  |
| initialTransaction | ConfirmationTxDto |  |
| initialAuthorization | AuthorizationTxDto |  |
| initialFee | FeeDto |  |
| initialTransactionWithIP | ConfirmationTxAndIPTransferDto |  |
| initialAuthorizationWithIP | AuthorizationTxAndIPTransferDto |  |
