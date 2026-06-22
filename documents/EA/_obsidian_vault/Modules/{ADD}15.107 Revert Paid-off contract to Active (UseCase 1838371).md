---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights"
domain: "Modules"
element_id: 1838371
diagrams: 2
connections: 2
tags:
  - usecase
  - modules
---

# 🎯 {ADD}15.107 Revert Paid-off contract to Active

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights

## 📝 Notes

{ADD CLM-3535 /}
This use case enables to revert Paid-off contract to Active.
Previous status must be Active.
Should replace DTCH change_contract_status_L2A.sql.
Should be also implemented as MBean/API for bulks.

## 🔗 Connections (2)

- → Realisation: [[{ADD}15.107 Revert Paid-off contract to Active (Requirement 1838361)]]
- → UseCase «include»: [[{ADD}15.105 Revert Paid-off contract (UseCase 1838374)]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Contract Status Revert
