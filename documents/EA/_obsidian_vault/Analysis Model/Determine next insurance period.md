---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules"
domain: "Analysis Model"
element_id: 1876176
diagrams: 4
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Determine next insurance period

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules

## 📝 Notes

This algorithm determines next insurance period for the insurance service according to its settings and last period end date.

Input parameters:


	
- Insurance Service - Insurance Service setting (specific version) - mandatory 


	
- last period end date - mandatory


Output parameters:


	
- next period start date
	
- next period end date


Processing:

A. System calculates the beginning of next insurance period based on end date of the last insurance period: 
- next period start date = last period end date + 1 day.

B. System determines end of next insurance period (next period end date) by Insurance Service.Next Period Duration variant as follow

	
- If Insurance Service.Next Period Duration = NUMBER_OF_DAYS then
- next period end date = next period start date +  Insurance Service.Next Period Duration Offset (calendar days) - 1day

	
- If Insurance Service.Next Period Duration = CALENDAR_MONTH then
- next period end date = (next period start date + 1 month) -1 day (adding one month to a date example:. 16.5.2016 + 1 month returns 16.6.2016; 30.1.2016 + 1 month returns 29.2.2016)

	
- If Insurance Service.Next Period Duration = CALENDAR_YEAR then
- next period end date = (next period start date + 1 year) -1 day

	
- If Insurance Service.Next Period Duration = BILLING_PERIOD then the next period end date = (next period start date + 1 month) - 1day. (Setting of Insurance period offset has no effect for this parameter)

## 🔗 Connections (3)

- ← Dependency: [[Maximum client's age]]
- ← Dependency: [[01.739 Process Account Balance Change EOM notification]]
- ← Dependency: [[11.081 Prolong insurance contracts]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: Requirements: CBL-11727 (CSI-376) CSI Modularization - Insurance Contract
- Use Case: Insurance based on AccountBalanceChange EOM event
- Use Case: Insurance prolongation
