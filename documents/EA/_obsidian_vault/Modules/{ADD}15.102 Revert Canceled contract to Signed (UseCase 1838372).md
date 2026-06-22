---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights"
domain: "Modules"
element_id: 1838372
diagrams: 2
connections: 2
tags:
  - usecase
  - modules
---

# 🎯 {ADD}15.102 Revert Canceled contract to Signed

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights

## 📝 Notes

{ADD CLM-3536 /}
This use case enables to revert Canceled contract to Signed. 
Previous status must be Signed.
Should replace DTCH change_contract_status_T2N.sql.
Should be also implemented as MBean/API for bulks.

## 🔗 Connections (2)

- → UseCase «include»: [[{ADD}15.101 Revert Canceled contract (UseCase 1838368)]]
- → Realisation: [[{ADD}15.102 Revert Canceled contract to Signed (Requirement 1838362)]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Contract Status Revert
