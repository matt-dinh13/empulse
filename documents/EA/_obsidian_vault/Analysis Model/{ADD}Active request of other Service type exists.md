---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository"
domain: "Analysis Model"
element_id: 1825232
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Active request of other Service type exists

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository

## 📝 Notes

{ADD CSI-2765 /}
This rule describes checking existence of concurrent active loan service request of types FER, PER, COP, CET, PAYHOL, INSLI on the contract at creating a new request for a loan service application

Code: ConcurrentServiceRequestExists

Input:

	
- Contract


Output:

	
- ValidationMessage


	
- CanBeOverruled = TRUE


Steps: (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)

	
- Get all active loan services related to the contract (i.e Contract Service having Contract = Contract and Status in Active, New)
	
- If Contract Service of Type in (FER, PER, COP, CET, PAYHOL, INSLI) is found, check if a request for any service already exists }(i.e. Loan Service Request.ER Request related to Contract and having Current Status = CREATED); MSG_ConcurrentServiceRequestExists (e.g.  Concurrent request(s) of ${first found Service Code} already exist(s); OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (1 diagrams)

- Custom: Eligibility Criteria Repository
