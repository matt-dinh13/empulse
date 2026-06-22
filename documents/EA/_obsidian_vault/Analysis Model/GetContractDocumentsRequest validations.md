---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Use Case Model"
domain: "Analysis Model"
element_id: 1868144
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 GetContractDocumentsRequest validations

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Use Case Model

## 📝 Notes

{ADD CLM-1727 /}
There is described set of validations for GetContractDocumentsRequest data in this rule.

Format of validation: Rule definition; returned error code if validation fails

	
- At least customerId has to be provided; CLIENT_NOT_PROVIDED


	
- Client with customerId has to exists in the Client entity; CLIENT_NOT_FOUND


	
- If contractCode is provided, it has to exists in the Contract entity in statuses defined by Supported contract statuses for self-care and K (Finished); CONTRACT_NOT_FOUND
	
- If contractCode are provided, it has to exist relation between them (i.e. Contract - > Deal -> Client Snapshot -> Client); INVALID_DATA

## 🔗 Connections (1)

- ← Dependency: [[01.790 Get Contract Documents detail service (UseCase 1869820)]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract document services
