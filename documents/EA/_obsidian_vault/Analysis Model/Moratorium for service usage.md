---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository"
domain: "Analysis Model"
element_id: 1825234
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Moratorium for service usage

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository

## 📝 Notes

Check if moratorium for service usage passed over. Setting the parameter to 0 does not make sense and the check is skipped.
Code: MORATORIUM_FOR_SERVICE_USAGE

Input parameters:

	
- ContractCode
	
- ServiceID


	
- Moratorium : integer (user defined value)


Output:

	
- ValidationMessage
	
- CanBeOverruled = TRUE


If Moratorium = 0, ValidationMessage = OK and the check ends.
Check definition (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes):

	
- Installment.Due Date (of the standard active Installment having Installment Number = Moratorium and Contract = ContractCode) <= current date (e.g. Setting the parameter on 5 means, that after 5 standard installment passed the client can be eligible for this evaluation); Validation Message = MSG_MinTermPassedNotMatch (e.g. Minimal number of installments to be passed is ${Moratorium}.); OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (1 diagrams)

- Custom: Eligibility Criteria Repository
