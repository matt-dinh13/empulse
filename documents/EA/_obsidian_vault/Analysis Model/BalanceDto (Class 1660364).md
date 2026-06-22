---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)"
domain: "Analysis Model"
element_id: 1660364
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 BalanceDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)

## 📝 Notes

Account balance.

## 🔗 Connections (1)

- ← Generalization «XSDextension»: [[AccountBalanceDto (Class 1660354)]]

## 📊 Appears In (1 diagrams)

- Logical: AccountManagementWS (v6) - GetAccountBalance

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| holdBalance | MoneyDto |  |
| outstandingDebt | MoneyDto |  |
| ledgerBalance | MoneyDto |  |
| availableBalance | MoneyDto |  |
