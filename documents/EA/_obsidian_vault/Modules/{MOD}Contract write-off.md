---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Write-off/Access Rights"
domain: "Modules"
element_id: 1798706
diagrams: 5
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Contract write-off

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Write-off/Access Rights

## 📝 Notes

{ADD CLM-4405/}
This use case describes contracts write-off based on RabbitMQ notification from Account management.

## 🔗 Connections (7)

- ← Dependency: [[{MOD}Process account closure]]
- → Dependency: [[{ADD}Set contract status to Written-off rule]]
- → Dependency: [[{ADD}Create business event]]
- → Realisation: [[{ADD}Contract write-off]]
- → Dependency: [[{MOD}Manage CST request]]
- → Dependency «notify»: [[BSL (Actor 1855968)]]
- ← UseCase «extend»: [[{ADD}Contract write-off via API]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: CLM-4405 - REL Write-off - COMA - AccountClosure processing
- Use Case: Contract write-off
- Use Case: Write-off CEL contract
- Use Case: Write-off REL contract
