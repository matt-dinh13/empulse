---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)"
domain: "Analysis Model"
element_id: 1660360
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ConfirmationTxAndIPTransferDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)

## 📝 Notes

Transaction confirmation object which will be then transferred to installment plan using the offer code from IP which is returned in IP calculation.

## 🔗 Connections (2)

- → Dependency: [[PositiveMoneyDto]]
- ← Dependency: [[ActivateAccountRequest (Class 1698933)]]

## 📊 Appears In (1 diagrams)

- Logical: AccountManagementWS (v6) - ActivateAccount

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transaction | ConfirmationTxDto |  |
| offerCode | TransactionTypeVariantTypeDto |  |
| goodsPrice | PositiveMoneyDto |  |
| offerDate | date |  |
