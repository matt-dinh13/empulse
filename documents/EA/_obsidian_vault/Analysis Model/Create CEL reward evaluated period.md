---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model"
domain: "Analysis Model"
element_id: 1852420
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Create CEL reward evaluated period

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model

## 📝 Notes

Input:

	
- PeriodStartDate - start of CEL Reward Evaluated Period
	
- PeriodEndDate - end of CEL Reward Evaluated Period
	
- EstimatedReward - reward calculated at the beginning of estimated period
	
- DPDDelayTolerance - DPD delay tolerance defined on CEL Rewards service


Output:

	
- Result (boolean)


Steps:

	
- Set CEL Reward Evaluated Period:
   - Evaluated Period Start = PeriodStartDate      
   - Evaluated Period End = PeriodEndDate
   - Estimated Reward = EstimatedReward
   - Evaluation Date Planned = PeriodEndDate +  DPDDelayTolerance (in days) + 1
   - ActiveYN = 1
	
- Generate system event LoanServiceRequestCreatedSE with Loan Service Request as a parameter.
	
- Return Result = true.

## 🔗 Connections (4)

- ← Dependency: [[08.603 Update CEL reward evaluated period]]
- ← Dependency: [[{MOD}08.601 Process CEL Reward]]
- ← Dependency: [[Calculate all CELREW periods for contract]]
- ← Dependency: [[Process upcoming CEL reward evaluated period]]

## 📊 Appears In (1 diagrams)

- Use Case: CEL Rewards 
