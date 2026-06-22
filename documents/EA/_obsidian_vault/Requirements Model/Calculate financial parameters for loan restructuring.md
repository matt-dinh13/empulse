---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11449 (CSI-314) Loan restructuring printout"
domain: "Requirements Model"
element_id: 1762066
diagrams: 5
connections: 7
tags:
  - requirement
  - requirements-model
---

# 📋 Calculate financial parameters for loan restructuring

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11449 (CSI-314) Loan restructuring printout

## 📝 Notes

This rule describes generating restructured parts of installment schedule for contract
Input:

	
- Contract.Financial Parameters (FP)
	
- Installment Schedule - the current installment schedule of the Contract


	
- Loan Service Request (LSR) for Loan Restructuring Service


	
- MaxInstallmentVersion


Output:

	
- Loan Service Request


Loan Service Request.Service Offer Installment (SOI) is used as structure for restructured installment schedule

	
- Get basic parameters for restructured installment schedule:
- RestructuringStartDate = Loan Service Request.Restructuring Start Date
- set LSR.First Due Date Restructured = get date by Determine first due date of restructured installments rule with parameters: Loan Restructuring Service
-- If no date is found, an error is returned and scenario ends.
- LastExtraordinaryInstallmentNumber = Max (Installment Number) + 1 from the Installments having Installment Type = EXTRAORDINARY and Active Flag = 1, or 101 if no such installment is found
	
- {ADD CBL-9759} System calls rule Get Future capitalized installments for restructuring with Contract as parameter and sets the result in FutureCapitalizedInstallments{/ADD}
	
- Get all active Installments which are overdue (i.e. Installment having Due Date < LSR.First Due Date Restructured and Fully Paid Date = NULL and Active Flag = 1) --both type are taken i.e. standard and extraordinary
	
- If an overdue Installment is found, for each Installment (ordered ascended) perform:
- If the Installment is partially paid (exist Installment having sum(Installment Part.Amount Paid) > 0 for active Installment)
-- create new Installment and Installment Parts into SOI with Installment Part amounts equal to paid amount, i.e.
---- Installment Version = MaxInstallmentVersion
---- Recalculation Reason = LR
---- Installment Part.Amount = Installment Part.Paid Amount
---- Installment Part.Fully Paid Date = current date
---- other attribute values of Installment stay the same as originals
-- set UnpaidAmount = UnpaidAmount + (original Installment Part.Amount - SOI.Installment Part.Amount) -- unpaid parts of debt are capitalized
- If the Installment is unpaid, i.e. sum(Installment.Installment Part.Amount Paid) = 0 for active Installments 
--  set UnpaidAmountCapitalized = UnpaidAmountCapitalized + sum(original Installment Part.Amount) -- all debt is capitalized
take next overdue Installment found
	
- If Charged Fee To Request exists, generate restructured Installment with Fee Installment Part for each charged fee into SOI as follow: 
- Due Date = LSR.First Due Date Restructured 
- Customer Due Date = SOI.Due Date – DaysBeforeDueDate (value from Global Parameter)
- Installment Number = LastExtraordinaryInstallmentNumber for the first loan restructuring fee Installment, for each next Installment increase with 1
- Installment Version = MaxInstallmentVersion
- Deactivated In Version = NULL
- Installment Type = EXTRAORDINARY
- Recalculation Reason = LR
- Active Flag = 1
for each Installment create SOI.Installment Part for Part Type = 'F' (Fee)
- Amount = Charged Fee To Request.Amount
- Paid Amount = 0
- Fully Paid Date = NULL
- reference to Tariff Item Type
	
- Update the Financial Parameters (AFP) auxiliary structure with new values (not in database!):
- AFP.Provided Credit Amount = (sum (Installment Part.Amount) from the Installments having Part Type = 'S' and Installment Type = STANDARD and Due Date >= LSR.First Due Date Restructured) + UnpaidAmountCapitalized + {ADD CBL-9759}FutureCapitalizedInstallments{/ADD}
- AFP.Annuity = LSR.Loan Restructuring Offer.Annuity having Is Chosen = 1
- AFP.Term = LSR.Loan Restructuring Offer.Term having Is Chosen = 1
- AFP.Interest Rate = LSR.Loan Restructuring Offer.Interest Rate having Is Chosen = 1
- AFP.First Due Date = LSR.First Due Date Restructured
- AFP.Loan Providing Date = LSR.First Due Date Restructured - 1 month (start of interest period od restructured part of the loan)
	
- Generate standard Installments for restructured remaining principal and capitalized part of overdue debt by Generate installment schedule algorithm with parameters
- the processed Contract
- Financial Parameters (AFP)
- Recalculation reason = 'LR'
- Installment Version = MaxInstallmentVersion
- Installment Number = get (Max(Installment Number) from SOI having Installment Type = STANDARD) + 1
If an error is returned, SOI is set as empty and scenario ends
	
- Returned Installment Schedule data is added into SOI and scenario ends

## 🔗 Connections (6)

- → Dependency: [[{MOD}Determine first due date of restructured installments]]
- → Dependency: [[{MOD}Generate installment schedule algorithm]]
- → Dependency: [[{MOD}Get Future capitalized installments for restructuring]]
- ← Dependency: [[{MOD}08.406 Process request for loan restructuring]]
- ← Dependency: [[08.404 Confirm offer for loan restructuring (UseCase 1862186)]]
- ← Dependency: [[{MOD}08.405 Confirm offer for loan restructuring common]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-11449 (CSI-314) Loan restructuring printout
- Custom: CBL-9759 (CLM-3088) Loan restructuring offer calculation update
- Use Case: Loan restructuring processing
- Use Case: Loan restructuring request creation - externally
- Use Case: Loan restructuring request creation - via GUI
