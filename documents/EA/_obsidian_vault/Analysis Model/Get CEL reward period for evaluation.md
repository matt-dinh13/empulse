---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model"
domain: "Analysis Model"
element_id: 1852421
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Get CEL reward period for evaluation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model

## 📝 Notes

Input:

	
- PeriodStartDate - date from evaluated period should start
	
- Contract - current contract


Output:

	
- InstallmentNumberStart - first installment number in evaluated period
	
- InstallmentDueDateStart - first installment due date in evaluated period
	
- InstallmentNumberEnd - last installment number in evaluated period
	
- InstallmentDueDateEnd - last installment due date in evaluated period
	
- RewardBaseAmount - amount of the base for reward per period calculation


Steps:

	
- Get all Installments on Contract where Contract -> Installment[Installment Type = STANDARD, Active = true] -> Installment Part[Part Type = S].Amount + Installment -> Installment Part[Part Type = I].Amount) > 0
If no installment with amount greater than zero is found then return null
	
- Determine first installment (the closest installment to PeriodStartDate) = MIN(Installments.Installment[Installment Type = STANDARD, Active = true].Due Date - PeriodStartDate (where Due Date >= PeriodStartDate)))
If no Installment.Due Date >= current date then return null
	
- Set InstallmentDueDateStart = first installment.Due Date and InstallmentNumberStart = first installment.Installment Number
	
- Get PeriodTerms = Contract -> Contract Service -> Service [Type = CELREW].Length of Evaluation Period
	
- Determine last installment = first installment.Installment Number + (PeriodTerms - 1) from Installments
- if last installment.Installment Number > MAX(Contract -> Installment.Installment Number) then return null
	
- Set InstallmentNumberEnd = last installment.Installment Number and InstallmentDueDateEnd = last installment.Due Date
	
- {DEL IS-2271} System calculate RewardBaseAmount = SUM(installment[Installment Type = STANDARD] from interval (InstallmentNumberStart, InstallmentNumberEnd) -> Installment Part[Part Type = S or I].Amount {/DEL}
{ADD  IS-2271} System calculate RewardBaseAmount by rule Calculate Reward base amount. {/ADD}

## 🔗 Connections (4)

- ← Dependency: [[08.603 Update CEL reward evaluated period]]
- ← Dependency: [[{MOD}08.601 Process CEL Reward]]
- ← Dependency: [[Calculate all CELREW periods for contract]]
- ← Dependency: [[Process upcoming CEL reward evaluated period]]

## 📊 Appears In (1 diagrams)

- Use Case: CEL Rewards 
