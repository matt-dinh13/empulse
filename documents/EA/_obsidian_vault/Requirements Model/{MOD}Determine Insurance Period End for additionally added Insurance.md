---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25261 (CSI-3472) Insurance Period update on Loan change"
domain: "Requirements Model"
element_id: 1826878
diagrams: 2
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Determine Insurance Period End for additionally added Insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25261 (CSI-3472) Insurance Period update on Loan change

## 📝 Notes

A rule for determination of the end date of Insurance Period

Input parameters:

	
- InsuranceService
	
- InsurancePeriodStartDate
	
- LastRepaymentDate


Output:

	
- InsurancePeriodEndDate



	
- If InsuranceService.First Insurance Period Duration = LAST_REPAYMENT_DATE_AND_OFFSET {ADD CSI-3472} or LAST_REPAYMENT_DATE_AND_PROLONGATION {/ADD} then InsurancePeriodEndDate is set to LastRepaymentDate + defined offset (calendar days)
	
- If InsuranceService.First Insurance Period Duration = NUMBER_OF_DAYS then the InsurancePeriodEndDate  is set to InsurancePeriodStartDate + defined offset (calendar days) - 1
	
- If InsuranceService.First Insurance Period Duration = CALENDAR_MONTH then the InsurancePeriodEndDate  = (InsurancePeriodStartDate  + 1 month) - 1day. (Setting of Insurance period offset has no effect for this parameter)
	
- If InsuranceService.First Insurance Period Duration = CALENDAR_YEAR then the InsurancePeriodEndDate  = (InsurancePeriodStartDate  + 1 year) - 1day. (Setting of Insurance period offset has no effect for this parameter)
	
- If InsuranceService.First Insurance Period Duration = TERM_COUNT_WITH_LIMIT then InsurancePeriodEndDate = InsurancePeriodStartDate + min(Insurance Service.Term Count Limit, term months) + defined offset (calendar days) - 1 day
	
- If InsuranceService.First Insurance Period Duration = TERM_COUNT then InsurancePeriodEndDate  = InsurancePeriodStartDate + (InsuranceService.Term Count Limit months) + (InsuranceService.First Period Duration Offset calendar days) - 1day


Exceptions:
If any of the optional values is not specified and it is inevitable for calculation, business rule cannot be evaluated and generates an error (this error can be expected and handled by logic from which insurance period determination has been invoked).

## 🔗 Connections (2)

- ← Dependency: [[11.152 Activate additionally added Insurance (CEL)]]
- ← Dependency: [[11.780 Process Insurance cancellation or termination event]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-25261 (CSI-3472) Insurance Period update on Loan change
- Use Case: Replacement of standard insurance upon its cancelation or termination
