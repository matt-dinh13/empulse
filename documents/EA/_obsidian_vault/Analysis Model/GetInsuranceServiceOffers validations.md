---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Use Case Model"
domain: "Analysis Model"
element_id: 1868139
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 GetInsuranceServiceOffers validations

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Use Case Model

## 📝 Notes

There is described set of validations for GetInsuranceServiceOffers data in this rule.

Format of validation: Rule definition; returned error code if validation fails

	
- At least customerId has to be provided; CLIENT_NOT_PROVIDED
	
- Client with customerId has to exists in the Client entity; CLIENT_NOT_FOUND
	
- If contractCode is provided, it has to exists in the Contract entity and Contract is in allowed statuses by Allowed contract statuses for insurance activation; CONTRACT_NOT_FOUND
	
- If contractCode is provided, it has to exist relation between them (i.e. Contract - > Deal -> Client Snapshot -> Client); INVALID_DATA

## 🔗 Connections (2)

- → Dependency: [[Allowed contract statuses for insurance activation]]
- ← Dependency: [[08.342 Get contract insurance offers service (UseCase 1879829)]]

## 📊 Appears In (1 diagrams)

- Use Case: Insurance Service Offers API - Use Case Model
