---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19122 (CSI-2230) Add new service eligibility criteria to check the historical DPD"
domain: "Requirements Model"
element_id: 1825241
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Maximal historical DPD on contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19122 (CSI-2230) Add new service eligibility criteria to check the historical DPD

## 📝 Notes

Check if the historical and the current DPD on contract is not over limit
Code: CONTRACT_MAXIMAL_HISTORICAL_DPD


Input parameters:

	
- ContractCode
	
- ServiceId


	
- DpdMaxLimit : integer (user defined value)


Output:

	
- ValidationMessage
	
- CanBeOverruled = TRUE


Check definition (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)

	
- System calls ...debt-catalogue/getMaxDPD/<ContractCode> to get MaximalHistoricalDPD
	
- MaximalHistoricalDPD on the contract <= DpdMaxLimit;  Validation Message = MSG_ContractMaximalHistoricalDpd (e.g. Contract ${ContractCode} has some installment with DPD above limit); OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-19122 (CSI-2230) Add new service eligibility criteria to check the historical DPD
- Custom: Eligibility Criteria Repository
