---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model"
domain: "Modules"
element_id: 1827560
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Determine next Deal Period

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model

## 📝 Notes

{ADD CSI-2967 /}
This algorithm determines next Deal period for the insurance service according to its settings and last period end date.

Input parameters:

	
- ServiceDefinition  - mandatory -- Insurance Service setting (specific version)


	
- LastPeriodEndDate - mandatory


Output parameters:

	
- NextPeriodStartDate
	
- NextPeriodEndDate


Processing:

A. System calculates the beginning of next insurance period based on end date of the last insurance period: 
- NextPeriodStartDate = LastPeriodEndDate + 1 day.

B. System determines end of next insurance period (NextPeriodEndDate) by Insurance Service.Next Period Duration variant as follow

	
- If Insurance Service.Next Period Duration = NUMBER_OF_DAYS then
- NextPeriodEndDate = NextPeriodStartDate +  Insurance Service.Next Period Duration Offset (calendar days) - 1day
	
- If Insurance Service.Next Period Duration = CALENDAR_MONTH then
- next period end date = (NextPeriodStartDate  + 1 month) -1 day (adding one month to a date example:. 16.5.2016 + 1 month returns 16.6.2016; 30.1.2016 + 1 month returns 29.2.2016)
	
- If Insurance Service.Next Period Duration = CALENDAR_YEAR then
- NextPeriodEndDate = (NextPeriodStartDate + 1 year) -1 day
	
- If Insurance Service.Next Period Duration = BILLING_PERIOD then the next period end date = (next period start date + 1 month) - 1day. (Setting of Insurance period offset has no effect for this parameter)

## 🔗 Connections (1)

- ← Dependency: [[{ADD}11.072 Create New Period for Prolongation (VAS)]]

## 📊 Appears In (2 diagrams)

- Use Case: Deal Period prolongation - Use Case Model
- Use Case: Deal prolongation method
