---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights"
domain: "Modules"
element_id: 1801848
diagrams: 2
connections: 2
tags:
  - usecase
  - modules
---

# 🎯 {ADD}15.103 Revert Canceled contract to Active

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights

## 📝 Notes

{ADD CLM-3536 /}
This use case enables to revert Canceled contract to Active. 
Previous status must be Active.
Should replace DTCH change_contract_status_T2A.sql
Should be also implemented as MBean/API for bulks.

## 🔗 Connections (2)

- → UseCase «include»: [[{ADD}15.101 Revert Canceled contract (UseCase 1801846)]]
- → Realisation: [[{ADD}15.103 Revert Canceled contract to Active]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Contract Status Revert
