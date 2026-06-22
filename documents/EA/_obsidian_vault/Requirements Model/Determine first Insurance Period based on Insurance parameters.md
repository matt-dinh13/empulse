---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25261 (CSI-3472) Insurance Period update on Loan change"
domain: "Requirements Model"
element_id: 1856388
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Determine first Insurance Period based on Insurance parameters

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25261 (CSI-3472) Insurance Period update on Loan change

## 📝 Notes

-- derived from the "Determine first insurance period" called e.g. UC01.186 Prepare documentation, part of "Create insurance contracts for insurance services"
This algorithm determines the first insurance period for the insurance service according to its settings and significant loan related data, which can be used for period determination. The algorithm is only used for the first insured period when Insurance Contract is originated. 
Input:

	
- ServiceDefinition - mandatory - Insurance Service (in specific version)
	
- term - optional  - number of loan installments
	
- dateSigned - optional - date when the loan has been signed


	
- lastRepaymentDate - optional - due date of the last regular installment
	
- {ADD CSI-3533}activationDate - optional -- date of the insurance activation{/ADD}


Output:

	
- insurance period start date
	
- insurance period end date


Steps:

	
- System determines the beginning of the first insurance period according to InsuranceService parameters  
- InsuranceService.First Insurance Period Trigger
- InsuranceService.First Insurance Period Offset (defined offset)
If InsuranceService.First Insurance Period Trigger = CONTRACT_SIGNING_ DATE_AND_OFFSET then the insurance period start date is set to dateSigned + defined offset (calendar days), otherwise an error is returned
{ADD CSI-3533}If InsuranceService.First Insurance Period Trigger = EXTERNAL_ACTIVATION then 
-- if activationDate is provided, the insurance period start date = activationDate else the insurance period start date = current date{/ADD}
	
- System determines the end of the first insurance period according to ServiceDefinition 
- Insurance Service.First Insurance Period Duration
- Insurance Service.First Insurance Period Duration Offset
2.2  If InsuranceService.First Insurance Period Duration = LAST_REPAYMENT_DATE_AND_OFFSET {ADD CSI-3472} or LAST_REPAYMENT_DATE_AND_PROLONGATION {/ADD} and
- lastRepaymentDate is not given then insurance period end date is set to insurance period start date + term months + defined offset (calendar days)
- lastRepaymentDate is given insurance period end date is set to lastRepaymentDate + defined offset (calendar days)
- otherwise an error is returned
2.3 If InsuranceService.First Insurance Period Duration = NUMBER_OF_DAYS then the insurance period end date is set as follow:
-- the insurance period start date + defined offset (calendar days) - 1
2.4 If InsuranceService.First Insurance Period Duration = CALENDAR_MONTH then the insurance period end date = (insurance period start date + 1 month) - 1day. (Setting of Insurance period offset has no effect for this parameter)
2.5 If InsuranceService.First Insurance Period Duration = CALENDAR_YEAR then the insurance period end date = (insurance period start date + 1 year) - 1day. (Setting of Insurance period offset has no effect for this parameter)
2.6 If InsuranceService.First Insurance Period Duration = TERM_COUNT_WITH_LIMIT then insurance period end date = insurance period start date + min(Insurance Service.Term Count Limit, term months) + defined offset (calendar days) - 1 day
2.7 If InsuranceService.First Insurance Period Duration = TERM_COUNT then insurance period end date = insurance period start date + (InsuranceService.Term Count Limit months) + (InsuranceService.First Period Duration Offset calendar days) - 1day
	
- System returns the result

## 🔗 Connections (1)

- ← Dependency: [[11.147 Activate insurance on contract]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-25261 (CSI-3472) Insurance Period update on Loan change
- Use Case: Changing insurance operation status
