---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-9909 (CSI-168) Additional checks in PAYHOL process"
domain: "Requirements Model"
element_id: 1825236
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Maximal number of service usage by number of terms

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-9909 (CSI-168) Additional checks in PAYHOL process

## 📝 Notes

Check if maximal number of service usage for a client's contract is lower than defined value in MaxNumberOfServiceUsageByTerm. Used only for contract with number of terms between MinNumberOfTerms and MaxNumberOfTerms. Only successfully executed services on contract are counted.

Code: MAX_NUMBER_OF_SERVICE_USAGE_BY_TERMS

Input parameters:

	
- ContractCode


	
- ServiceId
	
- MaxNumberOfServiceUsageByTerm : integer (user defined value)


	
- MinNumberOfTerms: integer (user defined value)
	
- MaxNumberOfTerms: integer (user defined value)


Output:

	
- ValidationMessage
	
- CanBeOverruled = TRUE


If  Contract[ContractCode].Number of terms is not between MinNumberOfTerms and MaxNumberOfTerms, ValidationMessage = OK and the check ends.
If MaxNumberOfServiceUsageByTerm = 0, ValidationMessage = OK and the check ends
Get ServiceRequestType = Service ->Service Type.Code and ServiceName = Service.Name from Service by ServiceId
Check definition (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)

	
- Count of (Loan Service Request having Request Type = ServiceRequestType and Current Status = EXECUTED for the Contract with ContractCode) < MaxNumberOfServiceUsageByTerm ; ValidationMessage = MSG_MaxNumberServiceUsageExceeded (e.g. Maximal number of ${ServiceName} usage on the contract is ${MaxNumberOfServiceUsageByTerm}); OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-9909 (CSI-168) Additional checks in PAYHOL process
- Custom: Eligibility Criteria Repository
