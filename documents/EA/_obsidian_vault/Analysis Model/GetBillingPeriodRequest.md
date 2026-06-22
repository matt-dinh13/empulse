---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1575800
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 GetBillingPeriodRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Search request by filter

## 🔗 Connections (2)

- → Dependency: [[BillingPeriodFilterDto]]
- ← Dependency: [[AccountManagementWS]]

## 📊 Appears In (3 diagrams)

- Logical: AccountManagementWS - Print last statement
- Logical: AccountManagementWS - Service overview
- Logical: AccountManagementWS - Terminate account

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| filter | BillingPeriodFilterDto |  |
