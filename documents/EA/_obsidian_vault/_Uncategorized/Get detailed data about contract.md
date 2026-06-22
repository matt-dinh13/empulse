---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1878436
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 Get detailed data about contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This object describes the steps, how system gets the detailed data about the particular contract(s).

Input:
- ContractNumber [1..n] = code of a contract

Output:
- ContractDetail [0..n] = object(s) containing a detailed data about the respective contract


Steps:

	
- System takes each ContractNumber from the input and gets the data about the corresponding contract(s) by calling the ContractWS.GetContractDetailRequest with following parameters on the input:
- contractCode = ContractNumber 

If calling the service fails due to any reason or no contract data are returned in the response, algorithm ends with no ContractDetail returned on the output.
	
- System takes each received ContractDetail from the response and returns it to the calling object. Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[Find internal refinanced contracts and get their consolidation amounts]]
