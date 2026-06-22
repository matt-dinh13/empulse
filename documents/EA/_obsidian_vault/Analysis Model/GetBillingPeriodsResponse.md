---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1575808
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 GetBillingPeriodsResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Billing periods by criteria. Only statement eligible billing sessions are returned.
Cancelled billing sessions and simulation billing sessions are excluded automatically.

## 🔗 Connections (2)

- → Dependency: [[BillingPeriodInfoDto]]
- ← Dependency: [[AccountManagementWS]]

## 📊 Appears In (3 diagrams)

- Logical: AccountManagementWS - Print last statement
- Logical: AccountManagementWS - Service overview
- Logical: AccountManagementWS - Terminate account

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| periods | BillingPeriodInfoDto |  |
