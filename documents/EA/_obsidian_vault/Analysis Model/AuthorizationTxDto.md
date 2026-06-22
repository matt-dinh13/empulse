---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)"
domain: "Analysis Model"
element_id: 1660361
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 AuthorizationTxDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)

## 📝 Notes

Transaction definition for authorization.

## 🔗 Connections (2)

- → Dependency: [[PositiveMoneyDto]]
- ← Dependency: [[ActivateAccountRequest (Class 1698933)]]

## 📊 Appears In (1 diagrams)

- Logical: AccountManagementWS (v6) - ActivateAccount

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| billingAmount | PositiveMoneyDto |  |
| authorizationMode | AuthorizationModeDto |  |
| authorizationDate | date |  |
| transactionTypeVariant | TransactionTypeVariantTypeDto |  |
