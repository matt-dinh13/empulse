---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20860 (CSI-2911) New rules for service Termination and Cancelation"
domain: "Requirements Model"
element_id: 1833411
diagrams: 2
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Validate ContractService cancellation, termination request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20860 (CSI-2911) New rules for service Termination and Cancelation

## 📝 Notes

This rule contains set of conditions used to check the API request values of the contract cancellation/termination.

List of validations in format [validation definition; behaviour (error message returned) if the validation fails]:

	
- serviceId - check if exists ContractService by provided ServiceId (ContractService having External Id = ServiceId and ContractService.Status in (NEW, ACTIVE)); MSG_Contract_Service_Not_Found (e.g. 'Contract Service not found')


	
- reasonCode (if a value is provided) - check if the value exists in Contract Service Status Reason code list; MSG_ReasonCodeUnrecognized (e.g. 'The provided reasonCode value isn't defined.')
	
- check if ContractService hasn't related reference to Contract Insurance Service; MSG_RelatedInsuranceFound (e.g. 'Insurance service cannot be cancelled/terminated')


The ContractService is returned for next usage, else an error message is returned to the Basic Path

## 📊 Appears In (2 diagrams)

- Custom: CBL-20860 (CSI-2911) New rules for service Termination and Cancelation
- Use Case: Service - Contract Service management via API
