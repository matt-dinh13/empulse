---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules"
domain: "Analysis Model"
element_id: 1869772
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Finalize paid part of installment schedule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules

## 📝 Notes

Function describes steps for finalization the first  (repaid) part of an installment schedule when the partial early repayment is applied on the contract.
 

	
- System sets all following standard installments (Installments where I.Installment Type = 'STANDARD' and Installment.Active = TRUE) after given due date (INSTALLMENT.DUE_DATE > ERR.ER Due Date) date as inactive:
- I.Active = 'FALSE'
- I. Deactivated In Version = MV incremented by 1
	
- System creates an extraordinary Installment (I) with Installment Part (IP) for prepaid principal as:
- I.Contract = reference to Contract from input
- I.Type = 'EXTRAORDINARY'
- I.Due Date = ERR.ER Due Date
- I.Customer Due Date = I.Due Date – [DaysBeforeDueDate] system parameter
- I.Installment Number = I.Installment Number of the last extraordinary Installment ( i.e. MAX (I.Installment Number) having Installment Number > 100) + 1. If no such installment exists, it is set to 101
- I.Version = MV + 1
- I.Active = 'TRUE'
- I.Recalculation Reason = 'GN'
- IP.Part Type = 'S'
- IP.Amount = Paid Amount
- IP.Amount Paid = 0
	
- System finds all tariff items to be charged at the moment of partial early repayment by calling of Algorithm_Find tariff items by usage with parameters:
- usage = 'PR'
- contract = Contract.ID
- contract service = Contract.ContractService where Contract.ContractService.ServiceType = 'PER'
	
- System calls for each tariff item from previous step Algorithm: Calculate tariff item amount algorithm with tariff item and ERR.ER Due Date as parameter and calculates tariff items amount and return them as a collection of PER fees (Charged Fee).
	
- If Charged Fee.Amount > 0 then system creates an extraordinary Installment (I) with Installment Part (IP) for PER fee as:
- I.Contract = reference to Contract from input
- I.Type = 'EXTRAORDINARY'
- I.Due Date = ERR.ER Due Date
- I.Customer Due Date = I.Due Date – [DaysBeforeDueDate] system parameter
- I.Installment Number = I.Installment Number of the last active extraordinary Installment ( i.e. MAX (I.Installment Number) having Installment Number > 100 and I.Active = TRUE) + 1
- I.Version = MV + 1
- I.Active = 'TRUE'
- I.Recalculation Reason = 'GN'
- IP.Part Type = 'F'
- IP.Amount = Charged Fee.Amount
- IP.Amount Paid = 0
- reference to the original Tariff Item type from Charged Fee.Tariff Item ID
	
- {ADD IS-2003} System finds and calculates all PER Fee Included in Operation by calling of Calculate fee included in operation for PER 
	
- If PER Fee Included in Operation.Amount > 0 then system creates an extraordinary Installment (I) with Installment Part (IP) for fee as:
- I.Contract = reference to Contract from input
- I.Type = 'EXTRAORDINARY'
- I.Due Date = ERR.ER Due Date
- I.Customer Due Date = I.Due Date – [DaysBeforeDueDate] system parameter
- I.Installment Number = I.Installment Number of the last active extraordinary Installment ( i.e. MAX (I.Installment Number) having Installment Number > 100 and I.Active = TRUE) + 1
- I.Version = MV + 1
- I.Active = 'TRUE'
- I.Recalculation Reason = 'GN'
- IP.Part Type = 'F'
- IP.Amount = PER Fee Included in Operation.Amount
- IP.Amount Paid = 0
- reference to the original Tariff Item type from PER Fee Included in Operation.Tariff Item ID{/ADD}

## 🔗 Connections (3)

- ← Dependency: [[08.057 Perform Partial early repayment (UseCase 1868459)]]
- → Dependency: [[{MOD}Algorithm_ Calculate tariff item amount]]
- → Dependency: [[Algorithm_ Find tariff items by usage]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: PER request processing
