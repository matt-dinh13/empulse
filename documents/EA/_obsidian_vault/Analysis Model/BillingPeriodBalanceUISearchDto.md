---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI"
domain: "Analysis Model"
element_id: 1309277
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 BillingPeriodBalanceUISearchDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI

## 📝 Notes

Billing period search.

## 🔗 Connections (2)

- ← Dependency «use»: [[GetAccountBillingPeriodBalancesRequest]]
- → Dependency: [[BillingSessionTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: Account UI - Interface diagram - Balances
- Logical: Structures

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | AccountNumberType |  |
| billingSessionType | BillingSessionTypeDto [0..*] |  |
| cancelled | boolean |  |
| periodEndRange | DateRangeDto |  |
| periodStartRange | DateRangeDto |  |
