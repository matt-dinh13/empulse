---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8479 (CLM-2730) Add reason to REL termination request"
domain: "Requirements Model"
element_id: 1514763
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Add Reason code and Description for termination request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8479 (CLM-2730) Add reason to REL termination request

## 📝 Notes

VN business needs to store and analyze reasons for REL contract termination.
Therefore reason code + description will be stored in the ContractStatusTermination Request and then to ContractStatusTransition (after termination confirmation).

Tasks:

	
- Extend Create REL contract termination request  screen by Reason and Description edits (reason defined by Contract Status Transitions Reasons )
	
- Modify 01.171 Create REL contract termination request  (store Reason and Notice)
	
- Modify {MOD}01.740 Process notification about credit account closure  (store Reason and Notice from ContractStatusTermination Request to ContractStatusTransition)

## 📊 Appears In (1 diagrams)

- Custom: CBL-8479 (CLM-2730) Add reason to REL termination request
