---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10733 (CSI-171) Insurance cancellation and termination - check existing Payhol requests"
domain: "Requirements Model"
element_id: 1833571
diagrams: 4
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Check existence of Payhol request for contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10733 (CSI-171) Insurance cancellation and termination - check existing Payhol requests

## 📝 Notes

Input:

	
- Contract
	
- FromDate (optional)


Output:

	
- Existence of Payhol request for specified period (boolean)



	
- System gets all Loan Service Requests (LSR) for the Contract with RequestType IN (PAYHOL, PER, LRES) and Status<>Cancelled (Created and Executed is used).
	
- If FromDate is specified, then:
- if RequestType = PAYHOL then exclude LSR with First Deferred Due date <= FromDate
- if RequestType = PER then exclude LSR with Repayment date <= FromDate
- if RequestType = LRES then exclude LSR with First Due date Restructured <= FromDate
	
- If any LSR exists then system returns true, ale returns false.

## 🔗 Connections (4)

- ← Dependency: [[Check conditions to contract service cancellation]]
- ← Dependency: [[{MOD}Check conditions to insurance cancellation]]
- ← Dependency: [[08.454 Terminate contract insurance service (UseCase 1878981)]]
- ← Dependency: [[11.121 Terminate insurance contract manually (UseCase 1878971)]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-10733 (CSI-171) Insurance cancellation and termination - check existing Payhol requests
- Custom: CBL-20860 (CSI-2911) New rules for service Termination and Cancelation
- Use Case: Contract insurance cancellation
- Use Case: Contract insurance termination
