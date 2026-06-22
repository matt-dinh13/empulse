---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5208 (CLM-3081) Cash by Code"
domain: "Requirements Model"
element_id: 1688675
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ - Cash by Code: CLM changes

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5208 (CLM-3081) Cash by Code

## 📝 Notes

Due to change of client's cash disbursement via a partner bank (PBA channel), following changes in the CLM are expected:

	
- update of the ContractFullInfo message - extension with disbursement channel (needed confirmation from KZ)
	
- update of the GetContractForDisbursement method (ContractWS) - adding salesroom code of the salesroom where contract sign was made
	
- add payment Waiting status into UC 01.771 Get contracts for disbursement service

## 🔗 Connections (2)

- ← Generalization: [[REQ #1 - Update of the ContractFullInfo message]]
- ← Generalization: [[REQ #2 - Update Get contracts for disbursement service]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-5208 (CLM-3081) Cash by Code
