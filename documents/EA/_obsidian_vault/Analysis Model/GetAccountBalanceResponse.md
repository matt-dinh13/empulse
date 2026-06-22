---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages"
domain: "Analysis Model"
element_id: 1575844
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetAccountBalanceResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages

## 📝 Notes

Get account balance result message

## 🔗 Connections (3)

- → Dependency «use»: [[BalanceDto (Class 1819483)]]
- → Generalization «XSDextension»: [[AccountManagementResponseBaseDto (Class 1819447)]]
- ← Dependency: [[AccountManagementWS]]

## 📊 Appears In (3 diagrams)

- Logical: Account Management - Messages - Interface diagram
- Logical: AccountManagementWS - GetAccountBalance
- Logical: AccountManagementWS - Service overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| balance | AccountBalanceDto |  |
