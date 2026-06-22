---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights"
domain: "Modules"
element_id: 1838375
diagrams: 2
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 {ADD}15.100 Change contract status

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contracts Maintenance/Contract Status Revert/Access Rights

## 📝 Notes

{ADD CLM-3537 /}
This use case describes change of contract status and possibly sub status by input parameters. This UC is used by all use cases which perform some type of contract status revert.

## 🔗 Connections (4)

- → Realisation: [[{ADD}15.100 Change contract status (Requirement 1838365)]]
- ← UseCase «include»: [[{MOD}Contracts revert Written-off contract to Paid-off (UseCase 1838369)]]
- ← UseCase «include»: [[{ADD}15.105 Revert Paid-off contract (UseCase 1838374)]]
- ← UseCase «include»: [[{ADD}15.101 Revert Canceled contract (UseCase 1838368)]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Contract Status Revert
