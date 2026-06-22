---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights"
domain: "Modules"
element_id: 1801846
diagrams: 2
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {ADD}15.101 Revert Canceled contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights

## 📝 Notes

{ADD CLM-3536 /}
This UC describes common functionality to revert contract from Canceled to previous status.
Works for CEL (In future should work also for REL, SAI, maybe for Consolidating contracts).


Overview of steps:

	
- System performs checks.
	
- Set contract status and contract status transition to previous status (only for Signed, Active, Paid-off).
	
- Reactivate insurances (contract service, insurance contract, insurance contact history, insurance period) canceled with based contract.
	
- If canceled Outgoing Payment exists for the contract, create the new one by copy original canceled payments.
	
- Reactivate last version of Installment Schedule.
	
- Reactivate debt catalogue for the contract.
	
- System creates business event.
	
- System sends message about revert.

## 🔗 Connections (5)

- → Realisation: [[{ADD}15.101 Revert Canceled contract]]
- ← UseCase «include»: [[{ADD}15.104 Revert Canceled contract to Paid-off (UseCase 1801847)]]
- ← UseCase «include»: [[{ADD}15.102 Revert Canceled contract to Signed (UseCase 1801854)]]
- ← UseCase «include»: [[{ADD}15.103 Revert Canceled contract to Active (UseCase 1801848)]]
- → UseCase «include»: [[{ADD}15.100 Change contract status (UseCase 1801850)]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Contract Status Revert
