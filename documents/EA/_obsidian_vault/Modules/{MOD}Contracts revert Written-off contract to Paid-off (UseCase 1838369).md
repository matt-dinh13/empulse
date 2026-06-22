---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights"
domain: "Modules"
element_id: 1838369
diagrams: 2
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Contracts revert Written-off contract to Paid-off

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights

## 📝 Notes

{ADD CLM-3537 /}
This UC describes functionality to revert contract from Written-off to Paid-off status.
Works for all CEL contracts. 

Overview of steps:

	
- System performs checks.
	
- Set contract status and contract status transition to previous status (only for Paid-off).
	
- System creates business event.
	
- System generates message about revert.

## 🔗 Connections (3)

- → Realisation: [[{ADD}Contracts revert Written-off contract to Paid-off (Requirement 1838359)]]
- → UseCase «include»: [[{ADD}15.100 Change contract status (UseCase 1838375)]]
- ← UseCase «include»: [[{ADD}15.110 Process Contract Status Revert on external request (UseCase 1838376)]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Contract Status Revert
