---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository"
domain: "Analysis Model"
element_id: 1825227
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Maximal current DPD on contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository

## 📝 Notes

Check if the current DPD on contract is not over limit
Code: CONTRACT_MAXIMAL_CURRENT_DPD


Input parameters:

	
- ContractCode
	
- ServiceId


	
- DpdMaxLimit : integer (user defined value)


Output:

	
- ValidationMessage
	
- CanBeOverruled = TRUE


Check definition (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)

	
- {ADD CSI-689}System calls ...debt-catalogue/getDebtCatalogue/<ContractCode>{/ADD} {DEL CSI-689}
	
- Maximal current DPD on the contract (get as current date minus returned firstOverdueInstallmentDueDate) <= DpdMaxLimit;  Validation Message = MSG_SER_0001 (e.g. Contract ${ContractCode} has overdue installment with DPD above limit); OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (1 diagrams)

- Custom: Eligibility Criteria Repository
