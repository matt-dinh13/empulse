---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1160761
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 BillingPeriodFilterDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Search filter by account number and optional date range.

## 🔗 Connections (2)

- → Dependency: [[DateRangeDto (Class 1819457)]]
- ← Dependency: [[GetBillingPeriodRequest]]

## 📊 Appears In (3 diagrams)

- Logical: AccountManagementWS - Print last statement
- Logical: AccountManagementWS - Terminate account
- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | AccountNumberType |  |
| periodEndRange | DateRangeDto |  |
| includeCurrentPeriod | boolean |  |
