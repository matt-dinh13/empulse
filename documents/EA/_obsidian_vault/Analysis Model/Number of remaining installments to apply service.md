---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository"
domain: "Analysis Model"
element_id: 1825242
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Number of remaining installments to apply service

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository

## 📝 Notes

Check minimal number of remaining installment on contract
Code: MINIMAL_NUMBER_OF_INSTALLMENTS

Input parameters:

	
- ContractCode
	
- ServiceId


	
- MinimalTermFuture : integer (user defined value)


	
- MinDaysBeforeInstallment :  integer (user defined value)


Output:

	
- ValidationMessage
	
- CanBeOverruled = TRUE


Check definition (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)

	
- Count of (active standard Installments having Due Date > current date + MinDaysBeforeInstallment for Contract with ContractCode) >= MinimalTermFuture (e.g. Settings "2" means there has to be at least 2 installments to be service eligible); Validation Message = MSG_MinTermRemainNotMatch (e.g. Minimal number of remaining installments to apply service is ${MinimalTermFuture}.); OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (1 diagrams)

- Custom: Eligibility Criteria Repository
