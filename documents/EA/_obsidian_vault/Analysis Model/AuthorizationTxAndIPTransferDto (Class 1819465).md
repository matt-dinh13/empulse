---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1819465
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 AuthorizationTxAndIPTransferDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Transaction authorization object which will be transferred to installment plan on confirmation using the offer code from IP which is returned in IP calculation

## 🔗 Connections (2)

- ← Dependency: [[ActivateAccountRequest]]
- → Dependency: [[AuthorizationTxDto (Class 1819451)]]

## 📊 Appears In (2 diagrams)

- Logical: Account Management - Activate account
- Logical: Account management structures - Initial Transaction

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| authorization | AuthorizationTxDto |  |
| offerCode | TransactionTypeVariantTypeDto |  |
