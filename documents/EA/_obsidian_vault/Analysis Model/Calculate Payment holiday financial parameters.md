---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules"
domain: "Analysis Model"
element_id: 1619098
diagrams: 4
connections: 8
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate Payment holiday financial parameters

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules

## 📝 Notes

This rule describes generating PH part of installment schedule 
Input:

	
- Contract.Financial Parameters (FP)
	
- Installment Schedule (IS) - the current installment schedule of the Contract


	
- MaxInstallmentVersion


	
- Loan Service Request


Output:

	
- Loan Service Request


Loan Service Request.Service Offer Installment (SOI) is used as structure for PH installment schedule

	
- Get basic parameters for PH installment schedule:
- DeferredPeriodStartDate = Loan Service Request.Deferred Period Start Date
- DeferredInstallmentNumber = Loan Service Request.First Deferred Installment Number
- DeferredPeriodsCount = Loan Service Request.Deferred Periods Number
- LastExtraordinaryInstallmentNumber = Max (Installment Number) + 1 from the Installments having Installment Type = EXTRAORDINARY and Active Flag = 1
	
- Generate PH Installment with fake Installment Part for each deferred period in count of DeferredPeriodsCount into SOI (it means, if DeferredPeriodsCount = 2, we create 2 fake installments):
- Due Date = get IS.Due Date having Installment Number = DeferredInstallmentNumber, {ADD CLM-2638}if this installment number does not exist then Due Date = Due Date of previous installment number + 1 month{/ADD}
- Customer Due Date = SOI.Due Date – DaysBeforeDueDate (value from Global Parameter)
- Installment Number = DeferredInstallmentNumber for the first PH Installment, for each next Installment increase DeferredInstallmentNumber with 1
- Installment Version = MaxInstallmentVersion
- Deactivated In Version = NULL
- Installment Type = STANDARD
- Recalculation Reason = PH
- Active Flag = 1
SOI.Installment Part for Part Type = S (fake principal item used for visualization and evidence of PH)
- Amount = 0
- Paid Amount = 0
- Fully Paid Date = SOI.Due Date
	
- If Charged Fee To Request exists, generate PH Installment with Fee Installment Part for each deferred period in count of DeferredPeriodsCount into SOI as follow
- set FeeDueDate = DeferredPeriodStartDate
- While FeeDueDate < current date (an Installment is overdue), add 1 month to FeeDueDate (find first Installment which is not overdue, if so, continue with next installment)
- Due Date = FeeDueDate , for each next PH fee Installment add 1 month 
- Customer Due Date = SOI.Due Date – DaysBeforeDueDate (value from Global Parameter)
- Installment Number = LastExtraordinaryInstallmentNumber for the first PH fee Installment, for each next Installment increase with 1
- Installment Version = MaxInstallmentVersion
- Deactivated In Version = NULL
- Installment Type = EXTRAORDINARY
- Recalculation Reason = PH
- Active Flag = 1
For each Tariff Item in Charged Fee To Request, generate SOI.Installment Part for Part Type = 'F' (Fee)
- Amount = Charged Fee To Request.Amount
- Paid Amount = 0
- Fully Paid Date = NULL
- reference to Tariff Item Type
	
- {ADD CBL-10476}If recalculation reason PH is listed in GlobalParameter.IsRecalcResUpdateExtraInstDD
For each Original Installment in having installmentPart.TariffItemType = PHIO
- set the original Installment as inactive
    - I.Active Flag = 0
    - I. Deactivated In Version = MV incremented by 1
- create a new extraordinary Installment (I) with Installment Part (IP) as a copy of original Installment as follow (only changed attributes are mentioned, remaining stay the same):
    - I.Due Date = original installment + LSR.Deferred Periods Number * months
    - I.Customer Due Date = I.Due Date – [DaysBeforeDueDate] system parameter
    - I.Installment Number = I.Installment Number of the last extraordinary Installment ( i.e. MAX (I.Installment Number) having Installment Number > 100) + 1. If no such installment exists, it is set to 101
    - I.Version = MV + 1
    - I.Active Flag = 1
    - IP.Amount Paid = 0
{/ADD CBL-10476}
	
- Update the Financial Parameters (AFP) auxiliary structure with new values (not in database!):
- AFP.Provided Credit Amount = FP.Provided Credit Amount - sum (Installment Part.Amount) from the IS Installments having Part Type = 'S' and Installment Type = STANDARD and Due Date < DeferredPeriodStartDate 
- AFP.Annuity = FP.Annuity 
- AFP.Term = FP.Term - (Count of Installment having Installment Type = STANDARD and Due Date < LSR.First Deferred Due Date)
- AFP.Loan Providing Date = Last SOI.Due Date having Recalculation Reason = 'PH' {ADD CLM-2638}and Installment Type = STANDARD{/ADD}  (start of interest period after PH)
- AFP.First Due Date = AFP.Loan Providing Date + 1 month (due date for the first postponed Installment)
- set LSR.First Deferred Due Date = AFP.First Due Date
	
- Generate standard Installments for RemainingPrincipal by Generate installment schedule algorithm with parameters
- the processed Contract
- Financial Parameters (AFP)
- Recalculation reason = 'GN'
- Installment Version = MaxInstallmentVersion
- Installment Number = DeferredInstallmentNumber
If an error is returned, SOI is set as empty and scenario ends
	
- Returned Installment Schedule data is copied into SOI and scenario ends

## 🔗 Connections (7)

- → Dependency: [[{MOD}Generate installment schedule algorithm]]
- → Dependency: [[{MOD}Algorithm_ Calculate tariff item amount]]
- → Dependency: [[Algorithm_ Find tariff items by usage]]
- ← Dependency: [[01.797 Create ContractPayholRequest service]]
- ← Dependency: [[01.796 Get ContractPayholRequest preview service]]
- ← Dependency: [[{MOD}08.362 Process payment holiday request]]
- ← Dependency: [[08.354 Show parameters of payment holiday (UseCase 1862151)]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Use Case: Payment holiday processing
- Use Case: Payment holiday request creation - externally
- Use Case: Payment holiday request creation - via GUI
