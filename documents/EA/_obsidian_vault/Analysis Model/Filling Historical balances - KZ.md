---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/Business rule"
domain: "Analysis Model"
element_id: 1154706
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Filling Historical balances - KZ

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/Business rule

## 📝 Notes

If user clicks in grid Actual balance on:


	
- record which BillingPeriodBalance.BillingSessionType = REGULAR

then  grid Historical balances is displayed as empty table.
2.     record which BillingPeriodBalance.BillingSessionType = ONE_TIME
then in grid Historical balances is displayed
	- record which BillingPeriodBalance.BillingSessionType = REGULAR AND BillingPeriodBalance.cancelled = TRUE AND  which BillingPeriodBalance.periodEnd is the same date as periodEnd of record from grid Actual balance 
	-   records which BillingPeriodBalance.BillingSessionType = ONE_TIME AND BillingPeriodBalance.cancelled = TRUE AND which BillingPeriodBalance.periodEnd is the same date as periodEnd of record from grid Actual balance

## 🔗 Connections (1)

- → Generalization: [[Filling Historical balances]]

## 📊 Appears In (1 diagrams)

- Custom: Business rule
