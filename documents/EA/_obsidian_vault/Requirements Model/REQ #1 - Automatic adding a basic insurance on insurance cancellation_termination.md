---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3735 (CLM-1581) Mandatory Life Insurance support"
domain: "Requirements Model"
element_id: 1337061
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Automatic adding a basic insurance on insurance cancellation/termination

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3735 (CLM-1581) Mandatory Life Insurance support

## 📝 Notes

Goal of this task is replace a standard insurance by a basic insurance in case the standard insurance is canceled or terminated.
Replacing an insurance is run by system event InsuranceContractTerminationSE or InsuranceContractCancelationSE
System performs check of conditions for the insurance replacement:

	
- Replacement of insurance is allowed on the country (a system property)


	
- Canceled/terminated Insurance Contract is defined by Insurance type (i.e. Service Type) of the same type as Insurance intended for replacement (i.e. Insurance has Service.Mandatory on Contract attribute set and Version Status = ACTIVE) 
	
- Related CEL contract in status (N, A)
	
- Remaining Insurance Period of Canceled/terminated Insurance Contract is longer than 1 day. Remaining length of insurance period is determined as date if insurance cancellation/termination plus one day minus the last installment due date.


After the checks pass successfully, system creates Insurance Contract, adds Insurance Service on Contract, signs the Insurance Contract.
Finally, the insurance is activated, i.e. it is calculated sum insured and insurance premium, created insurance period, created outgoing payment and activated insurance contract.
Notice: if an insurance premium is calculated, it is not applied into contract installment schedule!

## 📊 Appears In (1 diagrams)

- Custom: CBL-3735 (CLM-1581) Mandatory Life Insurance support
