---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/UseCase Model"
domain: "Analysis Model"
element_id: 1836940
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Get business event by operation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/UseCase Model

## 📝 Notes

{ADD TPH-6642 /} 
Get the salesroom and user of the operation (Business event) that was done on the Contract.

Input:

	
- contract
	
- operation (Business Event Type - one of values (CONTRACT_CREATED, CONTRACT_SIGNED)


Output:

	
- salesroomCode
	
- userId


Steps:

	
- If the operation=CONTRACT_CREATED, get salesroomCode = Business Event.Salesroom, userId = (UserId from User Detail related to Business Event.Created By) from Contract -> Business Event where Business Event.Type="CREATE_CONTRACT"
	
- If the operation=CONTRACT_SIGNED,  get salesroomCode = Business Event.Salesroom, userId = (UserId from User Detail related to Business Event.Created By) from Contract -> Business Event.Salesroom where Business Event.Type="CONTRACT_SIGNED".


If more then one record with defined business event type exists for one contract, the last recorded entry is chosen.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.280 Record document mistake v2]]

## 📊 Appears In (1 diagrams)

- Use Case: Document checking within contract registration
