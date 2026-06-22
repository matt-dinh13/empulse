---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1819451
diagrams: 5
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 AuthorizationTxDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Transaction definition for authorization.

## 🔗 Connections (7)

- ← Dependency: [[AuthorizeTransactionWithIPOfferRequest]]
- ← Dependency: [[ActivateAccountRequest]]
- → Dependency: [[PositiveMoneyDto]]
- ← Dependency: [[AuthorizationTxAndIPTransferDto (Class 1819465)]]
- → Dependency: [[TransactionTypeVariantTypeDto (Class 1734235)]]
- → Dependency: [[AuthorizationModeDto]]
- → Generalization «XSDextension»: [[TransactionDto]]

## 📊 Appears In (5 diagrams)

- Logical: Account Management - Activate account
- Logical: Account management structures
- Logical: Account management structures - Initial Transaction
- Logical: AccountManagementWS - Contract signing
- Logical: AuthorizeTransactionWithIPVariant

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| authorizationDate | date |  |
| authorizationMode | AuthorizationModeDto |  |
| billingAmount | PositiveMoneyDto |  |
| transactionTypeVariant | TransactionTypeVariantTypeDto |  |
