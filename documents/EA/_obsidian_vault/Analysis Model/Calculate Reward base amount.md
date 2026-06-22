---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model"
domain: "Analysis Model"
element_id: 1852419
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate Reward base amount

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model

## 📝 Notes

{ADD IS-2271} 

	
- System gets tariff item settings for CELREW type  via calling REST API openapi/v1/tariffs/{codeversion}/items
	
- If Percentage based on = EDB (Explicity defined base), system calculate RewardBaseAmount = SUM(installment[Installment Type = STANDARD] from interval (InstallmentNumberStart, InstallmentNumberEnd) -> Installment Part[Part Type = S or I].Amount
	
- Else if Percentage based on = FINS (First installment), {ADD IS-2368 PH only} system checks existence of installment schedule:
- if installment schedule does not exist, system calculate RewardBaseAmount = sum of all offer installment parts of the first active standard offer installment
- else if installment schedule exists,{/ADD} system calculate RewardBaseAmount = sum of all installment parts of the first active standard installment.
	
- {ADD IS-2432 PH only} Else if Percentage based on = IPINS (Interest of Previous Installment) system checks existence of installment schedule:
- if installment schedule does not exist, use case ends
- else if installment schedule exists, system finds all standard active installments from interval [start installment number, end installment number] and calculate RewardInterest for each installment:
  -- for installment which is NOT penultimate or last installment, RewardInterest = interest amount of the installment (installment -> installmentPart where installmentPart = 'I')
  -- for penultimate installment RewardInterest = interest amount of the installment + interest amount of the last installment (installment -> installmentPart where installmentPart = 'I')
  -- for last installment RewardInterest = 0
 System calculate RewardBaseAmount = sum of all RewardInterest for installments from reward period.
{/ADD}
	
- Else return null.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}08.601 Process CEL Reward]]
- ← Dependency: [[Calculate CEL reward amount]]

## 📊 Appears In (1 diagrams)

- Use Case: CEL Rewards 
