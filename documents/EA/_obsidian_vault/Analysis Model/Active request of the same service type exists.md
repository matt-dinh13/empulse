---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository"
domain: "Analysis Model"
element_id: 1825230
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Active request of the same service type exists

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository

## 📝 Notes

Check if active request of the same service type exists
Code: ACTIVE_SERVICE_REQUEST_EXISTS

Input parameters:

	
- ContractCode


	
- ServiceId


Output:

	
- ValidationMessage
	
- CanBeOverruled = FALSE


Get ServiceRequestType = Service ->Service Type.Code and ServiceName = Service.Name from Service by ServiceId
Check definition (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)

	
- Count of (Loan Service Request having Request Type = ServiceRequestType and Current Status = CREATED for the Contract with ContractCode) = 0 ; ValidationMessage = MSG_ActiveServiceRequestExists (e.g. Active request for ${ServiceName} already exists on the contract.); OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (1 diagrams)

- Custom: Eligibility Criteria Repository
