---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights"
domain: "Modules"
element_id: 1799775
diagrams: 3
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Contracts revert Written-off contract to Paid-off

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights

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

- ← UseCase «include»: [[{ADD}15.110 Process Contract Status Revert on external request (UseCase 1801849)]]
- → Realisation: [[{ADD}Contracts revert Written-off contract to Paid-off]]
- → UseCase «include»: [[{ADD}15.100 Change contract status (UseCase 1801850)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: CBL-20217 (CLM-5646) Vanilla Kafka decommissioning - COMA consumer removing
- Use Case: Contract Status Revert
