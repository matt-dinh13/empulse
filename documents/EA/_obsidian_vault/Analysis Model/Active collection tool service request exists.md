---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository"
domain: "Analysis Model"
element_id: 1825229
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Active collection tool service request exists

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository

## 📝 Notes

Check if an active request of a loan service marked as "Collection tool service" exists
Code: ACTIVE_COLL_TOOL_REQUEST_EXISTS

Input parameters:

	
- ContractCode


Output:

	
- ValidationMessage
	
- CanBeOverruled = FALSE


Get LoanServiceRequest, ServiceName = Loan Service Request -> Service ->Service Type -> Service Type Flag having Service Type Flag.Type = COLLECTION_TOOL_SERVICE and  Contract.Code = ContractCode and Loan Service Request.Current Status = CREATED
Check definition (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)

	
- Count of (LoanServiceRequest) = 0 ; ValidationMessage = MSG_ActiveCollToolServiceRequestExists (e.g. Active request for other collection tool service already exists on the contract.); OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (1 diagrams)

- Custom: Eligibility Criteria Repository
