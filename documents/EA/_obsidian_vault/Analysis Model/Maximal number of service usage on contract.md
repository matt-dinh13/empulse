---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository"
domain: "Analysis Model"
element_id: 1825228
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Maximal number of service usage on contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository

## 📝 Notes

Check if maximal number of service usage for a client's contract is lower than defined value in MaxNumberOfServiceUsage. Only successfully executed services on contract are counted.

Code: MAX_NUMBER_OF_SERVICE_USAGE_ON_CONTRACT

Input parameters:

	
- ContractCode


	
- ServiceId
	
- MaxNumberOfServiceUsageContract : integer (user defined value)


Output:

	
- ValidationMessage
	
- CanBeOverruled = TRUE


If MaxNumberOfServiceUsage = 0, ValidationMessage = OK and the check ends
Get ServiceRequestType = Service ->Service Type.Code and ServiceName = Service.Name from Service by ServiceId
Check definition (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)

	
- Count of (Loan Service Request having Request Type = ServiceRequestType and Current Status = EXECUTED for the Contract with ContractCode) < MaxNumberOfServiceUsage ; ValidationMessage = MSG_MaxNumberServiceUsageExceeded (e.g. Maximal number of ${ServiceName} usage on the contract is ${MaxNumberOfServiceUsage}); OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (1 diagrams)

- Custom: Eligibility Criteria Repository
