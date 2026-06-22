---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Insurance finishing/Use case model"
domain: "Analysis Model"
element_id: 1878747
diagrams: 8
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Recalculate Presented Interest rates on financial parameters change

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Insurance finishing/Use case model

## 📝 Notes

This rule describes calculation of Presented Interest Rate (or Rates) according the configuration based on Contract Financial Parameters and Installment Schedule
Input:

	
- Contract.Financial Parameters (FP)
	
- Contract Installment Schedule


Output: 
- set of  PIR values (percentage)

Steps:

	
- Create interface structures Presented IR Parameters (Par) for PIR calculation function and fill the structure as follow:
- Par.ProvidedLoanAmount = FP.Provided Credit Amount
- Par.NominalInterestRate = FP.Interest Rate
- Par.LoanProvidingDate = FP.Loan Providing Date
- Par.Annuity = FP.Annuity
- Par.Term = FP.Terms
	
- Par.Presented IR Fee = data from
- For each found active FP.TariffItem from FP fill in (TariffItemType, ItemAmount)
	
- Par.Presented IR Cash Flow is filled from the Contract Installment (IS) as follows:
For each Installment from IS having Installment Type = STANDARD, create record in Par.Presented IR Cash Flow (PICF) with
- PICF.Number = IS.InstallmentNumber
- PICF.Date = IS.DueDate
- PICF.Amount = - AnnuityAmount where AnnuityAmount = sum of IS.InstallmentPart.Amount where IS.InstallmentPart.Type is in (Principal(S), Interest(I)) 
	
- Calculate and return set of PIRs according to algorithm Calculation of Presented IR Types with parameters:
- Product Type = 'CEL'
- Case = 'STANDARD'
- Presented IR Parameters (Par)
Resulted PIRs are returned in the set of  PIR values.

## 🔗 Connections (4)

- → Dependency: [[Calculation of Presented IR types]]
- ← Dependency: [[{MOD}08.121 Terminate contract insurance common]]
- ← Dependency: [[08.111 Cancel contract insurance common]]
- ← Dependency: [[{MOD}03.037 Deduct interest overcharge while shortening first interest period]]

## 📊 Appears In (8 diagrams)

- Use Case: Cancellation of Insurance contract options
- Use Case: Contract insurance cancellation
- Use Case: Contract insurance termination
- Use Case: Deducting interest overcharge while shortening first interest period
- Use Case: Disbursement confirmations
- Use Case: ISG - Generate installment schedule
- Use Case: OVERVIEW - Installment Schedule
- Use Case: Termination of Insurance contract options
