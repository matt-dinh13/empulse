---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages"
domain: "Analysis Model"
element_id: 1575802
diagrams: 3
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 GenerateStatementRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages

## 📝 Notes

Generate statement for billing period balance.

## 🔗 Connections (1)

- ← Dependency: [[AccountManagementWS]]

## 📊 Appears In (3 diagrams)

- Logical: Account Management - Messages - Interface diagram
- Logical: AccountManagementWS - Print last statement
- Logical: AccountManagementWS - Service overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| forceNewStatement | boolean[0..1] |  |
| billingPeriodBalanceId | long |  |
