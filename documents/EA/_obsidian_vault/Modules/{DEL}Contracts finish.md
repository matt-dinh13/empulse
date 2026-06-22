---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Finish Contract/Access Rights"
domain: "Modules"
element_id: 1867055
diagrams: 2
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 {DEL}Contracts finish

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Finish Contract/Access Rights

## 📝 Notes

This use case describes contract finishing based on notification from Debt catalogue module

## 🔗 Connections (6)

- → Dependency: [[Tracking changes in Contract Registration Queue (Requirement 1842058)]]
- → Dependency: [[Set contract status to Finished rule (COMA)]]
- → Dependency: [[{MOD}Manage CST request (Requirement 1842056)]]
- → Realisation: [[Contracts finish]]
- → Association «notify»: [[{DEL}BSL]]
- ← Association «notify»: [[Debt catalogue (Actor 1869948)]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Contracts finishing
