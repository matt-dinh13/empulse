---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract cancellation/Business rules"
domain: "Analysis Model"
element_id: 1835780
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get contracts by application creation channels

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract cancellation/Business rules

## 📝 Notes

This object describes an algorithm, how system gets the contracts created via particular application creation channel.

Input:
- applicationCreationChannel = definition of the creation channel to be used for searching the contracts

Output:
- contracts = list of contracts created via corresponding application creation channel

Algorithm:

	
- System takes the applicationCreationChannel from the input and finds the contracts created via corresponding channel as follows:
- For 'EXTERNAL' channel, system gets contracts created externally (i.e. Contract.Created_Externally = TRUE).
- For 'NONEXTERNAL' channel, system gets contracts not created externally (i.e. Contract.Created_Externally = FALSE).
- For 'REMOTE' channel, system gets contracts created remotely (i.e. Contract.Created_Remotely = TRUE).
- For 'NONREMOTE' channel, system gets contracts not created remotely (i.e. Contract.Created_Remotely = FALSE).
	
- System returns the respective contracts and algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[01.670 Cancel contract automatically (UseCase 1850513)]]

## 📊 Appears In (2 diagrams)

- Custom: Common for contract cancellation
- Use Case: Cancel contract automatically
