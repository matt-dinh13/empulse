---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-14272 (CSI-1000) Update Termination Feature for Regular and Upfront Insurance"
domain: "Requirements Model"
element_id: 1637939
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Calculate remaining principal on fee termination - IS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-14272 (CSI-1000) Update Termination Feature for Regular and Upfront Insurance

## 📝 Notes

This scenario described calculation of a remaining provided credit amount after deduction of a fee which is part of principal and is terminated to defined installment due date.

Input parameters for the function calling:

	
- Contract
	
- TerminationDate (due date of nearest installment where fee is to be terminated)
	
- FeeAmount (amount of the fee to be terminated
	
- RemainingFeeCalculationType (Way of remaining fee calculation: IN_PROPORTION_TO_TERM/IN_PROPORTION_TO_PRINCIPAL)


The API returns

	
- RemainingFee (the remaining fee amount to be removed from the future Provided Credit Amount)
	
- RemainingProvidedCreditAmount (the future Provided Credit Amount without terminated fee)



	
- System gets active Contract Financial Parameters (FP) for provided Contract
	
- System gets InstallmentNumber as Installment.Installment Number where Due Date = TerminationDate
	
- Calculate remaining period of the installment schedule as:
RemainingPeriod (months) = FP.Term - InstallmentNumber
	
- If RemainingPeriod <=0, then scenario returns WarningMessage = MSG_CELInsuranceNoRemainingPeriodForCalculation and ends
	
- System calculates RemainingFee and RemainingProvidedCreditAmount as follow (only for insurance going into the Principal):
RemainingProvidedCreditAmountTotal = FP.Provided Credit Amount - (Sum of Principal Installment Parts with Installment Due Date <= TerminationDate) -- remaining principal to termination due date 
If RemainingFeeCalculationType = IN_PROPORTION_TO_TERM  -- way (type) of remaining fee calculation
- RemainingFee = (FeeAmount / FP.Term) * RemainingPeriod -- unused (undraw) fee
- RemainingProvidedCreditAmount = RemainingProvidedCreditAmountTotal - RemainingFee 
If RemainingFeeCalculationType = IN_PROPORTION_TO_PRINCIPAL 
- RemainingFee = RemainingProvidedCreditAmountTotal * (FeeAmount /FP.Provided Credit Amount)
- RemainingProvidedCreditAmount = RemainingProvidedCreditAmountTotal - RemainingFee
	
- Scenario ends

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Calculate new installment amount on service termination]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-14272 (CSI-1000) Update Termination Feature for Regular and Upfront Insurance
- Custom: CBL-25867 (CSI-3602) Removal of fee after contract service termination
