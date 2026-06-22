---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules"
domain: "Analysis Model"
element_id: 1876164
diagrams: 16
connections: 9
tags:
  - requirement
  - analysis-model
---

# 📋 Determine first insurance period

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules

## 📝 Notes

This algorithm determines the first insurance period for the insurance service according to its settings and significant contract related dates, which can be used for period determination. The algorithm is only used for the first insured period when insurance contract is originated. For insurance prolongation, Determine next insurance period rule is used.

Input parameters:

	
- InsuranceService - mandatory -- Insurance Service (in specific version)
	
- term - mandatory for CEL, else NULL -- number of loan installments
	
- date sent to approval - optional -- date when loan contract has been sent to approval
	
- date signed - optional -- date when loan contract has been signed


	
- transaction signed - optional -- date when initial/first transaction is signed
	
- EoM date - optional -- date when the first end-of-month billing process is finished


	
- date activated - optional -- date when loan contract has been registered


	
- last repayment date - optional -- due date of the last regular installment
	
- estimated duration - optional -- previously estimated (and used) duration
	
- disbursement date - optional -- date of cash loan disbursement
	
- external -activation date - optional -- date is provided at the external activation of the insurance


Output parameters:

	
- insurance period start date
	
- insurance period end date


Processing:
 

	
- System determines the beginning of the first insurance period according to insurance service settings 
> InsuranceService.First Insurance Period Trigger
> InsuranceService.First Insurance Period Offset (defined offset). 

1.1 If InsuranceService.First Insurance Period Trigger = CONTRACT_SENT_TO_APPROVAL_DATE_AND_OFFSET then the insurance period start date is set to date sent to approval + defined offset (calendar days)
1.2 If InsuranceService.First Insurance Period Trigger = CONTRACT_SIGNING_ DATE_AND_OFFSET then the insurance period start date is set to date signed + defined offset (calendar days)
1.3 If InsuranceService.First Insurance Period Trigger = CONTRACT_ACTIVATION_DATE_AND_OFFSET then the insurance period start date is set to date activated + defined offset (calendar days)
1.4 If InsuranceService.First Insurance Period Trigger = FIRST_TRANSACTION_SIGN_DATE_AND_OFFSET then the insurance period start date is set to transaction signed + defined offset (calendar days)
1.5 If InsuranceService.First Insurance Period Trigger = FIRST_EOM_BILLING_DATE then the insurance period start date is set to EoM date
1.6 If InsuranceService.First Insurance Period Trigger = RELATED_CONTRACT_DISBURSEMENT_DATE_AND_OFFSET then the insurance period start date is set to disbursement date + defined offset (calendar days)
1.7 If InsuranceService.First Insurance Period Trigger = EXTERNAL_ACTIVATION then the insurance period start date is set to external activation date

2. System determines the end of the first insurance period according to insurance service settings (Insurance Service.First Insurance Period Duration and Insurance Service.First Insurance Period Duration Offset).

2.1 If InsuranceService.First Insurance Period Duration = ESTIMATED_LAST_REPAYMENT_DATE_AND_OFFSET and estimated duration has been passed  in the parameters then the insurance period end date = insurance period start date + estimated duration - 1 day. If estimated duration has not been passed in the parameters system calculates duration as if Insurance Service.First Insurance Period Duration had been set to the LAST_REPAYMENT_DATE_AND_OFFSET

2.2 If InsuranceService.First Insurance Period Duration = LAST_REPAYMENT_DATE_AND_OFFSET   or LAST_REPAYMENT_DATE_AND_PROLONGATION and Insurance Service.First Insurance Period Trigger = CONTRACT_SENT_TO_APPROVAL_DATE then insurance period end date is set to insurance period start date + term months + defined offset (calendar days).
- else  If InsuranceService.First Insurance Period Duration = LAST_REPAYMENT_DATE_AND_OFFSET or LAST_REPAYMENT_DATE_AND_PROLONGATION and last repayment date is not given then insurance period end date is set to insurance period start date + term months + defined offset (calendar days).
- else insurance period end date is set to last repayment date + defined offset (calendar days) 

2.3 If InsuranceService.First Insurance Period Duration = NUMBER_OF_DAYS then the insurance period end date is set as follow:
-- the insurance period start date + defined offset (calendar days) - 1

2.4 If InsuranceService.First Insurance Period Duration = CALENDAR_MONTH then the insurance period end date = (insurance period start date + 1 month) - 1day. (Setting of Insurance period offset has no effect for this parameter)

2.5 If InsuranceService.First Insurance Period Duration = CALENDAR_YEAR then the insurance period end date = (insurance period start date + 1 year) - 1day. (Setting of Insurance period offset has no effect for this parameter)

2.6 If InsuranceService.First Insurance Period Duration = BILLING_PERIOD then the insurance period end date = (insurance period start date + 1 month) - 1day. (Setting of Insurance period offset has no effect for this parameter)

2.7 If InsuranceService.First Insurance Period Duration = TERM_COUNT_WITH_LIMIT then insurance period end date = insurance period start date + min(Insurance Service.Term Count Limit, term months) + defined offset (calendar days) - 1 day

2.8 If InsuranceService.First Insurance Period Duration = TERM_COUNT then insurance period end date = insurance period start date + (InsuranceService.Term Count Limit months) + (InsuranceService.First Period Duration Offset calendar days) - 1day

Exceptions:
If any of the optional values is not specified and it is inevitable for calculation, business rule cannot be evaluated and generates an error (this error can be expected and handled by logic from which insurance period determination has been invoked).

## 🔗 Connections (9)

- ← Dependency: [[Maximum client's age]]
- ← Dependency: [[{DEL}Evaluation of Product Offers]]
- ← Dependency: [[{MOD}NEW_Evaluation of Product Offers]]
- ← Dependency: [[Create insurance contracts for insurance services]]
- ← Dependency: [[Create first insurance period upon activation]]
- ← Dependency: [[Create first Insurance Period upon related Contract disbursement]]
- ← Dependency: [[Evaluation of product sub-variant]]
- ← Dependency: [[{MOD}Offer recalculation]]
- ← Dependency: [[08.348 Calculate Insurance offer parameters]]

## 📊 Appears In (16 diagrams)

- Custom: Business Rules
- Custom: CBL-25261 (CSI-3472) Insurance Period update on Loan change
- Custom: CBL-25266 (CSI-3437) VN New insurance on card product
- Custom: CBL-3736 (CLM-1489) Additional Protection Validity Period
- Custom: Eligible Insurance Service
- Custom: Evaluation of product sub-variant
- Custom: Evaluation of Products based on Financing Scheme
- Custom: Offer recalculation
- Use Case: Activate Insurance contract
- Use Case: Activate Insurance on related CL Contract disbursement
- Use Case: CLM-6044 Activate Insurance on related CL Contract disbursement
- Use Case: Create and Sign Insurance contract
- Use Case: CSI-2977 COS - Process Contract notifications to Deal activation
- Use Case: CSI-2977 COS - Process Contract notifications to Deal activation
- Use Case: Insurance Service Offers API - Use Case Model
- Use Case: Insurance Service Offers UI - Use Case Model
