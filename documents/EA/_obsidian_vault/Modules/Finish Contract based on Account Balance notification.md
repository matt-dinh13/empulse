---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Finishing/Access Rights"
domain: "Modules"
element_id: 1866942
diagrams: 4
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 Finish Contract based on Account Balance notification

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Finishing/Access Rights

## 📝 Notes

This use case describes contract finishing based on notification from Debt catalogue module

## 🔗 Connections (6)

- ← Association «notify»: [[Debt catalogue (Actor 1855973)]]
- → Realisation: [[{ADD}Contracts finish]]
- → Dependency: [[Tracking changes in Contract Registration Queue]]
- → Association «notify»: [[BSL (Actor 1855968)]]
- → Dependency: [[Set contract status to Finished rule]]
- → Dependency: [[{MOD}Manage CST request]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: CLM-4456 Process Debt catalogue RabbitMQ notification
- Use Case: Contract finishing automatically
- Use Case: Contracts finishing
