---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Pay-off/Use Case Model"
domain: "Modules"
element_id: 1851484
diagrams: 3
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Contract pay-off

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Pay-off/Use Case Model

## 📝 Notes

{ADD CLM-4480/}
This use case describes contract pay-off based on RabbitMQ notification from Account management.

## 🔗 Connections (7)

- ← UseCase «include»: [[{MOD}Process account closure]]
- → Dependency: [[{MOD}Manage CST request]]
- → Realisation: [[{ADD}Contract pay-off]]
- → Dependency «notify»: [[BSL (Actor 1855968)]]
- ← UseCase «extend»: [[{ADD}Contract pay-off via API (UseCase 1851488)]]
- → Dependency: [[Set contract status to paid-off rule]]
- → Dependency: [[{ADD}Create business event]]

## 📊 Appears In (3 diagrams)

- Use Case: Contract pay-off
- Use Case: Pay-off CEL contract
- Use Case: Pay-off REL contract
