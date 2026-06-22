---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository"
domain: "Analysis Model"
element_id: 1825237
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Grace period assigned

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository

## 📝 Notes

Check if a service of type GRPER (Grace period) assigned to the contract has end of grace period less than current date.

Code: GRACE_PERIOD_ASSIGNED

Input parameters:

	
- ContractCode


Output:

	
- ValidationMessage
	
- CanBeOverruled = FALSE


Check definition (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)

	
- Value of Contract -> ContractService where Service.Type = GRPER -> ContractServiceParameter where Type = END_OF_GRACE_PERIOD < current date ; Validation Message = MSG_CHDD_ContractUnderGracePeriod ; OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (1 diagrams)

- Custom: Eligibility Criteria Repository
