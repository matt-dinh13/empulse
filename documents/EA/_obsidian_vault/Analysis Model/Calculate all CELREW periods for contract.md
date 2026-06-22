---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model"
domain: "Analysis Model"
element_id: 1852417
diagrams: 1
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate all CELREW periods for contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model

## 📝 Notes

{ADD IS-2320}
PH only
Input: 

	
- Contract - current contract
	
- StartDate



Steps:

	
- Get all active standard installments on Contract (Contract -> Installment[Installment Type = STANDARD, Active = true] -> Installment Part[Part Type = S].Amount + Installment -> Installment Part[Part Type = I].Amount) > 0)
If no installment with amount greater than zero is found then use case ends.
	
- System determines and creates all available periods for CEL Reward service:


	
- Call rule  Get CEL reward period for evaluation with parameters:
- contract code of current contract
- for first period PeriodStartDate  = StartDate, for other periods PeriodStartDate = previous period InstallmentDueDateEnd + 1month
	
- System calculates estimated reward (Reward.Amount) using Calculate CEL reward amount rule with following parameters:
- ContractService = Contract -> Contract Service
- RewardBaseAmount = RewardBaseAmount (from Get reward period for evaluation rule)
	
- System creates CEL Reward Evaluated Period using Create CEL reward evaluated period rule with following parameters:
- InstallmentNumberStart = InstallmentNumberStart
- InstallmentDueDateStart = InstallmentDueDateStart
- InstallmentNumberEnd = InstallmentNumberEnd
- InstallmentDueDateEnd = InstallmentDueDateEnd (from Get period for evaluation rule)
- EstimatedReward = Reward.Amount (from Calculate CEL reward amount rule)
- DPDDelayTolerance = DPD delay tolerance


3. Use case ends.

## 🔗 Connections (6)

- ← Dependency: [[08.603 Update CEL reward evaluated period]]
- ← Dependency: [[08.604 Set CEL Reward periods for contract]]
- → Dependency: [[Calculate CEL reward amount]]
- → Dependency: [[Create CEL reward evaluated period]]
- → Dependency: [[Get CEL reward period for evaluation]]
- ← Dependency: [[Renew CELREW periods]]

## 📊 Appears In (1 diagrams)

- Use Case: CEL Rewards 
