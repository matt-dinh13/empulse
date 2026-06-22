---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-452 (CBL-2283) CEL Reward enhancement"
domain: "Requirements Model"
element_id: 1335459
diagrams: 2
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Get template parameters values - CELRewardSuccessSE

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-452 (CBL-2283) CEL Reward enhancement

## 📝 Notes

Description: 
Rule describes how to get value of notification message template parameter.

Input: 
- bodyParameters
- parameter values

Output: 
- messageParameters

Steps: 

	
- For each parameter  in bodyParameters get value and set on messageParameters
- if parameter = "chargedReward" then value = parameter values.chargedReward
{ADD PAYM-563}- if parameter = "rewardAccountNumber" then value = parameter values.rewardAccountNumber{/ADD}
- if error then return null
	
- Return messageParameters

## 🔗 Connections (2)

- → Generalization: [[Get template parameters values]]
- → Association: [[Create and integrate new fillers for CEL rewards in Client Notification functionality]]

## 📊 Appears In (2 diagrams)

- Custom: IS-452 (CBL-2283) CEL Reward enhancement
- Use Case: SMS notification
