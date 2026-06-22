---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19573 (CSI-2894) - New Eligibility container conditions"
domain: "Requirements Model"
element_id: 1825240
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Minimal number of paid installments to apply service

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19573 (CSI-2894) - New Eligibility container conditions

## 📝 Notes

{ADD CSI-2917 /}
Check if the number of paid installments of defined type since beginning or last service usage for a client's contract is higher or equal to defined value in MinNumberOfPaidInstallments (FirstUsage or NextUsage). Only created or successfully executed services on contract are counted.

Code: MIN_NUMBER_OF_PAID_INSTALLMENTS_FIXED_PERIOD

Input parameters:

	
- ContractCode


	
- ServiceId
	
- FixedPeriodLength: integer (user defined value)
	
- MaxNumberOfServiceUsageInPeriod: integer (user defined value)
	
- MinNumberOfPaidInstallments_FirstUsage: integer (user defined value)
	
- MinNumberOfPaidInstallments_NextUsage: integer (user defined value)
	
- InstallmentTypes : string [] (user defined list)
	
- PaymentTypes : string [] (user defined list)
	
- PaidWithoutTolerance: bool (user defined value)


Output:

	
- ValidationMessage
	
- CanBeOverruled = TRUE


If FixedPeriodLength<= 0, ValidationMessage = OK and the check ends.

Find start date of current fixed period as follows:
  - set PeriodFrom = 1.1.2000
  - find nearest standard installment in the past (due date <= current date), if found then
  - calculate last installment number in previous period as TRUNC(nearest standard installment.installment number / FixedPeriodLength) * FixedPeriodLength (e.g. for FixedPeriodLength=12 it returns 0, 12, 24, 36 ...) , if  last installment number in previous period  > 0 then
  - set PeriodFrom = last installment number in previous period.DueDate + 1 day  (period starts one day after end of previous period)

Get list of LSR  (Loan Service Requests) including Payhol extension for current period:
  - (Loan Service Request related to ServiceId) and Current Status = CREATED OR EXECUTED and NVL(PayholRequest.FIRST_DEFERRED_DUE_DATE - 1 month, LSR.Transition.Created Date) >= PeriodFrom  for the Contract with ContractCode  
If count of LSR >= MaxNumberOfServiceUsageInPeriod then ValidationMessage = MSG_MaxNumberServiceUsagePerFixedPeriodExceeded (e.g. Maximal number of service usage on the contract per defined fixed period is ${MaxNumberOfServiceUsageInPeriod}) and check ends.

If no LSR exists then CheckDateFrom = PeriodFrom 
else CheckDateFrom = max(NVL(PayholRequest.FIRST_DEFERRED_DUE_DATE - 1 month, LSR.Transition.Created Date))

Get NumberOfPaidInstallments by method GetNumberOfPaidInstallmentsForPeriod with parameters:
- DateFrom = CheckDateFrom 
- DateTo = max date (e.g. .1.1.2999)
- InstallmentTypes 
- PaymentTypes
- PaidWithoutTolerance

If no LSR exists then MinNumberOfPaidInstallments = MinNumberOfPaidInstallments_FirstUsage 
else MinNumberOfPaidInstallments = MinNumberOfPaidInstallments_NextUsage

If NumberOfPaidInstallments < MinNumberOfPaidInstallments then  ValidationMessage = MSG_MinNumberOfPaidInstallmentNotMet (e.g. Minimal number of paid installment since last usage of  service on the contract is ${MinNumberOfPaidInstallments}) and check ends
else ValidationMessage = OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-19573 (CSI-2894) - New Eligibility container conditions
- Custom: Eligibility Criteria Repository
