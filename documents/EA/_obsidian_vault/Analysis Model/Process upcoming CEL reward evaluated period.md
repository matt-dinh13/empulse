---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model"
domain: "Analysis Model"
element_id: 1852414
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Process upcoming CEL reward evaluated period

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model

## 📝 Notes

Input: 

	
- Contract - current contract
	
- StartDate - start of evaluated period


Output: 

	
- Result (boolean)


Steps:

	
- System determines upcoming evaluated period parameters (PeriodEndDate, RewardBaseAmount) using Get CEL reward period for evaluation rule with following parameters:
- PeriodStartDate = StartDate
- Contract = current contract
- if null then return Result = false
	
- System calculates estimated reward (Reward.Amount) using Calculate CEL reward amount rule with following parameters:
- ContractService = Contract -> Contract Service
- RewardBaseAmount = RewardBaseAmount (from Get period for evaluation rule)
	
- System creates CEL Reward Evaluated Period using Create CEL reward evaluated period rule with following parameters:
- InstallmentNumberStart = InstallmentNumberStart
- InstallmentDueDateStart = InstallmentDueDateStart
- InstallmentNumberEnd = InstallmentNumberEnd
- InstallmentDueDateEnd = InstallmentDueDateEnd (from Get period for evaluation rule)
- EstimatedReward = Reward.Amount (from Calculate CEL reward amount rule)
- DPDDelayTolerance = DPD delay tolerance
	
- Return Result = true.

## 🔗 Connections (4)

- ← Dependency: [[{MOD}08.601 Process CEL Reward]]
- → Dependency: [[Get CEL reward period for evaluation]]
- → Dependency: [[Calculate CEL reward amount]]
- → Dependency: [[Create CEL reward evaluated period]]

## 📊 Appears In (1 diagrams)

- Use Case: CEL Rewards 
