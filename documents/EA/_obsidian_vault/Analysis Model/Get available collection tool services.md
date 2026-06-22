---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tools requests/Use case model"
domain: "Analysis Model"
element_id: 1740247
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Get available collection tool services

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tools requests/Use case model

## 📝 Notes

This rule describes getting available collection tool services for contract as well as checking whether a new loan service is available on product of contract which can be used as collection tool. If so, it adds the found services to the services currently associated to contract in moment of the contract origination.

Input parameter:

	
- Contract


Output:

	
- Available Collection Tool Service auxiliary structure


Steps:

	
- System gets all the current active Contract Services marked as "Collection tool" for the provided Contract and adds them into Available Collection Tool Service (i.e. Contract Service having Status in (Active, New) and Service Type.Service Type Flag = COLLECTION_TOOL_SERVICE and Contract = Contract)
	
- System tries to obtain all mandatory Services  marked as "Collection tool service" associated with Contract's Product active version which still are not used for the Contract. (i.e. Service having Version Status = Active and Service Type.Service Type Flag = COLLECTION_TOOL_SERVICE and Service.Code exists in (Product To Service.Service Code of Product with Version Status = Active having relation to Contract))
	
- {ADD INCPH-7889}If feature flag CollToolSkipSameServiceType = TRUE then system skip service if another service with the same service type is already assigned on Conract (it means another service of the same type is not added to contract even it is defined on product).{/ADD}
	
- For each found Service, it is done 
- associate to the active Contract and marked as newly added (i.e. create record for Contract Service for found Service and set Status = Active, When Created = CTSE, Start Date = current date and time, Contract = reference to Contract and Contract Status in (Signed, Active, Paid-off))
- add into Available Collection Tool Service to the Contract
	
- List of available collection tool services for contract is returned in Available Collection Tool Service

## 🔗 Connections (1)

- ← Dependency: [[08.900 Show available collection tools for client's contracts]]

## 📊 Appears In (1 diagrams)

- Use Case: Collection tools request
