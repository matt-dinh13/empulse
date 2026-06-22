---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights"
domain: "Modules"
element_id: 1801851
diagrams: 2
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 {ADD}15.105 Revert Paid-off contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights

## 📝 Notes

{ADD CLM-3535 /}
This UC describes common functionality to revert contract from Paid-off to previous status.
Works for CEL (In future should work also for REL and SAI).

Overview of steps:

	
- System performs checks.
	
- Set contract status and contract status transition to previous status (only for Signed, Active).
	
- Create new contract accrued incomes (archive old).
	
- Return Installment Schedule to version before Pay off.
	
- System creates business event.
	
- System sends message about revert.

## 🔗 Connections (4)

- → Realisation: [[{ADD}15.105 Revert Paid-off contract]]
- ← UseCase «include»: [[{ADD}15.107 Revert Paid-off contract to Active (UseCase 1801853)]]
- ← UseCase «include»: [[{ADD}15.106 Revert Paid-off contract to Signed (UseCase 1801852)]]
- → UseCase «include»: [[{ADD}15.100 Change contract status (UseCase 1801850)]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Contract Status Revert
