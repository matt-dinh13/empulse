---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{DEL}Write-off Contract/Access Rights"
domain: "Modules"
element_id: 1841728
diagrams: 2
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Contract write-off

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{DEL}Write-off Contract/Access Rights

## 📝 Notes

{ADD CLM-4405/}
This use case describes contracts write-off based on RabbitMQ notification from Account management.

## 🔗 Connections (8)

- → Dependency «notify»: [[{DEL}BSL]]
- → Realisation: [[{ADD}Contract write-off (Requirement 1838344)]]
- → Dependency: [[{ADD}writeOffContract (Boundary 1841723)]]
- → Dependency: [[{MOD}Manage CST request (Requirement 1842056)]]
- ← UseCase «extend»: [[{ADD}Contract write-off via API (UseCase 1841731)]]
- → Dependency: [[{ADD}Create business event (Requirement 1842057)]]
- → Dependency: [[{ADD}Set contract status to Written-off rule (Requirement 1838347)]]
- ← Dependency: [[{DEL}Process account closure]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Contract write-off
