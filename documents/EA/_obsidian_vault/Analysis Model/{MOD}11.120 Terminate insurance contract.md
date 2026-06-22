---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Insurance finishing/Access Rights"
domain: "Analysis Model"
element_id: 1878986
diagrams: 15
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}11.120 Terminate insurance contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Insurance finishing/Access Rights

## 📝 Notes

This technical use case terminates insurance contract as such.

Following processing takes place:

	
- {ADD CSI-3253}System sets NewStatus = T (TERMINATED).
If feature flag useFDInsuranceStatus = 1 then
  - if status reason = TIE (Terminated on insurance end) then system sets NewStatus = F (FINISHED)
  - if status reason = TPO (Terminated on pay-off) then system sets NewStatus = D (DEFAULT)
{/ADD}
	
- Insurance contract status is set to {ADD CSI-3253}NewStatus{/ADD} {DEL CSI-3253}TERMINATED{/DEL}, status reason - both enumerated and free text - is set.
	
- End Date is set to given date of termination
	
- Insurance periods starting after the termination date are canceled


	
- Insurance period starting before termination date and ends after the termination is truncated
	
- Insurance periods which end before or exactly at the termination date remain unchanged.
	
- Contract Insurance Service status is set to TERMINATED

## 🔗 Connections (5)

- ← UseCase «include»: [[11.782 Process Insurance activation event]]
- ← UseCase «include»: [[11.130 Terminate finished insurance contracts (UseCase 1878975)]]
- ← UseCase «include»: [[{MOD}08.121 Terminate contract insurance common]]
- → Realisation: [[11.120 Terminate insurance contract (Requirement 1795666)]]
- ← UseCase «include»: [[11.020 Add insurance period (UseCase 1879775)]]

## 📊 Appears In (15 diagrams)

- Custom: Access Rights
- Custom: Access Rights
- Custom: CBL-23482 (CSI-3253) Insurance status update for PH
- Use Case: Contract finishing automatically
- Use Case: Contract finishing manually
- Use Case: Contract insurance termination
- Use Case: CSI-2974 Terminate Service on Contract
- Use Case: CSI-2974 Terminate Service on Contract
- Use Case: Deactivation of mandatory insurance upon standard insurance adding
- Use Case: Insurance Contract Management
- Use Case: Insurance prolongation
- Use Case: Pay-off CEL contract
- Use Case: Pay-off contracts from external system
- Use Case: REL contract termination request
- Use Case: Termination of Insurance contract options
