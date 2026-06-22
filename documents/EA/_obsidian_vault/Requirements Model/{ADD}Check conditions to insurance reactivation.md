---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-17686 (CSI-2071) Add feature for re-activation of insurance contract"
domain: "Requirements Model"
element_id: 1833572
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Check conditions to insurance reactivation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-17686 (CSI-2071) Add feature for re-activation of insurance contract

## 📝 Notes

{ADD CSI-2071 /}
This rule contains set of conditions for the contract insurance reactivation enabling.
 

	
- ContractService.Status = CANCELLED or TERMINATED
	
- Insurance Contracts Statuse = C (cancelled) or T (terminated)
	
- Contract.Contract Type = CEL
	
- Contract.Status = SIGNED or ACTIVE or PAID_OFF

## 🔗 Connections (1)

- ← Dependency: [[08.455 Reactivate contract insurance service (UseCase 1878990)]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-17686 (CSI-2071) Add feature for re-activation of insurance contract
- Use Case: Contract insurance reactivation
