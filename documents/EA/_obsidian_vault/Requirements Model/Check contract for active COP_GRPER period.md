---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20860 (CSI-2911) New rules for service Termination and Cancelation"
domain: "Requirements Model"
element_id: 1833579
diagrams: 6
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 Check contract for active COP/GRPER period

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20860 (CSI-2911) New rules for service Termination and Cancelation

## 📝 Notes

Input:

	
- Contract


Output:

	
- Active_COP/GRPER_period (boolean)



	
- System gets all active contract services for the contract.
	
- If there is a ContractService where serviceType = COP 
- if ContractServiceParam[type=COP_DUE_DATE_MAX].dateValue >= current date then system returns TRUE, else returns FALSE
else it is continued with next step --- if no COP service exists,  no limitation is applied, but check GRPER
	
- If there is a ContractService where serviceType = GRPER 
- If ContractServiceParam[type=END_OF_GRACE_PERIOD].dateValue >= current date then system returns TRUE, else returns FALSE
else system returns FALSE --- if no GRPER service exists,  no limitation is applied

## 🔗 Connections (5)

- ← Dependency: [[Check conditions to contract service cancellation]]
- ← Dependency: [[{MOD}Check conditions to contract service termination]]
- ← Dependency: [[{MOD}Check conditions to insurance cancellation]]
- ← Dependency: [[{MOD}Check conditions to insurance termination]]
- ← Dependency: [[{MOD}11.111 Cancel insurance contract manually]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-20860 (CSI-2911) New rules for service Termination and Cancelation
- Custom: CBL-8047 (CLM-2590) Disable CANCEL button post free lookup period for EW product
- Custom: Service cancellation
- Use Case: Cancellation of Insurance contract options
- Use Case: Contract insurance cancellation
- Use Case: Contract insurance termination
