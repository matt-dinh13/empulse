---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository"
domain: "Analysis Model"
element_id: 1825243
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Contract is in defined status

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository

## 📝 Notes

Check if contract is in defined status
Code: CONTRACT_IN_DEFINED_STATUS

Input parameters:

	
- ContractCode


	
- ServiceId


	
- AllowedContractStatuses : string[] (user defined value)


Output:

	
- ValidationMessage
	
- CanBeOverruled = FALSE


Get ServiceName = Service.Name from Service by ServiceId
Check definition (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)

	
- The Contract is in (AllowedContractStatuses) status; Validation Message = MSG_PHContractNotAllowedStatus (e.g. The contract has incorrect status for ${ServiceName} request.); OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (1 diagrams)

- Custom: Eligibility Criteria Repository
