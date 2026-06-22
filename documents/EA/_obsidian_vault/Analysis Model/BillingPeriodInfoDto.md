---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1819484
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 BillingPeriodInfoDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Billing session meta data.

## 🔗 Connections (2)

- ← Dependency: [[GetBillingPeriodsResponse]]
- → Dependency: [[BillingSessionTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: AccountManagementWS - Print last statement
- Logical: AccountManagementWS - Terminate account

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| billingPeriodBalanceId | long |  |
| periodStart | date |  |
| periodEnd | date |  |
| billingSessionType | BillingSessionTypeDto |  |
