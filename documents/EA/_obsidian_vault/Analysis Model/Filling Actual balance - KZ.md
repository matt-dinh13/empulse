---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/Business rule"
domain: "Analysis Model"
element_id: 1154707
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Filling Actual balance - KZ

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/Business rule

## 📝 Notes

Country specific for KZ: 

In grid Actual balance is displayed:

- ALL BillingPeriodBalance where BillingPeriodBalance.billingSessionType = REGULAR, BillingPeriodBalance.cancelled = false

- ALL BillingPeriodBalance where BillingPeriodBalance.billingSessionType = ONE_TIME and BillingPeriodBalance.cancelled = false

## 🔗 Connections (1)

- → Generalization: [[Filling Actual balance]]

## 📊 Appears In (1 diagrams)

- Custom: Business rule
