---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model"
domain: "Analysis Model"
element_id: 1852418
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate CEL reward amount

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model

## 📝 Notes

This rule describes how to calculate reward amount for CEL Reward service. Only one Tariff Item for reward under Tariff Item Type can be defined otherwise no reward is calculated.

Input:

	
- ContractService - processed CEL Reward Service
	
- RewardBaseAmount - amount of the base for reward per period calculation


Output:

	
- Reward.TariffItemId


	
- Reward.Amount


Steps:
System finds Tariff Item definition for Reward by the Algorithm: Find tariff items by usage with parameters Contract, ContractService, usage_type = 'REW' (CEL Reward)
- if more than one item exists in the TariffItem list, system logs an exception MSG_IncorrectTariffItemForRewardDefinition (e.g. Incorrect definition of Tariff Item for reward.) and returns empty Reward. Steps ends.
- sets Reward.TariffItemId = returned TariffItem

	
- System calculates Reward amount by Algorithm: Calculate tariff item amount with parameters: Contract, Tariff Items found in previous step, PercentageBase = RewardBaseAmount
- sets Reward.Amount = returned TariffItemAmount
	
- Return Reward.

## 🔗 Connections (5)

- ← Dependency: [[08.603 Update CEL reward evaluated period]]
- ← Dependency: [[{MOD}08.601 Process CEL Reward]]
- → Dependency: [[Calculate Reward base amount]]
- ← Dependency: [[Calculate all CELREW periods for contract]]
- ← Dependency: [[Process upcoming CEL reward evaluated period]]

## 📊 Appears In (1 diagrams)

- Use Case: CEL Rewards 
