---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26066 (CSI-3652) Add Insurances and Services to Existing Contract in POS Loan and Cash Loan"
domain: "Requirements Model"
element_id: 1851675
diagrams: 4
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}CreateContractInsurance validations

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26066 (CSI-3652) Add Insurances and Services to Existing Contract in POS Loan and Cash Loan

## 📝 Notes

There is described set of validations for CreateContractInsurance data in this rule.

Format of validation: Rule definition; returned error code if validation fails

	
- customerId has to be provided and must exist in CIF (checked by calling Customer Data.GetCustomerDataRequest) ; CLIENT_NOT_FOUND
	
- contractCode has to be provided and exists in the Contract entity and Contract is in allowed statuses by Allowed contract statuses for insurance activation; CONTRACT_NOT_FOUND
	
- it must exist relation between Client and Contract based on the provided customerId and contractCode (i.e. Contract - > Deal -> Client Snapshot -> Client); INVALID_DATA
	
- if notice is provided, it has to be printable characters of length of the field 0 up to 255 characters; INVALID_DATA
	
- {ADD CSI-2746}If Contract.Contract Type = 'CEL', check InsuranceOffer data from the input exists; MISSING_INSURANCE_OFFER{/ADD}

## 🔗 Connections (2)

- → Dependency: [[Allowed contract statuses for insurance activation]]
- ← Dependency: [[{MOD}08.347 Add Insurance service on Contract service]]

## 📊 Appears In (4 diagrams)

- Logical: CBL-26066 (CSI-3652) Add Insurances and Services to Existing Contract in POS Loan and Cash Loan
- Use Case: Adding Insurance Service on CEL contract
- Use Case: Adding Insurance Service on REL contract
- Use Case: Adding Insurance Service on REL contract method
