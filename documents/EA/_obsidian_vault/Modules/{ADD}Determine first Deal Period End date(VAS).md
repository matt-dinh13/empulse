---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model"
domain: "Modules"
element_id: 1827288
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Determine first Deal Period End date(VAS)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model

## 📝 Notes

{ADD CSI-3533 /}
This algorithm determines End Date of the First Deal (insurance) Period for the Insurance Service according to its settings and significant contract related dates, which can be used for the Period determination. 

Input parameters:

	
- InsuranceService - mandatory -- Insurance Service (in specific version)
	
- term - mandatory for CEL, and REL transaction else NULL -- number of loan installments
	
- date signed - optional -- date when loan contract has been signed


	
- transaction signed - optional -- date when initial/first transaction is signed
	
- EoM date - optional -- date when the first end-of-month billing process is finished


	
- date activated - optional -- date when loan contract has been registered


	
- last repayment date - optional -- due date of the last regular installment
	
- estimated duration - optional -- previously estimated (and used) duration
	
- disbursement date - optional -- date of cash loan disbursement


Output parameters:

	
- insurance period end date


Processing:
System determines the end of the first insurance period according to insurance service settings (Insurance Service.First Insurance Period Duration and Insurance Service.First Insurance Period Duration Offset).

	
-  If InsuranceService.First Insurance Period Duration = ESTIMATED_LAST_REPAYMENT_DATE_AND_OFFSET and estimated duration has been passed  in the parameters then the insurance period end date = insurance period start date + estimated duration - 1 day. If estimated duration has not been passed in the parameters system calculates duration as if Insurance Service.First Insurance Period Duration had been set to the LAST_REPAYMENT_DATE_AND_OFFSET
	
- If InsuranceService.First Insurance Period Duration = LAST_REPAYMENT_DATE_AND_OFFSET and Insurance Service.First Insurance Period Trigger = CONTRACT_SENT_TO_APPROVAL_DATE then insurance period end date is set to insurance period start date + term months + defined offset (calendar days).
- else  If InsuranceService.First Insurance Period Duration = LAST_REPAYMENT_DATE_AND_OFFSET and last repayment date is not given then insurance period end date is set to insurance period start date + term months + defined offset (calendar days).
- else insurance period end date is set to last repayment date + defined offset (calendar days) 
	
- If InsuranceService.First Insurance Period Duration = NUMBER_OF_DAYS then the insurance period end date is set as follow:
-- the insurance period start date + defined offset (calendar days) - 1
	
- If InsuranceService.First Insurance Period Duration = CALENDAR_MONTH then the insurance period end date = (insurance period start date + 1 month) - 1day. (Setting of Insurance period offset has no effect for this parameter)
	
- If InsuranceService.First Insurance Period Duration = CALENDAR_YEAR then the insurance period end date = (insurance period start date + 1 year) - 1day. (Setting of Insurance period offset has no effect for this parameter)
	
- If InsuranceService.First Insurance Period Duration = BILLING_PERIOD then the insurance period end date = (insurance period start date + 1 month) - 1day. (Setting of Insurance period offset has no effect for this parameter)
	
- If InsuranceService.First Insurance Period Duration = TERM_COUNT_WITH_LIMIT then insurance period end date = insurance period start date + min(Insurance Service.Term Count Limit, term months) + defined offset (calendar days) - 1 day
	
- If InsuranceService.First Insurance Period Duration = TERM_COUNT then insurance period end date = insurance period start date + (InsuranceService.Term Count Limit months) + (InsuranceService.First Period Duration Offset calendar days) - 1day


Exceptions:
If any of the optional values is not specified and it is inevitable for calculation, business rule cannot be evaluated and generates an error (this error can be expected and handled by logic from which insurance period determination has been invoked).

## 🔗 Connections (1)

- ← Dependency: [[11.040 Activate Deal (VAS)]]

## 📊 Appears In (2 diagrams)

- Use Case: Activate Deal - Use Case Model
- Use Case: Deal management - Use Case Model
